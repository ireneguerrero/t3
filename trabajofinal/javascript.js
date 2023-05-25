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

/*  formulario */
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    document.getElementById("nombre").value = "";

    // Deshabilita el formulario
    document.getElementById("nombre").disabled = true;
    document.querySelector("#formulario button[type='submit']").disabled = true;

    var nombreDiv = document.createElement("div");
    nombreDiv.textContent = '¡Bienvenidx, ' + nombre + '!' || 'sin identificar';
    document.getElementById("nombre-registrado").appendChild(nombreDiv);
});

function decirHola(){
    var persona =sessionStorage.getItem('texto');
    console.log('hola '+persona);
}

function mostrarTextoAlmacenado() {
    var textoAlmacenado = sessionStorage.getItem('texto') || 'sin identificar';
    var textoMostrado = document.getElementById('texto-mostrado');
    textoMostrado.textContent = textoAlmacenado;
}

function cambiarFuente(){
    listValue=localStorage.getItem('fuente');
    document.body.style.fontFamily = listValue;
}