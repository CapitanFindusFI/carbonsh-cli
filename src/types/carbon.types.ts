import { Languages } from "../constants/languages.enum";
import { Themes } from "../constants/themes.enum";

export interface CarbonParameters {
    code: string;
    background?: string;
    theme?: Themes;
    language?: Languages
}

export interface CarbonAPIParameters {
    code: string;
    background?: string;
    theme?: Themes;
    language?: Languages
}

export interface CarbonCLIParameters {
    [x: string]: unknown,
    f: string,
    c?: string,
    t?: Themes,
    l?: Languages
};