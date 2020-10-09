import path from "path";
import CarbonController from "../../controller/CarbonController";
import { CarbonCLIParameters, CarbonParameters } from "../../types/carbon.types";
import { Theme } from "../../types/themes.enum";
import FileUtils from "../../utils/FileUtils";

class CarbonCLIController extends CarbonController<CarbonCLIParameters> {
    private static CLI_DEFAULT_OUTPUT: string = path.resolve('screenshots');

    protected parseParameters(params: CarbonCLIParameters): CarbonParameters {
        const fileExtension: string = FileUtils.getFileExtension(params.f);

        return {
            code: FileUtils.getFileContents(params.f),
            language: FileUtils.getLanguageByExtension(fileExtension),
            theme: <Theme>(params.t || CarbonController.CARBON_DEFAULT_THEME),
            output: params.o || CarbonCLIController.CLI_DEFAULT_OUTPUT
        }
    }
}

export default CarbonCLIController;