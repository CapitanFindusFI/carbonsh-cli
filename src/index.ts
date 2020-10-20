import yargs from "yargs";
import CarbonCLIController from './cli/controllers/CarbonCLIController';
import { DefaultTheme, ThemesList } from './types/themes.enum';
import FileUtils from "./utils/FileUtils";
import ora from 'ora'
import { CarbonCLIParameters } from "./types/carbon.types";

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

const generateScreenshots = async (args: CarbonCLIParameters) => {
    const controller = new CarbonCLIController();
    let promises: Promise<string>[] = [];

    if (args.d) {
        const filesList: string[] = FileUtils.traverseDirectoryAndReturnListOfFiles(args.d);
        promises = filesList.map((file: string) => controller.getScreenshot({
            f: file,
            t: args.t,
            o: args.o
        }));
    } else if (args.file) {
        promises.push(controller.getScreenshot(args));
    } else {
        throw new Error("Need to pass a file with '-f' or a dir with '-d'\nFor more usage info use '--help'");
    }

    return Promise.all(promises);
}

const screenshotPromises = generateScreenshots(args);

const spinner = ora(`Creating screenshot...`).start();
screenshotPromises.then(() => {
    spinner.succeed('Your screenshots have been created!');
    process.exit(0);
}).catch((e) => {
    console.error(e);
    spinner.fail('Something bad happened!');
    process.exit(-1);
})