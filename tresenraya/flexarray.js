'use strict';

function hover(id){
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor="rgb(196, 0, 245)";
}

function desmarcar(id){
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor="rgb(218, 158, 255)";
}

function pintar(id){
    let cuadro=document.getElementById(id);
    cuadro.innerHTML="♡";
}
//♐︎