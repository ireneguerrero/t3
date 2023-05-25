'use strict'

function mostrarTituloDesplegable(desplegable) {
    const titulo = desplegable.querySelector('summary').textContent;
    alert("Desplegable seleccionado: " + titulo);
}