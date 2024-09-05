// ubicamos elementos dentro del DOM
    // los almacenamos en constantes
const span = document.querySelector('#frase');

// ver elementos en la Consola de JavaScript
console.log( 'hola mundo' );
console.log( span );

console.error('mensaje de error en la consola de js');
console.warn('mensaje de advertencia en la consola de js');
console.log('generalmente lo usamos para depurar');

//escribimos dentro del span
span.innerText = 'texzto generado con javascript'