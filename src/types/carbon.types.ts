
import { Language } from "./languages.enum";
import { Theme } from "./themes.enum";

export interface CarbonParameters {
    code: string;
    theme?: Theme;
    language?: Language
    output?: string,
}

export interface CarbonCLIParameters {
    [x: string]: unknown,
    f?: string,
    t?: string,
    o?: string,
};