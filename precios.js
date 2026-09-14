/**
 * Lógica de actualización dinámica de precios según el valor actual de la UT
 * Juzgado de Paz Letrado - Presidencia Roque Sáenz Peña
 */
const valor_ut_actual = 16; // Este valor se actualizará manualmente de forma periódica

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.valor-ut').forEach(el => {
    el.textContent = el.dataset.ut;
  });

  document.querySelectorAll('.valor-pesos').forEach(el => {
    const monto = Number(el.dataset.ut) * valor_ut_actual;
    el.textContent = monto.toLocaleString('es-AR');
  });
});
