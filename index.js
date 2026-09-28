import {valor_ut_actual} from './precios.js';

// Referencias generales
const d = document;
const valorUT = valor_ut_actual;

// Captura a todos los elementos que representan un valor UT para el "Resumen"
const $elementosConValorUT = d.querySelectorAll('.input-ut');



// Listeners para los inputs de copias y firmas
d.addEventListener('input', (e) => {

    // Si no es un input de copias, firmas, o el de pago, no hacer nada
    if(!e.target.matches(".input-ut") && !e.target.matches("#input-pago")) return;
    console.log("test")
    // Actualizar el "resumen" de la "Calculadora de Estampillas"
    resumen(valorUT, $elementosConValorUT);

});

// Listeners para el botón de reinicio
d.addEventListener("click", (e) => {
    // Si no es el botón de reiniciar, no hacer nada
    if(!e.target.matches("#btn-reiniciar")) return;
    reiniciarCalculadora($elementosConValorUT, valorUT);
})



// Calcula y actualiza el "resumen" de la "Calculadora de Estampillas" 
function resumen(valorUT, $elementosConValorUT){


    // Elementos para los cálculos 
    let acuRojas = 0;
    let acuAzules = 0;
    let acuUT = 0;
    let importeTotal = 0;
    let pagoEfectivo = 0;
    let pago = 0;
    let $vuelto = d.getElementById("span-vuelto");

    // Reinicia los acumuladores
    acuRojas = 0;
    acuAzules = 0;
    acuUT = 0;
    importeTotal = 0;
    pagoEfectivo = d.getElementById("input-pago").value;
    pago = 0;

    $elementosConValorUT.forEach(el => {

        // Según su data-valor-ut y el valor del input, acumula los valores correspondientes
        if(el.dataset.valorUt && el.value > 0){
            if(el.dataset.valorUt == 100){
                acuRojas += Number(el.value);
                acuUT += Number(el.value) * 100;
            } else if(el.dataset.valorUt == 1){
                acuAzules += Number(el.value);
                acuUT += Number(el.value) * 1;
            } else if(el.dataset.valorUt == 200){
                acuRojas += Number(el.value)*2;
                acuUT += Number(el.value)*200;
            }
        }
        
    })
    
    importeTotal = Number(acuUT) * valorUT;

    console.log("Acumulado Rojas: " + acuRojas);
    console.log("Acumulado Azules: " + acuAzules);
    console.log("Acumulado UT: " + acuUT);
    console.log("Importe total: " + importeTotal);

    // Actualiza la sección "resumen" de la calculadora de estampillas
    // Estampilllas rojas, azules e importe
    d.getElementById("span-total-rojas").textContent = acuRojas;
    d.getElementById("span-total-azules").textContent = acuAzules;
    d.getElementById("span-importe-total").textContent = importeTotal.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'});
    // Pago y vuelto
    pago = Number(d.getElementById("input-pago").value);
    $vuelto.innerHTML = pago >= importeTotal 
                        ? (pago - importeTotal).toLocaleString('es-AR', {style: 'currency', currency: 'ARS'}) 
                        : ` <span class='text-danger'> Pago insuficiente <small>(faltan ${(importeTotal - pago).toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})})<small/><span/>`;
};

// Reinicia los valores de la "Calculadora de Estampillas" a 0
function reiniciarCalculadora($elementosConValorUT, valorUT){

    $elementosConValorUT.forEach(el => {
        el.value = 0;
    })
    resumen(valorUT, $elementosConValorUT);
}





/* Código viejo */
// d.addEventListener('input', (e)=> {

//     // Si no es un input de copias, no hacer nada
//     if(!e.target.matches(".input_copias")) return;

//     // Actualizar la calculadora de estampillas con el valor actual de la UT
//     calculadoraEstampillas(valor_ut_actual);
// })

// d.addEventListener("click", (e) => {
//     // Si no es el botón de reiniciar, no hacer nada
//     if(!e.target.matches("#btnReiniciarCalculadora")) return;


//     // Reiniciar los valores de los inputs a 0
//     d.getElementById('inputCopiasRojas').value = 0;
//     d.getElementById('inputCopiasAzules').value = 0;
//     d.getElementById('inputCantidadFirmas').value = 0;
//     d.getElementById("displayTotal").textContent = "TOTAL: $0,00";
//     d.getElementById("displayTotalUt").textContent = "0 UT acumulados";
//     d.getElementById("displaySubtotalCopias").textContent = "$0,00";
//     d.getElementById("displaySubtotalFirmas").textContent = "$0,00";


// })