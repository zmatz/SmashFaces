var numeroAlAzar;
var numAttempts = 4;
var puntaje= 0;

var imagenes = [
 "Ana.jpg", "Analy.jpg", 
 "Areli.jpg", "Beatriz.jpg", 
 "Cecilia.jpg", "Claudia.jpg", 
 "Daniela.jpg", "Elisa.jpg", 
 "Evelyn.jpg", "Gabriela.jpg", 
 "Grissel.jpg", "Guadalupe.jpg", 
 "Johana.jpg", "Joyce.jpg", 
 "Ofelia.jpg", "Patricia.jpg", 
 "Sharon.jpg", "Heredia.jpg", 
 "Karen.jpg", "Monica.jpg",  
 "Karla.jpg", "Leslie.jpg", 
 "Mishel.jpg", "Milca.jpg", 
 "Tayde.jpg", "Naibit.jpg", 
 "Nayeli.jpg", "Nello.jpg", 
 "Reyna.jpg", "Adriana.jpg", 
 "Ruth-Lopez.jpg","Ruth-Vega.jpg",
 "Sandra-Bollo.jpg","Sandra-Diaz.jpg", 
 "Vianey.jpg", "Zazil.jpg"];

 var nombres = [ 
 "Anita", "Analy", 
 "Areli", "Bet",
 "Cecy", "Claudia", 
 "Daniela", "Elisa", 
 "Eve", "Gaby", 
 "Griss", "Lupita", 
 "Joy", "Joyce", 
 "Ofe", "Paty", 
 "Sharon", "Heredia", 
 "Karen", "Moni", 
 "Karla", "Leslie",
 "Mishel", "Milca", 
 "Tayde", "Naibit", 
 "Nayeli", "Nello", 
 "Reyna", "Adri", 
 "Dj Ruth", "Ruth", 
 "Sandia", "San", 
 "Vian", "Zaz"];

 var i=0;


//esta funcion toma un numero al azar
function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max-min) + min;
  var entero = Math.floor(numero);
    return entero;
};

function desplegarNuevaJugada(){
  
  intentos = 4; 

  var tamanoArreglo = nombres.length;

if (tamanoArreglo > 0) {
  numeroAlAzar = enteroRandomEnRango(0,tamanoArreglo);
  
  //cambiar el atributo de la imagen src o sea, la ruta y por tanto la imagen misma al azar
  var imagen = 'fotos/' + imagenes[numeroAlAzar];
  $('#imagenPersona').attr('src', imagen);
} else {
  alert ('Bien hecho!');

}

};

$(document).ready(function(){
 $("#puntaje").text(puntaje);
  $('#btnClick').click(function(){
    var nombre = $('#inputNombre').val();
    console.log('El usuario escribio:' + nombre);

    var nombreAAdivinar = nombres[numeroAlAzar];
    console.log('El nombre correcto es:' + nombreAAdivinar);

    if (nombre === "") {
            $(".gameStatusAlert").html("Ingresa\n un nombre para jugar")

} else if (nombre === nombreAAdivinar) {
      $(".gameStatusAlert").hide();
      
     //quitar el elmento que ya fue "jugado"
      nombres.splice(numeroAlAzar, 1);
      imagenes.splice(numeroAlAzar, 1);
      puntaje = puntaje + 2;
      $("#puntaje").text(puntaje);
          //codigo para limpiar el input
          $(":text").each(function(){ 
              $($(this)).val('');
          });

      desplegarNuevaJugada();

    } else {
      alert('Fallaste, pierdes un punto, te quedan ' + numAttempts)
      numAttempts--; 
      $(":text").each(function(){ 
              $($(this)).val('');
          });
      

      
    }
 
 });


    desplegarNuevaJugada();

});



