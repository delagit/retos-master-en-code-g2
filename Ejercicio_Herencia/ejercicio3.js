
/* 3.- Hacer superclase Maestro y subclases Maestro de Física y
    Maestro de Música y a cada uno asignarle su materia y
    calcular su promedio de grupo a partir de calificaciones
    (puedes usar arreglos).
    El maestro de física tiene un
    atributo “antigüedad” que guarda un valor numérico,
    mientras que el maestro de música tiene un atributo “edad”
    también guardando un valor numérico. */


class Maestro {

  constructor(materia, nombre){
    this.materia = materia;
    this.nombre = nombre;
    this.promedio = 0;
  }
  getPromedio(...calificaciones){
    let promedio = calificaciones.reduce((accumulator, number) => {
      return accumulator + number;
    });
    this.promedio = (promedio/calificaciones.length).toFixed(2);
    return `El promedio de calificaciones de los alumnos del maestro ${this.nombre} es de ${this.promedio}`;
  }
}



class MaestroFisica extends Maestro{

  constructor(materia, nombre, antiguedad){
    super(materia, nombre);
    this.antiguedad = antiguedad;
  }
  getAntiguedad(){
    return `El maestro ${this.nombre} tiene ${this.antiguedad} años de trabajar en el colegio`;
  }
}

const maestroMario = new MaestroFisica("Fisica","Mario",20);
console.log(maestroMario);
console.log(maestroMario.getPromedio(9,6.6,5.5,7.8,10));
console.log(maestroMario.getAntiguedad());
console.log("====================================================")




class MaestroMusica extends Maestro{

  constructor(materia, nombre, edad){
    super(materia, nombre);
    this.edad = edad;
  }
  getEdad(){
    return `El maestro ${this.nombre} tiene ${this.edad} años de edad`;
  }
}

const maestroJorge = new MaestroMusica("Musica","Jorge",45);
console.log(maestroJorge);
console.log(maestroJorge.getPromedio(10,9,8,7.5,10));
console.log(maestroJorge.getEdad());
