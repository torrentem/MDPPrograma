const prompt = require("prompt-sync")({sigint: true});
let numero = prompt ("Ingresa el numero con el que ");
let tabla = prompt("1.-Suma 2.- Resta 3.- Division 4.- Multiplicar");

const tablaSum = (x)=>{
    let i=1;
    while(i<=10){
        console.log(`${i} + ${x} = ${i+x}`);
        i++;
    }
}

const tablaRestar = (y)=> {
    for(let i=y; i<=(10+y); i++){
        console.log(`${i} - ${y} = ${i-y}`);
    }
}

const tablaMulti = (x) => {
    for(let i=x; i<=10; i++){
        console.log(`${x} * ${i} = ${x*i}`);
    }
}

const tablaDiv = (y) => {
    for(let i=1; i<=10; i++){
        console.log(`${y} / ${i} = ${y/i}`);
    }
}

switch(tabla) {
    case '1': tablaSum(parseInt(numero)); break;
    case '2': tablaRestar(parseInt(numero)); break;
    case '3': tablaMulti(parseInt(numero)); break;
    case '4': tablaDiv(parseInt(numero)); break;
    default: console.log('no ingreso ningún número');break;
}