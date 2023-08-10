const prompt = require("prompt-sync")({sigint: true});

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
addDataperson("Olga", "Sarlanga", 15, 2);


// for(let i=1; i<=3; i++) {
//     console.log("******");
//     let firstName = prompt("Ingrese el nombre aquí: ");
//     let lastName = prompt("Ingrese el apellido aquí: ");
//     let age = parseInt(prompt("Ingrese la edad aquí: "));
//     let status = parseInt(prompt("Ingrese el status aquí: "))
//     addDataperson(firstName, lastName, age, status);
//     console.table(dataPerson);
// }
/**
 * ForEach recorre el array y trae otras cosas.
 */
// let dataFilterPerson = dataPerson.filter((element)=>{
//     return (element.age <=80 && element.age > 15);
// });

// console.table(dataFilterPerson);

// dataFilterPerson = dataPerson.find((element)=>{
//     return element.age > 15;
// });

// dataFilterPerson = dataPerson.findLast((element)=>{
//     return element.age > 150;
// });

// dataFilterPerson = dataPerson.findIndex((element)=>{
//     return element.age < 150;
// });


// console.table(dataFilterPerson);

// let dataNewPerson = dataPerson.map((element, index)=>{
//     let person = {
//         fullName: element.firstName+' '+element.lastName,
//         age:' ',
//         status: ''
//     };
//     if(element.age >= 18){
//         person.age= "Mayor de edad";
//     } else {
//         person.age= "Menor de edad";
//     }
//     switch (element.status) {
//         case 1: person.status = "inactivo"; break;
//         case 2: person.status = "pendiente"; break;
//         case 3: person.status = "activo"; break;
//         default: person.status = "sin acceso"; break;
//     }
//     return person;
// });

// console.table(dataNewPerson);

/**  Metos de ordenamiento SORT(a,b) mayormente funciona con numero*/

let array0 = [1,6,9,200,100];

array0.sort((a,b)=>{
    return a-b
});
console.log(array0);

dataPerson.sort((a,b)=>{
    return a.age - b.age
});

console.table(dataPerson);