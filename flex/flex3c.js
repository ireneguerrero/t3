'use strict';

var color = "white";
function obtieneColor(identificador){
    let id="c"+identificador;
    color=document.getElementById(id).style.backgroundColor;
}

function saludar(identificador){
    let id="c"+identificador;
    let cuadro=document.getElementById(id);
    cuadro.style.color=color;
    cuadro.innerHTML="HOLA";
}

