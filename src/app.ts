import axios, { AxiosInstance, AxiosResponse } from "axios";

type Language = {
  code: string;
  name: string;
  targets: string[];
}

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
};

class LibreTranslate {
  #apiKey: string | null = null;
  #apiEndpoint: string | null = null;
  #axiosInstance: AxiosInstance;

  constructor() {
    this.#axiosInstance = axios.create({
      headers: {
        Accept: "application/json",
      },
    });
  }

  setApiKey(key: string): void {
    this.#apiKey = key;
  }

  setApiEndpoint(endpoint: string): void {
    this.#apiEndpoint = endpoint;
    this.#axiosInstance.defaults.baseURL = endpoint;
  }

  async listLanguages(): Promise<Language[]> {
    const result: AxiosResponse<Language[]> = await this.#axiosInstance.get(
      "/languages"
    );
    return result.data;
  }

  async detect(text: string): Promise<DetectResponse> {
    try {
      const result = await axios({
        method: "post",
        url: `${this.#apiEndpoint}/detect`,
        data: {
          q: text,
          format: "text",
          api_key: this.#apiKey,
        },
        headers: {
          Accept: "application/json",
        },
      });
      const response: DetectResponse = {
        status: result?.status,
        language: result?.data[0]?.language,
        confidence: result?.data[0]?.confidence,
        error: result?.data?.error,
      };
      return response;
    } catch (error: any) {
      const response: DetectResponse = {
        status: 500,
        language: "",
        confidence: 0,
        error: error.response?.data?.error || error?.message,
      };
      return response;
    }
  }

  async translate(
    text: string,
    sourceLang: string,
    targetLang: string
  ): Promise<TranslateResponse> {
    try {
      const result = await axios({
        method: "post",
        url: `${this.#apiEndpoint}/translate`,
        data: {
          q: text,
          source: sourceLang,
          target: targetLang,
          format: "text",
          api_key: this.#apiKey,
        },
        headers: {
          Accept: "application/json",
        },
      });
      const response: TranslateResponse = {
        status: result?.status,
        translatedText: result?.data?.translatedText,
        error: result.data?.error,
      };
      return response;
    } catch (error: any) {
      const response: TranslateResponse = {
        status: 500,
        translatedText: "",
        error: error.response?.data?.error || error?.message,
      };
      return response;
    }
  }
}

export const libreTranslate = new LibreTranslate();