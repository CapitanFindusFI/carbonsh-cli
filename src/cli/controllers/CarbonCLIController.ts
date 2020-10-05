import CarbonController from "../../controller/CarbonController";
import { CarbonCLIParameters, CarbonParameters } from "../../types/carbon.types";
import { Theme } from "../../types/themes.enum";
import FileUtils from "../../utils/FileUtils";

class CarbonCLIController extends CarbonController<CarbonCLIParameters> {
    protected parseParameters(params: CarbonCLIParameters): CarbonParameters {
        const fileExtension: string = FileUtils.getFileExtension(params.f);

        return {
            code: FileUtils.getFileContents(params.f),
            language: FileUtils.getLanguageByExtension(fileExtension),
            theme: <Theme>params.t
        }
    }
}

export default CarbonCLIController;