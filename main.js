/*
1.Haz una clase llamada Persona que siga las siguientes condiciones:
Sus atributos son: nombre, apellido, edad, ID, sexo, peso y altura.
Debe tener los métodos:

calcularIMC()
esMayorDeEdad()
generarID()
El constructor unicamente pide nombre, apellido, edad, sexo, peso y altura.

NOTA: el ID se genera concatenando las primeras tres letras del nombre, la primeras tres letras del apellido, año de nacimiento y sexo.
*/

/* class Persona {
    constructor(nombre, apellido, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC(){
        let imc = ((this.peso)/(this.altura * this.altura));
        return imc.toFixed(2);
    }
    esMayorDeEdad(){
        if(this.edad <= 18){
            return `${this.nombre} es MENOR de edad porque tiene ${this.edad} años.`
        }else{
            return `${this.nombre} es MAYOR de edad porque tiene ${this.edad} años.`
        }
    }
    generarID(){
        return `${this.nombre.substring(0,3)}${this.apellido.substring(0,3)}${2020-this.edad}${this.sexo}`;
    }
}

const persona1 = new Persona("raissa","lopez","27","F","65","1.6"); */





/*==============================================================================
2. Haz una clase llamada Password que siga las siguientes condiciones:

Que tenga los atributos longitud y contraseña. Como regla de negocio, la contraseña no puede ser menor a 8 caracteres.
El constructor solo recibe longitud.

Los métodos que implementa serán:

esFuerte(): devuelve un booleano si es fuerte o no, para que sea fuerte debe tener más de 2 mayúsculas, más de 1 minúscula y mas de 5 números.
generarPassword(): genera la contraseña del objeto con la longitud que tenga. La contraseña debe generarse de manera aleatoria.
Método get para contraseña y longitud.
Método set para longitud.

 */

class Password {
    constructor(longitud){
        this.longitud = longitud;
        this.contraseña = "";
    }
    /* esFuerte(){ //2 mayusculas, 1 minuscula, mas de 5 numeros

    } */
    generarPassword(){
        let pass = "";
        const caracteres = "0123456789aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
        for (let i = 0; i < this.longitud; i++){
            pass += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
        }
        this.contraseña = pass;
        return this.contraseña;
    }
    getContraseña(){
        return this.contraseña;
    }
    getLongitud(){
        return this.longitud;
    }
    setLongitud(newLongitud){
        this.longitud = newLongitud;
        return this.longitud;
    }
}

const facebook = new Password(10);


