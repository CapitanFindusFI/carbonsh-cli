import path from "path";
import yargs from "yargs";
import fs from "fs";
import CarbonCLIController from './cli/controllers/CarbonCLIController';
import { DefaultTheme, ThemesList } from './types/themes.enum';
import FileUtils from "./utils/FileUtils";

const args = yargs.option('f', {
    alias: 'file',
    describe: 'The path of the file to generate code with'
}).option('t', {
    alias: 'theme',
    describe: 'The carbon.now.sh theme to use, defaults to "seti"',
    default: DefaultTheme,
    choices: ThemesList
}).option('d', {
    alias: 'dir',
    describe: 'Path to a directory that has code files'
}).option('o',{
    alias: 'output',
    describe: 'The path where to save the image from Carbon.now.sh',
    default: 'screenshots'
}).argv;

// should not have both file and dir arguments
if (args.file && args.dir) {
    console.error("Cannot have both file and dir arguments passed.");
    process.exit(1);
}

const SCREENSHOTS_FOLDER = path.join('screenshots');
try {
    fs.mkdirSync(SCREENSHOTS_FOLDER);
} catch (e) {

}

let controller = new CarbonCLIController();
try {
    if (args.dir) {
        var files:string[] = FileUtils.traverseDirectoryAndReturnListOfFiles(args.dir);
        files.forEach((f) => {
            controller.getScreenshot({f});
        });
    } else {
        controller.getScreenshot(args);
    }
} catch (e) {
    console.error(e)
    process.exit(-1)
}