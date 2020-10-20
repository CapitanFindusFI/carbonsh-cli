import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import { CarbonParameters } from "../types/carbon.types";
import { DefaultTheme } from "../types/themes.enum";
import { openSync, closeSync } from "fs"


abstract class CarbonController<T> {
    private static CARBON_BASE_PATH = 'https://carbon.now.sh/';
    private static CARBON_HTML_SELECTOR = 'div.container-bg';

    public static CARBON_DEFAULT_THEME: string = DefaultTheme;

    private getFileName(): string {
        return [
            new Date().toISOString().split(':').join('-'), // colons in file names do not work on windows
            'png'
        ].join('.');
    }

    protected abstract parseParameters(params: T): CarbonParameters;

    private convertParamsToQuery(params: CarbonParameters): string {
        const paramsMap: Map<string, string> = new Map();
        paramsMap.set('t', params.theme);
        paramsMap.set('l', params.language);
        paramsMap.set('code', params.code);

        const paramsList = []
        for (const [key, value] of paramsMap.entries()) {
            paramsList.push(`${key}=${encodeURIComponent(value)}`);
        }

        return paramsList.join('&');
    }

    public async getScreenshot(params: T): Promise<string> {
        const carbonParsedParameters = this.parseParameters(params);

        if (!fs.existsSync(carbonParsedParameters.output)) {
            fs.mkdirSync(carbonParsedParameters.output);
        }

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        const carbonQueryString = this.convertParamsToQuery(carbonParsedParameters);
        const carbonFullPath = [
            CarbonController.CARBON_BASE_PATH, carbonQueryString
        ].join('?');

        await page.goto(carbonFullPath);
        const targetElement = await page.$(CarbonController.CARBON_HTML_SELECTOR);
        let screenshotPath: string;
        if (targetElement) {
            const OUTPUT_PATH = path.join(carbonParsedParameters.output, this.getFileName());

            closeSync(openSync(OUTPUT_PATH, 'a'));
            await targetElement.screenshot({
                path: OUTPUT_PATH
            });

            screenshotPath = OUTPUT_PATH;
        } else {
            // TODO something happened
        }

        await browser.close();

        return screenshotPath;
    }
}

export default CarbonController;