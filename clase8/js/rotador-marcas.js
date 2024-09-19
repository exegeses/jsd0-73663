// Ubicamos elementos dentro del DON
const cMarcas = document.querySelector('#c-marcas');
const botones = document.querySelectorAll('#c-marcas img'); 
console.log(botones);
const span = document.querySelector('#c-marcas span');

const marcas = [
    'Hermès','Zara','Boss',
    'Aeropostale','Kingpin','Tomy',
    'Gola','Hollister','Abercrombie',
    'JCrew'
   ];

/* estado inicial */
let llave = 2;
// Mostrar una de las marcas dentro del spam
span.innerText = marcas[ llave ];

botones[1].addEventListener(
        'click',
        () =>
        {
            llave++;
            if( llave == marcas.length ){
                llave = 0;
            }
            span.innerText = marcas[ llave ];
        }
);
botones[0].addEventListener(
        'click',
        () =>
        {
            llave--;
            if( llave < 0 ){
                llave = marcas.length - 1;
            }
            span.innerText = marcas[ llave ];
        }
);


/*©©©©©©©©©©©©   */
const fotos = document.querySelector('#c-fotos')
const botones2 = document.querySelectorAll('#c-fotos img');
const figure = document.querySelector('#c-fotos figure');
let posicion = 1;

figure.innerHTML = `<img src="imgs/f${posicion}.jpg">`;
botones2[0].addEventListener(
        'click',
        ()=>
        {
            posicion--;
            if( posicion < 1 ){
                posicion = 9;
            }
            figure.innerHTML = `<img src="imgs/f${posicion}.jpg">`;
        }
);
botones2[1].addEventListener(
        'click',
        ()=>
        {
            posicion++;
            if( posicion == 10 ){
                posicion = 1;
            }
            figure.innerHTML = `<img src="imgs/f${posicion}.jpg">`;
        }
);