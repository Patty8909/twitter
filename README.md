# TWITTER

### Objetivo

Replicar el newsfeed de Twitter, para ello se seguirá un flujo de versiones.

![](https://media.giphy.com/media/3ov9jP4RIGQCUQOScg/giphy.gif)

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
