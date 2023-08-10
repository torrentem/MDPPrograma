export default class DatosPersonales {
    firstName;
    lastName;
    birthday;
    constructor(nombre, apellido, edad) {
        this.firstName= nombre;
        this.lastName= apellido;
        this.birthday= edad;
    }
    setFirstName(name){
        this.firstName = name;
    }

    static holaMundo(){
        console.log("hola...");
    }
}
   