import CarbonController from "../../controller/CarbonController";
import { CarbonAPIParameters, CarbonParameters } from "../../types/carbon.types";
import express from "express";

const PORT = process.env.PORT || 8000;

class CarbonAPIController extends CarbonController<CarbonAPIParameters> {
    private router: express.Application

    constructor() {
        super();
        
        this.router = express();
        this.router.listen(PORT, () => {
            console.log(`App listening on http://localhost:${PORT}`);
        });
    }

    protected parseParameters(params: CarbonAPIParameters): CarbonParameters {
        return {
            code: params.code,
            language: params.language,
            background: params.background,
            theme: params.theme
        }
    }
}

export default CarbonAPIController;