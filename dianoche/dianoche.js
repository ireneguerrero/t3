var modo = leerModoActual();
if(modo=="dia"){
    ponerModoDia();
}else{
    ponerModoNoche();
}

function leerModoActual() {
    let modo = window.localStorage.getItem("modoGuardado");
    if(!modo){
        modo="dia";
    }
    return modo;
}

function ponerModoDia(){
    let too=document.getElementById("too");
    too.style.color="black";
    too.style.backgroundColor="white";
    window.localStorage.setItem("modoGuardado","dia");
    //ocultamos sol
    let iconoDia=document.getElementById("dia");
    iconoDia.style.display="none";
    //mostramos luna
    let iconoNoche=document.getElementById("noche");
    iconoNoche.style.display="block";
}

function ponerModoNoche(){
    let too=document.getElementById("too");
    too.style.color="white";
    too.style.backgroundColor="black";
    window.localStorage.setItem("modoGuardado","noche");
    //ocultamos luna
    let iconoNoche=document.getElementById("noche");
    iconoNoche.style.display="none";
    //mostramos sol
    let iconoDia=document.getElementById("dia");
    iconoDia.style.display="block";
}