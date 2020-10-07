import path from "path";
import yargs from "yargs";
import fs from "fs";
import CarbonCLIController from './cli/controllers/CarbonCLIController';
import { DefaultTheme, ThemesList } from './types/themes.enum';

const args = yargs.option('f', {
    alias: 'file',
    describe: 'The path of the file to generate code with'
}).option('t', {
    alias: 'theme',
    describe: 'The carbon.now.sh theme to use, defaults to "seti"',
    default: DefaultTheme,
    choices: ThemesList
}).option('o',{
    alias: 'output',
    describe: 'The path where to save the image from Carbon.now.sh',
    default: 'screenshots'
}).argv;

const SCREENSHOTS_FOLDER = path.join('screenshots');
try {
    fs.mkdirSync(SCREENSHOTS_FOLDER);
} catch (e) {

}

let controller = new CarbonCLIController();
try {
    controller.getScreenshot(args);
} catch (e) {
    console.error(e)
    process.exit(-1)
}