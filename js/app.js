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
          var p = document.createElement('p'); 
          p.textContent = text.value;
          tweetList.appendChild(p);
        text.value = '';
         }
      });
  
  text.addEventListener('keydown',function(){
    var num = text.value.length;
    if (num>maxLetras || num<0) {
      button.disabled = true;
    } else if (num>0 || num<maxLetras){
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
      button.disabled = true;
    } else if (num>0 || num<maxLetras){
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


   



