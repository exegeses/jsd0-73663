const frase = document.querySelector('#frase');

// función para sumar dos números
function sumar( num1, num2 )
{
    let resultado = num1 + num2;
    return resultado;
}

frase.innerText = sumar( 7, 16 );