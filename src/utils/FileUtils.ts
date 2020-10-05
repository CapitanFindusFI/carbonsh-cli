import path from "path";
import { readFileSync } from "fs";
import { ExtensionLanguages, Language } from "../types/languages.enum";

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
}

export default FileUtils;