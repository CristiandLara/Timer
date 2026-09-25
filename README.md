# Mission Timer

Este proyecto es un contador regresivo con estilo de misión espacial. La aplicación permite ingresar horas, minutos y segundos, iniciar o pausar el conteo y reiniciarlo cuando se quiera.

## Qué tecnologías se usaron

### HTML
Se usa para construir la estructura visual del reloj:

- campo para ingresar horas
- campo para ingresar minutos
- campo para ingresar segundos
- pantalla donde se muestra el tiempo restante
- botones de Start y Restart

En este proyecto, el archivo principal es [index.html](index.html).

### CSS
Se usa para darle estilo visual al timer:

- fondo oscuro
- colores tipo NASA
- panel central con efecto de consola
- animaciones de estrellas y brillo
- diseño responsivo para móvil

El estilo está en [styles.css](styles.css).

### JavaScript
Se usa para darle comportamiento al timer:

- leer los valores ingresados por el usuario
- validar que estén dentro de rango
- convertir el tiempo a segundos
- descontar 1 segundo por cada intervalo
- actualizar la pantalla del timer
- pausar o reiniciar el conteo

La lógica está en [scripts.js](scripts.js).

---

## ¿Por qué se usa cada parte?

### `document.querySelector()`
Se usa para encontrar elementos del HTML por su id o selector.

Ejemplo:

```js
const hoursInput = document.querySelector('#hours');
```

Esto permite guardar en JavaScript el input de horas para poder leer su valor o modificarlo.

### `addEventListener()`
Se usa para escuchar eventos del usuario.

Por ejemplo:

```js
startButton.addEventListener('click', startTimer);
```

Esto significa: cuando alguien haga clic en el botón de inicio, se ejecuta la función `startTimer()`.

### `setInterval()`
Se usa para repetir una acción cada cierto tiempo.

```js
timerId = setInterval(() => {
  remainingSeconds -= 1;
  renderTimer();
}, 1000);
```

Aquí se resta 1 segundo cada 1000 milisegundos (1 segundo).

### `clearInterval()`
Se usa para detener el intervalo.

```js
clearInterval(timerId);
```

Esto detiene el conteo cuando se pausa o se reinicia el reloj.

### `padStart()`
Se usa para asegurarnos de que siempre haya dos dígitos.

```js
String(value).padStart(2, '0');
```

Ejemplo:

- `5` -> `05`
- `9` -> `09`

Esto hace que el timer se vea así:

- `00:05:09`
- y no `0:5:9`

### `Math.min()` y `Math.max()`
Se usan para limitar valores.

Por ejemplo:

```js
const minutes = Math.min(59, Math.max(0, Number(minutesInput.value) || 0));
```

Esto impide que los minutos sean menores que 0 o mayores que 59.

### `remainingSeconds`
Es la variable más importante del timer. Guarda el tiempo total en segundos que falta para terminar.

Ejemplo:

- 1 hora = 3600 segundos
- 2 minutos = 120 segundos
- 3 segundos = 3 segundos

Todo junto: 3723 segundos.

### `renderTimer()`
Convierte esos segundos en horas, minutos y segundos para mostrarlos en pantalla.

```js
const hours = Math.floor(remainingSeconds / 3600);
const minutes = Math.floor((remainingSeconds % 3600) / 60);
const seconds = remainingSeconds % 60;
```

Esto permite mostrar el tiempo en formato de reloj.

---

## Flujo general del proyecto

1. El usuario escribe horas, minutos y segundos.
2. El programa valida esos valores.
3. Se convierten a segundos totales.
4. Cuando se presiona Start, empieza a restar 1 por segundo.
5. La pantalla se actualiza cada segundo.
6. Cuando el tiempo llega a 0, se detiene y muestra COMPLETE.
7. Si se presiona Restart, vuelve a cargar el tiempo ingresado.

---

## Archivos del proyecto

- [index.html](index.html): estructura HTML
- [styles.css](styles.css): diseño visual y animaciones
- [scripts.js](scripts.js): lógica del temporizador
- [README.md](README.md): explicación general del proyecto

---

## Resultado final

Este proyecto combina HTML, CSS y JavaScript para crear un temporizador visual y funcional. La parte más importante es la lógica en JavaScript, porque es la que:

- lee entradas
- calcula el tiempo
- lo cuenta en segundo a segundo
- lo muestra en pantalla
- lo pausa y lo reinicia

Si quieres, también puedo hacer una versión del README más corta, más técnica o más educativa para principiantes.
