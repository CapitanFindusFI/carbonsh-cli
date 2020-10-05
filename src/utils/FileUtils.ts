import path from "path";
import { readFileSync } from "fs";
import { Extensions, Languages, LanguagesExtensions } from "../constants/languages.enum";

class FileUtils {
    public static getFileContents(filepath: string): string {
        return readFileSync(filepath).toString();
    }

    public static getFileExtension(filepath: string): string {
        return path.extname(filepath);
    }

    public static getLanguageByExtension(fileExtension: string): Languages {
        return LanguagesExtensions.get(<Extensions>fileExtension);
    }
}

export default FileUtils;