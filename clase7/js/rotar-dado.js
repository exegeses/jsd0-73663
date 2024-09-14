const caja = document.querySelector('#caja');
const boton = document.querySelector('#boton');
/*
    Generar un número aleatorio 
    entre 1 y 6 (sin decimales)

    Insertar en el div #caja una imagen (dado)
    que corresponda con el número que acabamos de generar

    Reproducir el sonido
*/

function generar( numeroLimite )
{
    let numAleatorio = Math.random();
    // Genera un número aleatorio entre 0~1 (con decimales)
    console.log( 'nro aleatorio: ', numAleatorio );

    let numeroMultiplicado = numAleatorio * (numeroLimite - 1);
    console.log('nro multi: ', numeroMultiplicado);

    let numero = Math.round( numeroMultiplicado );
    console.log( 'nro: ', numero );

    return numero + 1;
}

function mostrarImagen( numero )
{
    //caja.innerHTML = '<img src="red/dice-'+ numero +'.png">'; 
    caja.innerHTML = `<img src="red/dice-${numero}.png">`; 
}

function sonido()
{
    const sonidoDado = new Audio('audio/dice.mp3');
    sonidoDado.play();
}

boton.addEventListener(
        'click',
        function()
        {
            let numero = generar(6);
            mostrarImagen( numero );
            sonido();
        }
);

