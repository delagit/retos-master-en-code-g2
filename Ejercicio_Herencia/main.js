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




/* 2.- Crear una clase Bebida que herede a dos clases Cerveza
    y Refresco. Ambas clases deben tener la propiedad
    cantidad (ml). La clase Refresco debe tener el atributo
    azucar(g) y la clase Cerveza debe el atributo
    porcentajeAlcohol
Crear los getters y setters correspondientes. */




/* 3.- Hacer superclase Maestro y subclases Maestro de Física y
    Maestro de Música y a cada uno asignarle su materia y
    calcular su promedio de grupo a partir de calificaciones
    (puedes usar arreglos). El maestro de física tiene un
    atributo “antigüedad” que guarda un valor numérico,
    mientras que el maestro de música tiene un atributo “edad”
    también guardando un valor numérico. */