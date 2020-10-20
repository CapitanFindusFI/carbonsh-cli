# Carbon.sh CLI

Node.js CLI which is useful to create screenshots using https://carbon.now.sh

## Build

Run `yarn build` will create a production distribution inside `/dist` folder

## Usage

Having built it, just run from the CLI like `node dist/bundle.js`.

Following here parameters which can be used and are being parsed

 - `file`, alias f: The complete path to the file which code you want to screenshot;
 - `theme`, alias `t`: The carbon.now.sh theme you want to use;
 - `output`, alias `o`: Where to save the file;
 - `directory`, alias `d`: Passing an entire folder of files to be parsed and screenshotted