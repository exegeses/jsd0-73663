

let llave = 3;

function mostrar( posicion )
{
    span.innerText = marcas[ posicion ];
    figure.innerHTML = `<img src="imgs/${logos[posicion]}.png">`;
}

mostrar(llave);



botones[0].addEventListener(
        'click',
        () =>
        {
            llave--;
            if( llave < 0 ){
                llave = marcas.length - 1;
            }
            mostrar(llave);
        }
);

botones[1].addEventListener(
        'click',
        () =>
        {
            llave++;
            if( llave == marcas.length ){
                llave = 0;
            }
            mostrar(llave);
        }
);
