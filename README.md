# TWITTER
Twitter es una aplicación web que replica el newsfeed de twitter, especificamente, añade la funcionalidad de twitear y el contador de caracteres. Se utilizó como principal herramienta javascript.

![twi](https://user-images.githubusercontent.com/32307161/38065895-1aa86c70-32cb-11e8-9b57-72d64b803abb.png)

## Desarrollado para 
[Laboratoria](http://laboratoria.la)

#### Versión 0.0.1

1. Diseñar un formulario que permita ingresar un texto y un botón para "twittear".
2. Agregar un evento de click al botón o de submit al formulario.
3. En el evento, obtener el texto.
4. Agregar el texto al HTML.

~~~
button.addEventListener('click',function(event) {
      if (text.value) {
          var p = document.createElement('p'); 
          p.textContent = text.value;
          tweetList.appendChild(p);
        text.value = '';
         }
      });
~~~

#### Versión 0.0.2

1. No ingresar texto vacío (deshabilitar el botón de "twittear").
2. Contar la cantidad de caracteres de forma regresiva.

### Versión 0.0.3

1. Si pasa los 140 caracteres, deshabilitar el botón.
2. Si pasa los 120 caracteres, mostrar el contador con OTRO color.
3. Si pasa los 130 caracteres, mostrar el contador con OTRO color.
4. Si pasa los 140 caracteres, mostrar el contador en negativo.

### Versión 0.0.4

1. Al presionar enter(/n) que crezca el textarea de acuerdo al tamaño del texto.

~~~
text.addEventListener('keyup', function () {
    var lineas = (text.value).split("\n").length;
    text.rows = lineas + 1;
  })
~~~

### Instrumentos

+ Lenguaje de programación Javascript
+ Hoja de estilos en cascada
+ Lenguaje de marcado HTML
