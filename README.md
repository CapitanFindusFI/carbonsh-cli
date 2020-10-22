
# Carbon.sh CLI

Node.js CLI which is useful to create screenshots using https://carbon.now.sh

Currently supports following file extension/languages

 - *.js* - JavaScript
 - *.ts* - TypeScript
 - *.java* - Java
 - *.php* - PHP

**Feel free to contribute by creating a pull request to add more file-extension/language entries**

## Build

Run `yarn build` will create a production distribution inside `/dist` folder

## Usage

Having built it, just run from the CLI like `node dist/bundle.js`.

Following here parameters which can be used and are being parsed

 - `file`, alias `f`: The complete path to the file which code you want to screenshot;
 - `theme`, alias `t`: The carbon.now.sh theme you want to use;
 - `output`, alias `o`: Where to save the file;
 - `directory`, alias `d`: Passing an entire folder of files to be parsed and screenshot.

## Examples

### Create a screenshot from a file
 
##### If not specified, will output to `./screenshots` folder
 
Let's pretend you have a 'test.js' file containing code

    node dist/bundle.js -f <path-to-test.js>
    // will output the path of the screenshot


### Create multiple screenshots
 
Let's pretend you have a folder with multiple .js files containing code

    node dist/bundle.js -d <path-to-files-directory>
    // will output the path of all screenshots

### Specify output path

    node dist/bundle.js -d <path-to-directory> -o <output-dir>
    // will output path of all screenshots inside given directory
