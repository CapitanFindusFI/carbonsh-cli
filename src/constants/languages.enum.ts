export type Languages = "JavaScript" | "TypeScript" | "Java" | "PHP";
export type Extensions = ".js" | ".ts" | ".java" | ".php";

export const LanguagesList: ReadonlyArray<Languages> = [
    'JavaScript',
    'TypeScript',
    'Java',
    'PHP'
];

export const ExtensionsList: ReadonlyArray<Extensions> = [
    ".js", ".ts", ".java", ".php"
];

export const LanguagesExtensions = ExtensionsList.reduce((map: Map<Extensions, Languages>, extension: Extensions, index: number) => {
    map.set(extension, LanguagesList[index]);
    return map;
}, new Map<Extensions, Languages>());