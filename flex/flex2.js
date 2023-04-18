'use strict'; //nos ayuda a no dejar pasar ningún error

//pedimos el número de cuadro donde escribir HOLA
var cuadro = prompt("Diga qué cuadro quiere saludar (1 - 5)", "");
cuadro = parseInt(cuadro);
//cuadro ahora será una variable numérica, supuestamente entre 1 y 5

var estecuadro = document.getElementById(cuadro);
estecuadro.innerHTML="HOLA";
