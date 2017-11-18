window.addEventListener('load',function(event){
  
  //obtener tweets en una lista al clickear sobre button
  var text = document.getElementById('texto');
  var button = document.getElementById('twittear');
  var tweetList = document.getElementById('tweet-container');
  var cont = document.getElementById('info');
  var maxLetras = 140;
  var mensaje = '';
  
  button.addEventListener('click',function(event) {
      if (text.value) {
          var p = document.createElement('p')  
          p.textContent = text.value;
          tweetList.appendChild(p);
        text.value = '';
         }
      });
  
  text.addEventListener('keydown',function(){
    var num = text.value.length;
    if (num>maxLetras || num<0) {
      //text.value = mensaje;
      button.disabled = true;
    } else if (num>0 || num<maxLetras){
     // mensaje = text.value;
      button.disabled = false;
    } 

    if (num>=120 && num<=130){
      cont.style.color = 'green';
    } else if (num>130 && num<=140){
      cont.style.color = 'red';
    } else if (num<140){
      cont.style.color= 'black';
    }
    cont.value= maxLetras - num;
  })

  text.addEventListener('keyup', function () {
   
    var num = text.value.length;
    if (num>maxLetras || num<0) {
      //text.value = mensaje;
      button.disabled = true;
    } else if (num>0 || num<maxLetras){
      //mensaje = text.value;
      button.disabled = false;
    } 
    
    if (num>=120 && num<=130){
      cont.style.color = 'green';
    } else if (num>130 && num<=140){
      cont.style.color = 'red';
    } else if (num>140){
      cont.style.color= 'black';
    }
    cont.value= maxLetras - num;
  })
  text.addEventListener('keyup', function () {
    var lineas = (text.value).split("\n").length;
    text.rows = lineas + 1;
  })

})

/*redimensionar textarea sin scroll*/
/* EJEMPLO 1 */
/*function agranda1(T){
  var lineasReales = (T.value).split("\n").length; 
  T.rows = lineasReales + 1; 
  }*/
  
    /* EJEMPLO 2 */
 /*var miTXTA;
  var vuelta = 1;
  function agranda2(){
  miTXTA = document.getElementById("pr2");
  
  var lineasVirtuales = miTXTA.scrollHeight; 
  
  miTXTA.style.height = lineasVirtuales +"px";
  
  setTimeout(achica2 , 20); 
  }
  
  function achica2(){
  if (vuelta == 0){
  vuelta = 1; 
  }
  
  else {
  miTXTA.style.height = "auto";
  vuelta = 0;
  agranda2();
  }
  }*/

  /*deshabilitar el boton tweet
  text.addEventListener('keyup',function () {
    var num = text.value.length;
    if (num>140) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  })*/

  


/*function limita(elEvento, maximoCaracteres) {
    var elemento = document.getElementById("texto");
   
    // Obtener la tecla pulsada 
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    // Permitir utilizar las teclas con flecha horizontal
    if(codigoCaracter == 37 || codigoCaracter == 39) {
      return true;
    }
   
    // Permitir borrar con la tecla Backspace y con la tecla Supr.
    if(codigoCaracter == 8 || codigoCaracter == 46) {
      return true;
    }
    else if(elemento.value.length >= maximoCaracteres ) {
      return false;
    }
    else {
      return true;
    }
  }
   
  function actualizaInfo(maximoCaracteres) {
    var elemento = document.getElementById("texto");
    var info = document.getElementById("info");
   
    if(elemento.value.length >= maximoCaracteres ) {
      info.innerHTML = maximoCaracteres;
    }
    else {
      info.innerHTML = (maximoCaracteres-elemento.value.length);
    }
  }*/
   



