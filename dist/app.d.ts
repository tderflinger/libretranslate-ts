interface Language {
    code: string;
    name: string;
}
declare class LibreTranslate {
    #private;
    constructor();
    setApiKey(key: string): void;
    setApiEndpoint(endpoint: string): void;
    listLanguages(): Promise<Language[]>;
    detect(text: string): Promise<void>;
    translate(text: string, sourceLang: string, targetLang: string): Promise<void>;
}
export declare const libreTranslate: LibreTranslate;
export {};
