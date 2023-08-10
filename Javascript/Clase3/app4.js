const prompt = require("prompt-sync")({sigint: true});
/** Agregar 15 elementos de objeto persona al array con diferente data.
 * 1.- Mostrar el promedio de las edades.
 * 2.- Filtrar por nombre o apellido un valor ingresado por el usuario donde coincida con la letra o palabra
*/
const dataPerson = [];

const addDataperson = (firstName, lastName, age, status, insert=true)=> {
    let persona = {
        firstName,
        lastName,
        age,
        status
    }
    if(insert) {
        dataPerson.push(persona);
    } else {
        dataPerson.unshift(persona);
    }
}

addDataperson("Juan", "Perez", 20, 1);
addDataperson("Jose", "Ramon", 36, 1);
addDataperson("Maria", "Ramona", 18, 1, false);
addDataperson("Carlos", "Gorozito", 45, 2);
addDataperson("Gastón", "Stone", 42, 2);
addDataperson("Horacio", "Fernandez", 35, 3);
addDataperson("Martina", "Casas", 60, 2);
addDataperson("Roxana", "Oria", 41, 1);
addDataperson("Jorgelina", "Raymundo", 70, 1);
addDataperson("Adrian", "Martinez", 10, 3);
addDataperson("Omar", "Parcero", 35, 2);
addDataperson("Clara", "Lavanda", 17, 2);
addDataperson("Roberto", "Navarro", 59, 2);
addDataperson("Javier", "Milei", 52, 2);
addDataperson("Victoria", "Villaruel", 41, 2);

// console.table(dataPerson);
// console.log(dataPerson);

// let cadena = ("hOLA mundo   ");
/**length - longitud */
// console.log(cadena.length);
/**toUpperCase - Mayusuculas */
// console.log(cadena.toUpperCase());
/** toLowerCase - Minusculas */
// console.log(cadena.toLowerCase());
/**trim() - elimina espacios al principio y al final */
// console.log(cadena.trim());
/**Slice(start,end) */
// console.log(cadena.slice(1,5));
// console.log(cadena[0]);
/**replace("buscar", "cambiar") */
// console.log(cadena.replace("OLA", "COMO"));
/**replaceAll("buscar","cambiar") reemplaza todas las coincidencias */
// console.log(cadena.replaceAll("   "),(""));
/**splict("seprarar") */
// console.log(cadena.split("L"));
/**includes("buscar") true, false*/
// console.log(cadena.includes("A"));

let words = prompt("ingrese el valor a buscar: ");
let dataFilterPerson = dataPerson.filter((element)=> {
    words = words.toLowerCase();
    let firstName = element.firstName.toLowerCase();
    let lastName = element.lastName.toLowerCase();

    return(firstName.includes(words) || lastName.includes(words));
});

console.table(dataFilterPerson);