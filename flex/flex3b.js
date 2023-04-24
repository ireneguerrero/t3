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

function saludar(identificador){
    let id="c"+identificador;
    let cuadro=document.getElementById(id);
    cuadro.style.color=color;
    cuadro.innerHTML="HOLA";
}

eligeColor();
