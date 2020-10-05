import yargs = require('yargs')
import CarbonCLIController from './cli/controllers/CarbonCLIController';
import { CarbonCLIParameters } from './types/carbon.types';

const argv: CarbonCLIParameters = yargs.options({
    f: { type: 'string', default: null, alias: 'file' },
    c: { type: 'string', default: null, alias: 'background' },
    t: { type: 'string', default: null, alias: 'theme' },
}).argv;

let controller: CarbonCLIController;
if (argv.f) {
    controller = new CarbonCLIController();
    controller.getScreenshot(argv);
}