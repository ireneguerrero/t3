'use strict';

var color = "white";
function eligeColor() {
    color = prompt("Diga de qué color quiere el saludo (rojo, azul o amarillo)", "");
    switch (color) {
        case 'rojo':
            color = 'red';
            break;
        case 'azul':
            color = 'blue';
            break;
        case 'amarillo':
            color = 'yellow';
            break;
        default:
            color = 'black';
    }

}

function saludarc1(){
    let cuadro=document.getElementById("c1");
    cuadro.style.color=color;
    cuadro.innerHTML="HOLA";
}

eligeColor();
