export function calculadoraEstampillas(valor_ut){

    //Selección de elementos DOM
    const inputCopiasRojas = document.getElementById('inputCopiasRojas');
    const inputCopiasAzules = document.getElementById('inputCopiasAzules');
    const inputCantidadFirmas = document.getElementById('inputCantidadFirmas');

    const subtotalCopias = document.getElementById('displaySubtotalCopias');
    const subtotalFirmas = document.getElementById('displaySubtotalFirmas');

    const total = document.getElementById('displayTotal');
    const totalUt = document.getElementById('displayTotalUt');


    //Suma de copias
    let utCopias = parseInt((inputCopiasRojas.value * 100)) + parseInt(inputCopiasAzules.value);

    //Suma de firmas
    let utFirmas = parseInt(inputCantidadFirmas.value) * 200;

    //Suma total de UT y $
    let utTotal = utCopias + utFirmas;
    let pesosTotal = utTotal * valor_ut;

    //Actualización de subtotales
    subtotalCopias.textContent = '$' + (utCopias * valor_ut).toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    subtotalFirmas.textContent = '$' + (utFirmas * valor_ut).toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2});

    //Actualización del total
    total.textContent = 'TOTAL: $' + pesosTotal.toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    totalUt.textContent = utTotal.toLocaleString('es-AR') + ' UT acumuladas';

}
