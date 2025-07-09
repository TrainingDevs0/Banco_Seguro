class Cuenta {
    #saldo; // es oculto el saldo, porque es un atributo privado 
    constructor (numero){
        if (!numero || typeof numero !== 'number'){
            throw new Error ('Numero de cuenta invalida');
        }
        this.numero = numero;
        this.#saldo = 0;
        this.seguros = []; // un arreglo de seguros contratados por el cliente   
    }

    depositar (monto){
        if (typeof monto !== 'number' || monto <= 0){
            throw new Error ('Monto invalido');
        }
        this.#saldo += monto; // #saldo = #saldo + monto 
    }

    debitar (monto){
        if (typeof monto !== 'number' || monto > this.#saldo){
            throw new Error ('Saldo insuficiente');
        }
        this.#saldo -= monto; // #saldo = #saldo - monto 
    }

    contratarSeguro (seguro){
        this.debitar (seguro.prima);
        this.seguros.push (seguro);
    }

    listarSeguros (){
        return this.seguros.map ((elem)=>elem.detalles.join('\n')); //join es para separar, dando un salto de linea (\n)
    }
    
    getSaldo (){
        return this.#saldo;
    } 
}
export default Cuenta;