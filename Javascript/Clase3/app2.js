const ejemplo = new Array(3,4,6,7, "ejemplo", true);
const ejemplo2 = [2,54,"hola", false];


// console.log(ejemplo2[1]);
// Propiedades de los arrays
// Metodo push - inserta elementos al final del array;

console.log(ejemplo2.length)
ejemplo2.push("Hola", 33, "pancho");
console.log(ejemplo2)
console.log(ejemplo2.length)

/**
 * unshift inserta elementos al comienzo del array
 */

ejemplo2.unshift("nuevo item");
console.log(ejemplo2)
console.log(ejemplo2.length)
// Pop elimina al final
// shift elmina al principio

ejemplo2.pop()
console.log(ejemplo2)
console.log(ejemplo2.length)

/**
 * Concat
 */

let ejemploMax = ejemplo.concat(ejemplo2)
console.log(ejemploMax)

ejemploMax.forEach((element,index)=>{
    console.log(`${index} valor = ${element}`)
});
