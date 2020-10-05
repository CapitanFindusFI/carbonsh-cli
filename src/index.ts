import yargs = require('yargs')
import CarbonCLIController from './cli/controllers/CarbonCLIController';
import { CarbonCLIParameters } from './types/carbon.types';
import { DefaultTheme, ThemesList } from './types/themes.enum';

const argv: CarbonCLIParameters = yargs.options({
    f: { type: 'string', default: null, alias: 'file' },
    t: { type: 'string', default: DefaultTheme, alias: 'theme', choices: ThemesList },
}).argv;

let controller = new CarbonCLIController();
controller.getScreenshot(argv);