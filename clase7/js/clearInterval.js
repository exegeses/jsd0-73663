const frase = document.querySelector('#frase');

let numero = 0;
let intervalo = '';
frase.innerText = numero;

function incremento()
{
    //numero =+ 1;
    numero++;
    frase.innerText = numero;
    if( numero >= 20 ){
        clearInterval( intervalo );
        alert('fin de invicación de función');
    }
}

//incremento();
intervalo = setInterval( incremento, 1000 );
