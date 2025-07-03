class Cliente {
    constructor (nombre, cedula){
        if (!nombre ||typeof nombre !== 'string'){
            throw new Error ('Nombre invalido');
        }
        if (!cedula ||typeof cedula !== 'number'){ // agregar validación de la cedula (consultar)
            throw new Error ('Cedula invalida');
        }
        this.nombre = nombre;
        this.cedula = cedula;
        this.cuentas = null; //cada cliente puede tener una cuenta bancaria
    }

    asignarCuenta(cuenta){
        this.cuenta = cuenta; // estamos asignando una cuenta 
    }

    obtenerInformacion (){
        return `El cliente ${this.nombre}, con cedula: ${this.cedula}, tiene n° cuenta: ${this.cuenta}`;
    }
}
export default Cliente;