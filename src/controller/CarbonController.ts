import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import { CarbonCLIParameters, CarbonParameters } from "../types/carbon.types";
import { DefaultTheme, Theme } from "../types/themes.enum";
import { openSync, closeSync } from "fs"
import FileUtils from "../utils/FileUtils";


class CarbonController {
    private static CLI_DEFAULT_OUTPUT: string = path.resolve("screenshots");

    private static CARBON_BASE_PATH = "https://carbon.now.sh/";
    private static CARBON_HTML_SELECTOR = "div.container-bg";
    private static CARBON_DEFAULT_THEME: string = DefaultTheme;

    private getFileName(): string {
        return [
            new Date().toISOString().split(":").join("-"),
            "png"
        ].join(".");
    }

    private parseParameters(params: CarbonCLIParameters): CarbonParameters {
        const fileExtension: string = FileUtils.getFileExtension(params.f);

        return {
            code: FileUtils.getFileContents(params.f),
            language: FileUtils.getLanguageByExtension(fileExtension),
            theme: <Theme>(params.t || CarbonController.CARBON_DEFAULT_THEME),
            output: params.o || CarbonController.CLI_DEFAULT_OUTPUT
        }
    }

    private convertParamsToQuery(params: CarbonParameters): string {
        const paramsMap: Map<string, string> = new Map();
        paramsMap.set("t", params.theme);
        paramsMap.set("l", params.language);
        paramsMap.set("code", params.code);

        const paramsList = []
        for (const [key, value] of paramsMap.entries()) {
            paramsList.push(`${key}=${encodeURIComponent(value)}`);
        }

        return paramsList.join("&");
    }

    public async getScreenshot(params: CarbonCLIParameters): Promise<string> {
        const carbonParsedParameters = this.parseParameters(params);

        if (!fs.existsSync(carbonParsedParameters.output)) {
            fs.mkdirSync(carbonParsedParameters.output);
        }

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        const carbonQueryString = this.convertParamsToQuery(carbonParsedParameters);
        const carbonFullPath = [
            CarbonController.CARBON_BASE_PATH, carbonQueryString
        ].join("?");

        await page.goto(carbonFullPath);
        const targetElement = await page.$(CarbonController.CARBON_HTML_SELECTOR);
        let screenshotPath: string;
        if (targetElement) {
            const OUTPUT_PATH = path.join(carbonParsedParameters.output, this.getFileName());

            closeSync(openSync(OUTPUT_PATH, "a"));
            await targetElement.screenshot({
                path: OUTPUT_PATH
            });

            screenshotPath = OUTPUT_PATH;
        } else {
            throw new Error(`Unable to find ${CarbonController.CARBON_HTML_SELECTOR} while trying to get a screenshot`);
        }

        await browser.close();

        return screenshotPath;
    }
}

export default CarbonController;