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
}).option('o', {
    alias: 'output',
    describe: 'The path where to save the image from Carbon.now.sh',
    default: 'screenshots'
}).argv;

// should not have both file and dir arguments
if (args.file && args.dir) {
    console.error("Cannot have both file and dir arguments passed.");
    process.exit(1);
}

let controller = new CarbonCLIController();
try {
    if (args.dir) {
        var files: string[] = FileUtils.traverseDirectoryAndReturnListOfFiles(args.dir);
        files.forEach((f) => {
            controller.getScreenshot({
                t: args.t,
                o: args.o,
                f
            });
        });
    } else if(args.file){
        controller.getScreenshot(args);
    }else(
        console.log("Need to pass a file with '-f' or a dir with '-d'\nFor more usage info use '--help'")
    )

} catch (e) {
    console.error(e)
    process.exit(-1)
}