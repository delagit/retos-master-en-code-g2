/* 1.- Crea una superclase llamada Electrodoméstico con las
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
        y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color
        y capacidad.
    c. consumoEnergetico debe iniciar con valor de 100
Crea una subclase de Electrodomestico llamada Lavadora
    con las siguientes características:
    a. Su atributo es carga(kg de ropa), además de los
        atributos heredados.
    b. Crea el método precioFinal(). Este se calcula
       multiplicando el consumoEnergetico por la carga. */

class Electrodomestico{
    constructor(precio, color, capacidad){
        this.precio = precio;
        this.color = color;
        this.consumoEnergetico = 100;
        this.capacidad = capacidad;
    }
}

class Lavadora extends Electrodomestico{
    constructor(precio, color, capacidad, carga){
        super(precio, color, capacidad);
        this.carga = carga;
    }
    precioFinal(){
        this.precio = this.carga * this.consumoEnergetico;
        return this.precio;
    }
}

const Samsung = new Lavadora(500,"negro",50,200);
console.log(Samsung);