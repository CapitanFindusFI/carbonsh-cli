import CarbonController from "../../controller/CarbonController";
import { CarbonCLIParameters, CarbonParameters } from "../../types/carbon.types";
import FileUtils from "../../utils/FileUtils";

class CarbonCLIController extends CarbonController<CarbonCLIParameters> {
    protected parseParameters(params: CarbonCLIParameters): CarbonParameters {
        const fileExtension: string = FileUtils.getFileExtension(params.f);

        return {
            code: FileUtils.getFileContents(params.f),
            language: FileUtils.getLanguageByExtension(fileExtension)
        }
    }
}

export default CarbonCLIController;