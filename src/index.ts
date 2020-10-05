import yargs = require('yargs')
import CarbonAPIController from './api/controllers/CarbonAPIController';
import CarbonCLIController from './cli/controllers/CarbonCLIController';
import { CarbonCLIParameters } from './types/carbon.types';

const argv: CarbonCLIParameters = yargs.options({
    f: { type: 'string', default: null, alias: 'file' },
    c: { type: 'string', default: null, alias: 'background' },
    t: { type: 'string', default: null, alias: 'theme' },
}).argv;

let controller: CarbonCLIController | CarbonAPIController;
if (argv.f) {
    controller = new CarbonCLIController();
    controller.getScreenshot(argv);
} else {
    // TODO not yet implemented
    controller = new CarbonAPIController()
}