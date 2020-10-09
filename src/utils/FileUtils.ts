import path from "path";
import { readFileSync, readdirSync, lstatSync } from "fs";
import { ExtensionLanguages, Language } from "../types/languages.enum";
import Queue from 'queue-fifo';

class FileUtils {
    public static getFileContents(filepath: string): string {
        return readFileSync(filepath).toString();
    }

    public static getFileExtension(filepath: string): string {
        return path.extname(filepath);
    }

    public static getLanguageByExtension(fileExtension: string): Language {
        return ExtensionLanguages.get(fileExtension);
    }

    public static traverseDirectoryAndReturnListOfFiles(rootDirPath : string) : string[] {
        var directoriesToProcess = new Queue<string>();
        var files:string[] = [];
        directoriesToProcess.enqueue(rootDirPath);
        while(!directoriesToProcess.isEmpty()) {
            // get all directories under current directory
            let currentDir : string = directoriesToProcess.dequeue();
            var paths:string[] = readdirSync(currentDir);
            paths.forEach(function(elemPath) {
                var fullElemPath:string = path.join(currentDir, elemPath);
                if(lstatSync(fullElemPath).isDirectory()) {
                    directoriesToProcess.enqueue(fullElemPath);
                } else {
                    files.push(fullElemPath);
                }
            });
        }
        return files;
    }
}

export default FileUtils;