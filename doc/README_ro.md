![logo](./logo.svg)
# libretranslate-ts

[[Español]](./doc/README_es.md)  [[English]](../README.md) 

O bibliotecă TypeScript simplă și ușor de utilizat pentru [LibreTranslate](https://libretranslate.com/).
Poate fi folosit şi cu JavaScript.

LibreTranslate este o aplicație de traducere gratuită și open source care oferă, de asemenea, un API.
Această bibliotecă se conectează la API.

Dacă sunteţi în căutarea unor instrucţiuni privind modul de desfăşurare a propriului caz LibreTranslate le puteţi găsi [aici][https://github.com/LibreTranslate/LibreTranslate].

## Instalare

```bash
npm i libretranslate-ts --save
```

## Exemplu de utilizare

În acest exemplu, mă conectez la o instanţă LibreTranslate pe site-ul `localhost:5000`.
Când cazul tău e diferit, trebuie să schimbi asta.

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

Vă rugăm să depuneţi orice probleme şi idei de îmbunătăţire sub tab-ul "Issues."

## Foaie de parcurs

- Adăugați posibilitatea de a traduce fișiere întregi

## Licență

MIT Licență