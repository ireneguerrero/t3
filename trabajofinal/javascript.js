'use strict'

function mostrarTituloDesplegable(desplegable) {
    const titulo = desplegable.querySelector('summary').textContent;
    alert("Desplegable seleccionado: " + titulo);
}

function abrirModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}


function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function cambiarFuente() {
    listValue = localStorage.getItem('fuente');
    document.body.style.fontFamily = listValue;
}

function mostrarTextoAlmacenado() {
    var textoAlmacenado = sessionStorage.getItem('texto') || 'sin identificar';
    var textoMostrado = document.getElementById('texto-mostrado');
    textoMostrado.textContent = textoAlmacenado;
}

function almacenarEnSessionStorage() {
    var textoInput = document.getElementById('texto-input').value;
    sessionStorage.setItem('texto', textoInput);
    alert('¡Bienvenidx ' + textoInput + '!');
}

/*  formulario */
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    document.getElementById("nombre").value = "";

    // Deshabilita el formulario
    document.getElementById("nombre").disabled = true;
    document.querySelector("#formulario button[type='submit']").disabled = true;

    var nombreDiv = document.createElement("div");
    nombreDiv.textContent = '¡Bienvenidx, ' + nombre + '!';
    document.getElementById("nombre-registrado").appendChild(nombreDiv);
});

