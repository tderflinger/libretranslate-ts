type Language = {
    code: string;
    name: string;
    targets: string[];
};
type DetectResponse = {
    status: number;
    language: string;
    confidence: number;
    error?: string;
};
type TranslateResponse = {
    status: number;
    translatedText: string;
    error?: string;
    alternatives?: string[];
};
declare class LibreTranslate {
    #private;
    constructor();
    setApiKey(key: string): void;
    setApiEndpoint(endpoint: string): void;
    listLanguages(): Promise<Language[]>;
    detect(text: string): Promise<DetectResponse>;
    translate(text: string, sourceLang: string, targetLang: string, alternatives?: number): Promise<TranslateResponse>;
}
export declare const libreTranslate: LibreTranslate;
export {};
