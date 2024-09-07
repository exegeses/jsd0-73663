// Ubicamos elementos dentro del DOM
const redbull = document.querySelector('#redbull');
const mclaren = document.querySelector('#mclaren');
const ferrari = document.querySelector('#ferrari');
const mercedes = document.querySelector('#mercedes');
const amartin = document.querySelector('#amartin');

/* estado inicial 
    ocultar todos menos uno de los divs
*/
mclaren.style.display = 'none';
ferrari.style.display = 'none';
mercedes.style.display = 'none';
amartin.style.display = 'none';

// declaramos funciones de control
function mostrarOcultar( escuderia )
{
    if( escuderia == 'redbull' ){
        redbull.style.display = 'flex';
        mclaren.style.display = 'none';
        ferrari.style.display = 'none';
        mercedes.style.display = 'none';
        amartin.style.display = 'none';
    }
    else if( escuderia == 'mclaren' ){
        redbull.style.display = 'none';
        mclaren.style.display = 'flex';
        ferrari.style.display = 'none';
        mercedes.style.display = 'none';
        amartin.style.display = 'none';
    }
    else if( escuderia == 'ferrari' ){
        redbull.style.display = 'none';
        mclaren.style.display = 'none';
        ferrari.style.display = 'flex';
        mercedes.style.display = 'none';
        amartin.style.display = 'none';
    }
    else if( escuderia == 'mercedes' ){
        redbull.style.display = 'none';
        mclaren.style.display = 'none';
        ferrari.style.display = 'none';
        mercedes.style.display = 'flex';
        amartin.style.display = 'none';
    }
    else {
        redbull.style.display = 'none';
        mclaren.style.display = 'none';
        ferrari.style.display = 'none';
        mercedes.style.display = 'none';
        amartin.style.display = 'flex';
    }
}