# libretranslate-ts

A simple and easy to use TypeScript library for [LibreTranslate](https://libretranslate.com/).
Can also be used with JavaScript.

LibreTranslate is a free and open source translation application that also offers an API.
This library connects to the API.

If you are looking for instructions on how to deploy your own LibreTranslate instance you can find them [here](https://github.com/LibreTranslate/LibreTranslate).

## Installation

```bash
npm i libretranslate-ts --save
```

## Example Usage

In this example, I connect to a LibreTranslate instance on `localhost:5000`.
When your instance is different, you need to change this.

app.mjs
```typescript
import { libreTranslate } from "libretranslate-ts";

const LIBRETRANSLATE_ENDPOINT = "http://localhost:5000";

libreTranslate.setApiEndpoint(LIBRETRANSLATE_ENDPOINT);
libreTranslate.setApiKey("");
const resultDetect = await libreTranslate.detect("Hola, cómo estás?");
console.log("Detected language: ", resultDetect);
const result = await libreTranslate.translate(
    "There is a tiger in the house nearby the barn.",
    "en",
    "es"
);

if (result?.status >= 400) {
    console.log("Status: ", result?.status);
    console.error("Error: ", result?.error);
    process.exit(1);
}

console.log(result?.translatedText);
```

## Bugs

Please file any issues and enhancement ideas under the "Issues" tab.

## Roadmap

- Add possibility to translate whole files

## License

MIT License
