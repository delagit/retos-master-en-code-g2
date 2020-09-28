/* Implementar con HTML la pantalla de espera de asesorías.
-Se deben poder agregar personas a la cola.
-Se debe ver quien está siendo atendido.
-Se debe ver cuántos faltan por atender.
-Se debe ver quién es el siguiente.
-Cuando no exista nadie en la cola, mostrar un mensaje invitando a que tomen una asesoría. */

class Cola {

    constructor(){
        this.coleccion = [];
    }

    encolar(elemento){ // agregar a la cola
        this.coleccion.push(elemento);
        return elemento;
    }

    desencolar(){ // sacar el primer elemento de la cola
        return this.coleccion.shift();
    }

    tamaño(){ // retorna el tamaño de la cola
        return this.coleccion.length;
    }

    estaVacia(){ // Valida si la cola está vacia
        return this.coleccion.length === 0;
    }

    frente(){ // Retorna el primer elemento de la cola sin sacarlo de ella
        return this.coleccion[0];
    }
}
const filaDeAsesorias = new Cola();

function agregar(){
    //Se captura el elemento del input
    let elemento = document.getElementById("agregarCola").value;
    //Se ejecuta el metodo encolar de nuesta clase
    filaDeAsesorias.encolar(elemento);

    if(filaDeAsesorias.tamaño() === 1){
        //Se obtiene el div dentro del cual vamos a insertar el contenido de la cola
        var grid = document.getElementById("listado");
        //Se crea un div que contendra cada contenedor del elemento
        var grilla = document.createElement("div");
        grilla.className = "grilla"
        grilla.id = filaDeAsesorias.coleccion.length;
        //Se crea el div de tipo alert que contendra al elemento
        var alert = document.createElement("div");
        alert.className = "alert alert-danger mx-auto";
        alert.setAttribute("role","alert");
        alert.innerText = `#1 ${filaDeAsesorias.frente()}` ;
        //Se inserta la grilla en el inicio del grid
        grid.appendChild(grilla);
        grilla.appendChild(alert);

    }else if(filaDeAsesorias.tamaño() > 1){
        //Se obtiene el div dentro del cual vamos a insertar el contenido de la cola
        var grid = document.getElementById("listado");
        //Se crea un div que contendra cada contenedor del elemento
        var grilla = document.createElement("div");
        grilla.className = "grilla"
        grilla.id = filaDeAsesorias.coleccion.length;
        //Se crea el div de tipo alert que contendra al elemento
        var alert = document.createElement("div");
        alert.className = "alert alert-info mx-auto";
        alert.setAttribute("role","info");
        alert.innerText = `#${filaDeAsesorias.coleccion.length} ${elemento}` ;
        //Se inserta la grilla en el inicio del grid
        grid.appendChild(grilla);
        grilla.appendChild(alert);
    }
}

function quitar(){
    if(filaDeAsesorias.tamaño() === 0){
        null;
    }else if(filaDeAsesorias.tamaño() > 0){
        document.getElementById(filaDeAsesorias.tamaño()).remove();
        filaDeAsesorias.desencolar();
    }
}