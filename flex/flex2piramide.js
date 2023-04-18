'use strict'; //nos ayuda a no dejar pasar ningún error

//pedimos el número de cuadro donde escribir HOLA
var cuadro = prompt("Diga qué cuadro quiere saludar (1 - 5)", "");
cuadro = parseInt(cuadro);
//cuadro ahora será una variable numérica, supuestamente entre 1 y 5

var estecuadro="";

switch(cuadro){
    case 1:
        estecuadro = document.getElementById(c1);
        break;
    case 2:
        estecuadro = document.getElementById(c2);
        break;
    case 3:
        estecuadro = document.getElementById(c3);
        break;
    case 4:
        estecuadro = document.getElementById(c4);
        break;
    case 5:
        estecuadro = document.getElementById(c5);
        break;
    default:
        alert("Mal número ingresado");
        exit(-1);
}


estecuadro.innerHTML = "HOLA";