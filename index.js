import {calculadoraEstampillas} from './calc_estampillas.js';
import {valor_ut_actual} from './precios.js';

const d = document;
const ut_ref = d.querySelector('.calc_estampillas_ut_ref');
ut_ref.textContent = `1 UT = $${valor_ut_actual.toLocaleString('es-AR')}`;

d.addEventListener('input', (e)=> {

    // Si no es un input de copias, no hacer nada
    if(!e.target.matches(".input_copias")) return;

    // Actualizar la calculadora de estampillas con el valor actual de la UT
    calculadoraEstampillas(valor_ut_actual);
})

d.addEventListener("click", (e) => {
    // Si no es el botón de reiniciar, no hacer nada
    if(!e.target.matches("#btnReiniciarCalculadora")) return;


    // Reiniciar los valores de los inputs a 0
    d.getElementById('inputCopiasRojas').value = 0;
    d.getElementById('inputCopiasAzules').value = 0;
    d.getElementById('inputCantidadFirmas').value = 0;

})