class Seguro {
    constructor (tipo, prima){
        if (!tipo || typeof tipo !== 'string'){
            throw new Error ('Tipo de seguro invalido');
        }
        if (typeof prima !== 'number' || prima <= 0){
            throw new Error ('Prima invalida');
        }
        this.tipo = tipo;
        this.prima = prima;
    }
    detalles (){
        return `Seguro ${this.tipo}: $${this.prima}`;
    }   
}
export default Seguro;