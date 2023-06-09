'use strict'
alert('¡Hola, soy Irene Guerrero de 1DAW, bienvenida!\n¿Podrás ganarme?');
function oscurito(identificador) {
    let cuadrado = document.getElementById(identificador);
    cuadrado.style.backgroundColor = "#b3caf3";

}

function Quitar(identificador) {
    let cuadrado = document.getElementById(identificador);
    cuadrado.style.backgroundColor = "";
}

let turno = 1;
let tablero = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
let jugadorActual = '♡';
let contadorTurnos = 0;

function simbolo(identificador) {
    let cuadrado = document.getElementById(identificador);
    if (cuadrado.innerHTML === '') {
        cuadrado.innerHTML = jugadorActual;
        cuadrado.style.fontSize = "5em";
        contadorTurnos++;
        if (ganador()) {
            alert('¡GANÓ: ' + jugadorActual + '!');
            reiniciarJuego();
        } else if (contadorTurnos === 9) {
            alert('¡EMPATE!');
            reiniciarJuego();
        } else {
            jugadorActual = jugadorActual === '♐︎' ? '♡' : '♐︎';
        }
    }
}

function ganador() {
    let simbolo;
    for (let i = 1; i <= 3; i++) {
        simbolo = document.getElementById('c' + i + '1').innerHTML;
        if (simbolo !== '' &&
            simbolo === document.getElementById('c' + i + '2').innerHTML &&
            simbolo === document.getElementById('c' + i + '3').innerHTML) {
            return true;
        }
    }
    for (let i = 1; i <= 3; i++) {
        simbolo = document.getElementById('c1' + i).innerHTML;
        if (simbolo !== '' &&
            simbolo === document.getElementById('c2' + i).innerHTML &&
            simbolo === document.getElementById('c3' + i).innerHTML) {
            return true;
        }
    }
    simbolo = document.getElementById('c11').innerHTML;
    if (simbolo !== '' &&
        simbolo === document.getElementById('c22').innerHTML &&
        simbolo === document.getElementById('c33').innerHTML) {
        return true;
    }
    simbolo = document.getElementById('c13').innerHTML;
    if (simbolo !== '' &&
        simbolo === document.getElementById('c22').innerHTML &&
        simbolo === document.getElementById('c31').innerHTML) {
        return true;
    }
    return false;
}

function reiniciarJuego() {
    jugadorActual = '♡';
    contadorTurnos = 0;
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            let cuadrado = document.getElementById('c' + i + j);
            cuadrado.innerHTML = '';
            cuadrado.style.fontSize = "";
            cuadrado.style.backgroundColor = "";
        }
    }
}
//♐︎