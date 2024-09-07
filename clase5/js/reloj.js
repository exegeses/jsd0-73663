/*
    Crear un reloj digital formato
    hh:mm:ss   i.e.: 19:09:32
*/
// ubicamos elementos dentro del DOM
const reloj = document.querySelector('#frase');

// declaramos funciones de control
function mostrarReloj()
{
    // queríamos un objeto de fecha
    const fecha = new Date();

    // Obtenemos el número correspondiente a las horas
    let horas = fecha.getHours();
    if( horas < 10 ){
        horas = '0' + horas
    }
    console.log(horas);

    // Obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0' + minutos
    }
    console.log(minutos);

    // Obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0' + segundos
    }
    console.log(segundos);

    // Imprimimos el reloj en el spam
    // reloj.innerText = horas +':'+ minutos +':'+ segundos;
    reloj.innerText = `${horas}:${minutos}:${segundos}`;
}

//invocamos función mostrarReloj()
mostrarReloj();

// actualizamos el llamado a la función
setInterval( mostrarReloj, 1000 );