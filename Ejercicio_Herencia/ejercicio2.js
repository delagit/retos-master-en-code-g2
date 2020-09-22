
/* 2.- Crear una clase Bebida que herede a dos clases Cerveza
    y Refresco. Ambas clases deben tener la propiedad
    cantidad (ml). La clase Refresco debe tener el atributo
    azucar(g) y la clase Cerveza debe el atributo
    porcentajeAlcohol
Crear los getters y setters correspondientes. */

class Bebida {
    constructor(mL){
        this.mL = mL;
    }
}

class Cerveza extends Bebida {
    constructor(mL, porcentajeAlcohol){
        super(mL);
        this.porcentajeAlcohol = porcentajeAlcohol;
    }
    getverPorcentajeAlcohol(){
        return `El porcentaje de alcohol de esta bebida es ${this.porcentajeAlcohol}%`;
    }
    setcambiarPorcentajeAlcohol(nuevoPorcentajeAlcohol){
        this.porcentajeAlcohol = nuevoPorcentajeAlcohol;
        return `El porcentaje de alcohol de esta bebida es ${this.porcentajeAlcohol}%`;
    }
    getverML(){
        return `La capacidad del envase de la bebida es de ${this.mL}mL`;
    }
    setnuevoML(nuevoML){
        this.mL = nuevoML;
        return `La capacidad del envase de la bebida es de ${this.mL}mL`;
    }
}


const angelCaido = new Cerveza(450,9);
console.log(angelCaido);
console.log("=============================================================");



class Refresco extends Bebida{
    constructor(mL, azucar){
        super(mL);
        this.azucar = azucar;
    }
    getverML(){
        return `La capacidad del envase de la bebida es de ${this.mL}mL`;
    }
    setcambiarML(nuevoML){
        this.mL = nuevoML;
        return `La capacidad del envase de la bebida es de ${this.mL}mL`;
    }
    getverAzucar(){
        return `La cantidad de azucar en esta bebida es de ${this.azucar} gramos`;
    }
    setcambiarAzucar(nuevoAzucar){
        this.azucar = nuevoAzucar;
        return `La cantidad de azucar en esta bebida es de ${this.azucar} gramos`;
    }
}

const felix = new Refresco(355, 14);
console.log(felix);
