'use strict';

var color = "white";

var colorFr = new Array('greenyellow', 'pink', 'lightskyblue', 'grey', 'goldenrod');
var colorFn = new Array('white', 'blue', 'black', 'yellow', 'red');

function pinturaInicial() {
    for (i = 0; i < 5; i++) {
        let identificador = "c" + (i + 1);
        let elemento = document.getElementById(identificador);
        elemento.style.backgroundColor = colorFn[i];
        elemento.style.color = colorFr[i];
    }
}

function obtieneColor(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);
    color = getComputedStyle(cuadro).backgroundColor;
    console.log(color);
}

function saludar(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}

pinturaInicial();