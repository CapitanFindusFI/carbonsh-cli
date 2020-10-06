type Language = "JavaScript" | "TypeScript" | "Java" | "PHP";

const ExtensionLanguages: Map<string, Language> = new Map<string, Language>();
ExtensionLanguages.set('.js', 'JavaScript');
ExtensionLanguages.set('.ts', 'TypeScript');
ExtensionLanguages.set('.java', 'Java');
ExtensionLanguages.set('.php', 'PHP');

const LanguagesList: Language[] = Array.from(ExtensionLanguages.values());

export {
    Language,
    ExtensionLanguages,
    LanguagesList
}