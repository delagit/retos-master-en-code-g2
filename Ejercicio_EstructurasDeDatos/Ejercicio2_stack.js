class Pila {

  constructor(){
    this.contador = 0;
    this.almacenaje = {};
  }

  push(nuevoElemento){
    this.contador++;
    console.log(`Contador se encuentra en ${this.contador}`);
    this.almacenaje[this.contador] = nuevoElemento;

    return this.contador;
  }

  pop(){
    if(this.contador === 0){
      return null;
    }
    const elementoEliminado = this.almacenaje[this.contador];
    delete this.almacenaje[this.contador];
    this.contador--;

    return elementoEliminado;
  }

  lenght(){
    return `El tamaño de esta pila es de ${this.contador} elementos`;
  }

  peek(){
    if(this.contador === 0) {
      return null;
    }
    return `El ultimo elemento agregado a la pila es: ${this.almacenaje[this.contador]} que se encuentra en la posición ${this.contador}.`;
  }

}

// ================ PILA IMPLEMENTADA
const filaSupermercado = new Pila();
filaSupermercado.push("Anabelle");
filaSupermercado.push("Berenice");
filaSupermercado.push("Carolina");
filaSupermercado.push("Danielle");
filaSupermercado.push("Elizabeth");
filaSupermercado.push("Frida");

