// Ubicamos elementos dentro del DOM
const btn = document.querySelector('#btn');
const frase = document.querySelector('#frase');

// elemento.addEventListener( 'evento', function() );

btn.addEventListener(
        'click',
        function()
        {
           frase.innerText = 'hiciste click!'; 

        }
);
btn.addEventListener(
        'mouseover',
        function()
        {
            /* frase.innerText = 'mouse sobre!'; */
            frase.innerHTML = 'mouse sobre! <br> <img src="imgs/sobre.png">';
        }
);
btn.addEventListener(
        'mouseout',
        function()
        {
            frase.innerText = 'mouse reposo!'; 
        }
);
