# Dragon Ball Cards

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Dragon_Ball_Z_logo.svg/1280px-Dragon_Ball_Z_logo.svg.png" width="300" alt="Logo de Dragon Ball">

Proyecto sencillo de visualización de personajes de Dragon Ball usando HTML, CSS y JavaScript.



## Estructura del proyecto

- `index.html` — plantilla principal de la página.
- `styles.css` — estilos para el header, las cards y el comportamiento hover.
- `script.js` — carga datos desde la API, genera las cards dinámicamente y aplica colores por personaje.
- `.gitignore` — archivos o carpetas que no se deben subir al repositorio.

## Qué hace

- Consume la API de Dragon Ball: `https://dragonball-api.com/api/characters?limit=12`
- Genera cards por cada personaje recibida.
- Muestra el nombre siempre y el resto de contenido (imagen, descripción, stats) solo al hacer hover.
- Cambia el color del `header` según el personaje al pasar el mouse sobre la card.
- Usa colores personalizados para cada personaje definidos en `script.js`.

## Cómo usar

1. Abre `index.html` en el navegador.
2. Espera a que cargue la API.
3. Coloca el cursor sobre una card para ver imagen, descripción y stats.

## Estilos y comportamiento

- Las cards se muestran en filas usando `flex-wrap`.
- El borde de la card aparece solo en hover.
- El nombre del personaje se colorea según el personaje.
- El header cambia de color dinámicamente al activar el hover sobre una card.

## Cambios importantes recientes

- Se ajustó el tamaño de las cards para que no queden demasiado grandes.
- Se mantuvo el layout con `flex` para mayor adaptabilidad responsive.
- Se agregó `z-index` al header para evitar que el contenido de las cards sobresalga.
- Se limitó el contenido visible inicialmente a solo el nombre del personaje.

## Notas

- Si necesitas añadir más personajes, amplía el objeto `coloresPersonajes` y modifica el limit en la `url`, en `script.js`.

