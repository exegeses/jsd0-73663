const caja = document.querySelector('#caja');

/*
    en Javascript tenemos un método que sirve para crear un elemento de HTML
    createElement
*/

const elemento = document.createElement('span');

elemento.innerText = 'manzana';
console.log(elemento);

elemento.classList.add('destacado');

/* insertamos el elemento crear a nuestro documento. 
en el article con el id #caja */

caja.append( elemento );   
console.log(caja)