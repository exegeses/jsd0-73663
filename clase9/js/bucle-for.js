const lista = document.querySelector('#lista');

const marcas = [
                'Hermès','Zara','Boss',
                'Aeropostale','Kingpin','Tomy',
                'Gola','Hollister','Abercrombie',
                'JCrew'
                ];

let contenido = '';
//for(  inicio;   condición;  incremento  )
for( let n = 0;  n < marcas.length;  n++ ){
    
    //contenido = contenido + '<li>'+ marcas[n] +'</li>';
    contenido = contenido + `<li>${marcas[n]}</li>`;

}

lista.innerHTML = contenido;