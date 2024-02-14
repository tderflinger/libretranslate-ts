import axios from "axios";

const LIBRETRANSLATE_ENDPOINT = "http://localhost:5000";

class LibreTranslate {
  #apiKey = null;

  #apiEndpoint = null;

  setApiKey(key) {
    this.#apiKey = key;
  }

  setApiEndpoint(endpoint) {
    this.#apiEndpoint = endpoint;
  }

  async listLanguages() {
    const result = await axios({
      method: "get",
      url: `${this.#apiEndpoint}/languages`,
      headers: {
        Accept: "application/json",
      },
    });
    console.log(result?.data);
  }

  async detect(text) {
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

  async translate(text, sourceLang, targetLang) {
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

      console.log(result?.statusCode);
      result?.statusCode > 300
        ? console.error(result?.data?.error)
        : console.log(result?.data?.translatedText);
    } catch (error) {
      console.error("Error: ", error?.response?.data?.error);
    }
  }
}

const libreTranslate = new LibreTranslate();

libreTranslate.setApiEndpoint(LIBRETRANSLATE_ENDPOINT);
libreTranslate.translate("There is a tiger.", "en", "de");
// libreTranslate.detect("Dies ist ein Tiger.");
// libreTranslate.listLanguages();
