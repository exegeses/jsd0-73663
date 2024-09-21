const frase = document.querySelector('#frase');
const marcas = [
                    'Hermès','Zara','Boss',
                    'Aeropostale','Kingpin','Tomy',
                    'Gola','Hollister','Abercrombie',
                    'JCrew'
                ];

let n = 0;
let contenido = '';
while( n < marcas.length ){
    //document.write( marcas[n], '<br>' );
    contenido = contenido + marcas[n] + '<br>';
    console.log('contenido: ', contenido );
    n++;
}

frase.innerHTML = contenido;