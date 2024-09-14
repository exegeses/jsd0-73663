// Ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');
const $h1 = document.querySelector('h1');

let intervalo = '';

// declaramos funciones de control
function agregarCero( numero )
{
    if( numero < 10  && numero != 0  ){
        numero = '0' + numero; 
    }
    return numero;
}


function descontar()
{
    //creamos dos objketos de fecha
    const actual = new Date();
    const final = new Date(2024, 8, 13, 19, 41);

    // calculamos la diferencia de eventos
        // expresado en milisegundos
    let diferencia = final - actual;
    console.log( 'diferencia: ', diferencia );

    /* Convertimos unidades de tiempo */
    // Obtenemos el tiempo expresado en segundos
        // y quitammos los decimales
    let segundos = Math.trunc( diferencia/1000 );
    console.log( 'segundos: ', segundos );

    // Obtenemos el tiempo expresado en minutos
    let minutos = Math.trunc( segundos/60 );
    console.log( 'minutos: ', minutos );

    // Obtenemos el tiempo expresado en horas
    let horas = Math.trunc( minutos/60 );
    console.log( 'horas: ', horas );

    // Obtenemos el tiempo expresado en días
    let dias = Math.trunc( horas/24 );
    console.log( 'dias: ', dias );


    /* Calculamos los tiempos restantes de cada una de las variables */
    segundos = segundos % 60;
    minutos = minutos % 60;
    horas = horas % 24;

/**
 * Detenemos la cuenta regresiva
 */
    if( 
        dias <= 0 &&
        horas <= 0 &&
        minutos <= 0 &&
        segundos <= 0 
      ){
        $h1.innerText = '¡Oferta finalizada!';
        clearInterval( intervalo );
    }


    // imprimimos los valores obtenidos
    txtSegundos.innerText = agregarCero(segundos);
    txtMinutos.innerText = agregarCero(minutos);
    txtHoras.innerText = agregarCero(horas);
    txtDias.innerText = agregarCero(dias);
}

// invocamos la función
descontar();

//actualizamos llamado a función
intervalo = setInterval( descontar, 1000 );
