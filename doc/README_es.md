![logo](./logo.svg)
# libretranslate-ts

[[Inglés]](../README.md)

Una biblioteca sencilla y fácil de usar para [LibreTranslate](https://libretranslate.com/).
También se puede utilizar con JavaScript.

LibreTranslate es una aplicación de traducción gratuita y de código abierto que también ofrece una API.
Esta biblioteca se conecta a la API.

Si usted está buscando instrucciones sobre cómo implementar su propia instancia LibreTranslate puede encontrarlas [aquí](https://github.com/LibreTranslate/LibreTranslate).

# Instalación

```bash
npm i libretranslate-ts --save
```

## Ejemplo de uso

En este ejemplo, me conecto a una instancia LibreTranslate en `localhost:5000`.
Cuando tu instancia es diferente, necesitas cambiar esto.

app.mjs
```typescript
importa { libreTranslate } de "libretranslate-ts";

const LIBRETRANSLATE_ENDPOINT = "http://localhost:5000";

libreTranslate.setApiEndpoint(LIBRETRANSLATE_ENDPOINT);
libreTranslate.setApiKey("));
const result Detectar = esperar libreTranslate.detect("Hola, cómo estás?");
console.log("Idioma detectada: ", resultDetect);
const result = await libreTranslate.translate(
"Hay un tigre en la casa cerca del granero.",
"en",
"es"
);

si (resultado?.status √= 400) {
consola.log("Status: ", result?.status);
consola.error("Error: ", result?.error);
process.exit(1);
}

consola.log(resultar?.translatedText);
```

## Bugs

Por favor, archiva cualquier problema y realce ideas bajo la pestaña "Issues".

## Roadmap

- Añadir posibilidad de traducir archivos enteros

## License

MIT Licencia