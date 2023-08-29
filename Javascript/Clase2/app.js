// let nOne = prompt("ingrese el numero uno: ");
// let nTwo = prompt("ingrese el numero uno: ");
// let nThree = prompt("ingrese el numero uno: ");

// let mensaje = "";
// if ((nOne == nTwo) || (nTwo == nThree) || (nOne == nThree)){
//     mensaje="los numeros son iguales"
// }
// else if((nOne > nTwo) && (nTwo > nThree)){
//     mensaje ="El mayor es el número uno:"+nOne;
// } else if ( (nTwo > nOne) && (nTwo > nThree)) {
//     mensaje ="El mayor es el número dos:"+nTwo;
// } else if ((nThree > nOne) && (nThree > nTwoo)) {
//     mensaje="El mayor es el número tres:"+nThree
// } else {
//     mensaje="Todos los números son iguales";
// }

// console.log(mensaje);

// let tabla =  prompt("ingrese el número a de la tabla a mostrar");

// for(let i =1; i<=10; i++) {
//     let resultado = tabla + " x 50" + i + " = "+(tabla*i);
//     console.log(resultado);
// }

let tabla = prompt ("meteme un numero para hacer una tabla");
let i =1;

while(i<=10){
    let resultado = `${tabla} x ${i} = ${i*tabla}`;
    console.log(resultado);
    i++;
}