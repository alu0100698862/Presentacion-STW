# SISTEMAS Y TECNOLOGÍAS WEB - JQUERY

## jQuery

jQuery es un Framework que facilita la manipulación de los árboles DOM de las páginas web evitando las complejidades del uso de lenguaje Javascript.

La diferencia fundamental con JavaScript es que jQuery evita las complejidades de JavaScript a la hora de codificar.

## Instalación de jQuery en nuestro proyecto

A la hora de instalar jQuery podemos escoger entre múltiples opciones:

* Descargando los ficheros necesarios
* A partir de un CDN
* Instalación a través del gestor de dependencias Bower

### Descargando los ficheros necesarios

Para descargar los ficheros necesarios, debemos acceder a la web oficial de jQuery:

 [Web Oficial jQuery](https://jquery.com/)

Accedemos al path de descargar, en donde procedemos a su descarga con el comando `curl`

 `curl http://code.jquery.com/jquery-1.11.3.min.js -o js/jquery.js`

 `curl http://code.jquery.com/jquery-1.11.3.js -o js/jquery.js`

 Y finalmente, incluir en nuestro documento HTML la siguiente línea en la zona de **head**

 `<script src="js/script.js" type="text/javascript"></script>`

### A partir de un CDN

 Para incluir en nuestro proyecto jQuery a través de un CDN, debemos incluir en nuestro documento HTML la siguiente línea en la zona de **head**

 ```
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
```

### Instalación a través del gestor de dependencias Bower

En el caso de que tengamos instalado en nuestro sistema `npm`, podemos instalar a través del gestor de dependencias para contenidos web de front-end Bower

`bower install jquery`

Y, se nos generaría dentro del directorio `node_modules`, un nuevo directorio denominado `bower_components/jquery` que contendría dicho fichero.

## API jQuery

La API de jQuery provee una amplia variedad de eventos que hacen posible modificar los documentos HTML, gestionar eventos, animación y gestión AJAX de una forma sencilla.

[API jQuery](http://api.jquery.com/)

##Usos de jQuery

jQuery lo podemos usar para múltiples tareas como pueden ser las animaciones. En este tutorial se destacarán varios procedimientos propios de jQuery que nos permitirán animar nuestra web.

## Procedimientos de jQuery utilizados:

### Efecto: animate()  

Permite animar varias propiedades, con valores numéricos, de CSS en un solo paso.

**Sintáxis:** .animate( Propiedades, [ Duración], [ Función de animación ], [ Callback ] )

**Propiedades** Este es el único parámetro que de debe indicar obligatoriamente y es para indicar qué atributos CSS queremos actualizar, con sus nuevos valores.

**Duración:** Sirve para indicar la duración de la animación, en un valor numérico en milisegundos, o en un valor de cadena de caracteres como "fast" o "slow".

**Función de animación:** Esta función sirve para indicar cómo se realizará la animación, si más suave al principio y rápida al final, o igual de rápida todo el tiempo.

**Callback:** Ofrece la posibilidad de indicar una función a ejecutarse cuando se ha terminado totalmente de producir el efecto.

* .animate({height:'150px'})  
* .animate({height:'50px'})


### Efecto: .hide() y .show()

Se usan para mostrar y ocultar elementos del DOM de la web, mayoritariamente suelen ser divs, ids, clases, imágenes, elementos de formularios, etiquetas…

**Sintáxis:** .hide([duracion] [,easing] [,callback]) || .show([duracion] [,easing] [,callback])

**duracion:** (opcional) Velocidad de la animación en milisegundos.

**easing:**  (opcional) Tipo de animación a ejecutar, las 2 posibilidades son: “linear” y “swing“.

**callback:** (opcional) Función a ejecutarse una vez finalizada la animación.

* .hide("slow")
* .show("slow")

### Efecto: .fadeOut() y .fadeIn()

FadeIn: muestra un elemento (anteriormente oculto) cambiando su opacidad.
FadeOut: oculta un elemento variando su opacidad.

**Sintáxis:** .fadeOut([speed] [,easing] [,callback]) || .fadeIn([speed] [,easing] [,callback])

**speed:** (opcional) Velocidad de la duración del efecto en milisengundos. También pueden pasarse los valores ‘fast‘ y ‘slow‘.

**easing:** (opcional): Velocidad de la animación en diferentes puntos de la misma. El valor por defecto es ‘swing‘  (movimiento rápido al principio y final y lento por el medio de la animación), en cambio el valor ‘linear‘ ofrece una animación constante sin cambios de velocidad.

**callback:** (opcional) Función/acción que se ejecutará cuando el efecto se haya completado.

* .fadeOut(2000);
* .fadeIn(2000)

### Efecto: .slideDown() y .slideUp()

SlideDown: Muestra un elemento con un efecto de deslizamiento (acordeón).
SlideUp: Oculta un elemento con el efecto de deslizamiento (acordeón).

**Sintáxis:** .slideDown([speed] [,easing] [,callback]) || .slideUp([speed] [,easing] [,callback])

**speed:** (opcional) Velocidad de la duración del efecto en milisengundos. También pueden pasarse los valores ‘fast‘ y ‘slow‘. por defecto 400.

**easing:** (opcional) Velocidad de la animación en diferentes puntos de la misma. El valor por defecto es ‘swing‘  (movimiento rápido al principio y final y lento por el medio de la animación), en cambio el valor ‘linear‘ ofrece una animación constante sin cambios de velocidad.

**callback:** (opcional) Función/acción que se ejecutará cuando el efecto se haya completado.

* .slideDown();
* .slideDown(4000);
* .slideUp();
* .slideUp(4000);


### Efecto: slideToggle()

Muestra y/o oculta un elemento usando un efecto de deslizamiento.

**Sintáxis:** .slideToggle([speed] [,easing] [,callback])

**speed:** (opcional) Velocidad de la duración del efecto en milisengundos. También pueden pasarse los valores ‘fast‘ y ‘slow‘. por defecto 400.

**easing:** (opcional) Velocidad de la animación en diferentes puntos de la misma. El valor por defecto es ‘swing‘  (movimiento rápido al principio y final y lento por el medio de la animación), en cambio el valor ‘linear‘ ofrece una animación constante sin cambios de velocidad.

**callback:** (opcional) Función/acción que se ejecutará cuando el efecto se haya completado.

* .slideToggle();
* .slideToggle(4000);
