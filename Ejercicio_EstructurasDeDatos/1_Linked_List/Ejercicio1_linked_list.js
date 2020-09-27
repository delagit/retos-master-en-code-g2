//Se crea el nodo que contendra los elementos basicos que contendran la información dentro de la lista

class Nodo {
  constructor( dato ){
    //aqui se guarda el elemento que queramos
    this.dato = dato;
    //aqui se encuentra quien nos indica el siguiente nodo de la lista, por defecto no contiene ningun elemento por lo que su valor debe ser nulo
    this.next = null;
  }
}

//======================== CLASE PARA LA LISTA

class ListaEnlazada {
  //Las propiedades de la lista
  constructor(){
    this.head = null;
    this.length = 0;
  }

  estaVacia(){
    //Para verificar si la lista esta vacia
    return this.head === null;
  }

  agregarAlFinal(dato){
    console.log(`Se agrega ${dato} al final de la lista`);
    //Se crea un nuevo nodo con el objeto a agregar
    const nodo = new Nodo(dato);
    if(this.head === null){
      this.head = nodo;
    } else {
      let nodoActual = this.head;
      while(nodoActual.next){
        nodoActual = nodoActual.next;
      }
      nodoActual.next = nodo;
    }
    this.length++; // Se aumenta el contador de longitud de la lista
  }

  agregarAlInicio(dato){
    console.log(`Se agrega ${dato} al principio de la lista`);
    //Se crea un nuevo nodo con el objeto a agregar
    const nodo = new Nodo(dato);
    if(!this.head){
      this.head = nodo;
    } else {
      nodo.next = this.head;
      this.head = nodo;
    }
    this.length++; //Se aumenta el contador de longitud de la lista
  }

  agregarEnPosicion(dato, posicion){
    console.log(`Se agrega ${dato} en la posición ${posicion}`);
    //Se crea un nuevo nodo con el objeto a agregar
    const nodo = new Nodo(dato);

    if(this.head === null || posicion > this.length){
      return `La posicion ingresada no es valida para agregar el dato`;
    } else {
      let contador = 1;
      let nodoActual = this.head;
      while(contador !== posicion){
        contador++;
        nodoActual = nodoActual.next;
      }
      nodoActual.dato = dato;
    }
  }

  get(index){
    if(this.head === null || index > this.length){
      return null;
    } else {
      let contador = 1;
      let nodoActual = this.head;
      while(contador !== index){
        contador++;
        nodoActual = nodoActual.next;
      }
      return nodoActual;
    }
  }

  borrar(dato){
    let nodoActual = this.head;
    let nodoAnterior = null;
    if(nodoActual.dato === dato){
      this.head = this.nodoActual.next;
    } else {
      while(nodoActual.dato !== dato && nodoActual.next !== null){
        nodoAnterior = nodoActual;
        nodoActual = nodoActual.next;
      }
      nodoAnterior.next = nodoActual.next;
    }
    this.length--;
  }


}


//=================== CREAMOS UNA LISTA ENLAZADA

const listaDeCompras = new ListaEnlazada();

listaDeCompras.agregarAlInicio("Leche");
listaDeCompras.agregarAlFinal("Huevos");
listaDeCompras.agregarAlFinal("Frijol");
listaDeCompras.agregarAlFinal("Arroz");

listaDeCompras.agregarEnPosicion("Tomates", 3);
console.log(listaDeCompras);