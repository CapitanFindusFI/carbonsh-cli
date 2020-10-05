import { Languages } from "../constants/languages.enum";

export interface CarbonParameters {
    code: string;
    background?: string;
    theme?: string;
    language?: Languages
}

export interface CarbonAPIParameters {
    code: string;
    background?: string;
    theme?: string;
    language?: Languages
}

export interface CarbonCLIParameters {
    [x: string]: unknown,
    f: string,
    c?: string,
    t?: string,
    l?: Languages
};