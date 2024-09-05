/*
    Mostrar la fecha actual
    formato:  04/09/2024
*/
// ubicar elementos dentro del DOM
const span = document.querySelector('#frase');

// creamos un objeto de fecha
const fecha = new Date();
console.log( fecha );

// obtenemos el número de día de mes
let diaMes = fecha.getDate();
if( diaMes < 10 ){
    diaMes = '0' + diaMes;
}
console.log(diaMes);

// obtenemos el número de mes actual
let mesActual = fecha.getMonth() + 1;
if( mesActual < 10 ){
    mesActual = '0' + mesActual;
}
console.log(mesActual);

// obtenemos el número de año
let anio = fecha.getFullYear();
console.log(anio);

console.log( diaMes + '/' + mesActual + '/' + anio );
console.log( `${diaMes}/${mesActual}/${anio}` );

// Imprimimos la fecha en el formato requerido dentro del spam
    // método concatenación
//span.innerText = diaMes + '/' + mesActual + '/' + anio;
    // método template string (interpolación de cadenas)
span.innerText = `${diaMes}/${mesActual}/${anio}`;