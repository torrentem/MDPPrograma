import DatosPersonales from "./datosPersonales.js";

const ejemplo = new DatosPersonales("Juana", "ramona", 30);
ejemplo.setFirstName("Douglas");

DatosPersonales.holaMundo();
console.log(ejemplo);