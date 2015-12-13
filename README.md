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
