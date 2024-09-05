// Ubicar elementos dentro del DOM
const caja = document.querySelector('#caja');

// Declaramos funciones de control
function cajaAzul()
{
    caja.style.backgroundColor = 'hsl(230,80%,50%)'; 
    caja.style.color = 'black';
    caja.innerText = 'Azul';
}
function cajaNaranja()
{
    caja.style.backgroundColor = 'hsl(30,80%,30%)'; 
    caja.innerText = 'Naranja';
}
function cajaVerde()
{
    caja.style.backgroundColor = 'hsl(130,80%,30%)'; 
    caja.innerText = 'Verde';
}