import axios, { AxiosInstance, AxiosResponse } from 'axios';

//const LIBRETRANSLATE_ENDPOINT = "http://localhost:5000";

interface Language {
  code: string;
  name: string;
}

class LibreTranslate {
  #apiKey: string | null = null;
  #apiEndpoint: string | null = null;
  #axiosInstance: AxiosInstance;

  constructor() {
    this.#axiosInstance = axios.create({
      // baseURL: LIBRETRANSLATE_ENDPOINT,
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
    const result: AxiosResponse<Language[]> = await this.#axiosInstance.get('/languages');
    return result.data;
  }

  async detect(text: string) {
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
    console.log(result?.data);
  }

  async translate(text: string, sourceLang: string, targetLang: string) {
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

      console.log(result?.status);
      result?.status > 300
        ? console.error(result?.data?.error)
        : console.log(result?.data?.translatedText);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Error: ", JSON.stringify(error));
      } else {
        console.error("Error: ", JSON.stringify(error));
      }
    }
  }
}

export const libreTranslate = new LibreTranslate();

// libreTranslate.setApiEndpoint(LIBRETRANSLATE_ENDPOINT);
// libreTranslate.translate("There is a tiger.", "en", "de");
// libreTranslate.detect("Dies ist ein Tiger.");
// libreTranslate.listLanguages();
