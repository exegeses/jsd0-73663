/*
    Hacer una pregunta al usuario
    - El usuario va a responder
    - Almacenamos la respuesta en memoria
*/
let respuesta = prompt('¿qué seleccionado ganó la copa mundial Qatar 2022?');

//condicional
if( respuesta.toLocaleLowerCase() == 'argentina' ){
    // bloque de código a ejecutar si la condición es true
    frase.innerText = '¡Correcto!';
}
else{
    // bloque de código a ejecutar si la condición es false
    frase.innerText = '¡Incorrecto!';
}