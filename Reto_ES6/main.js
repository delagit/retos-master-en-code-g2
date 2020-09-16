//=========== RETO NUMERO 1 ============
/* Crea una funcion llamada palindrome() que reciba como parametro una oracion, si la oración es un palindromo la funcion debera devolver true en otro caso, devolver false. */

/* const palindrome = oracion =>{
    oracion = oracion.replace(/\s/g,'');
    if(oracion.length === 1){
        return true;
    }else if(oracion.length === 2){
        return oracion[0] === oracion[1];
    }else if(oracion[0] === oracion.slice(-1)){
        return palindrome(oracion.slice(1,-1));
    }else{
        return false;
    }
}
console.log(palindrome("ali tomo tila")); */



//======== RETO NUMERO 2 ============
/* Crea una funcion llamda longestCountry(), esta funcion recibira de parametro un arreglo con nombres de distintos paises, la funcion debera retornar el pais con mayor numero de letras. */

/* const paises = ["México","Panamá","Guatemala","El Salvador","Costa Rica","Polonia","Estados Unidos",];

const longestCountry = lista =>{
    let extension = [];
    let mayor = 0;
    for (let i = 0; i < lista.length; i++) {
        extension.push(lista[i].length);
    };
    mayor = Math.max(...extension);
    let indice = extension.indexOf(mayor);
    return paises[indice];
}

console.log(longestCountry(paises)); */



//======== RETO NUMERO 3 ============
/* Crea una funcion llamada farenheitToCelsius() que reciba como parametro los grados farenheit y los convierta a grados centigrados. */

/* const farenheitToCelsius = grados =>{
    parseInt(grados);
    let farenheit = (grados-32)*(5/9);
    return farenheit.toFixed(2);
}

console.log(farenheitToCelsius("100")); */



//======== RETO NUMERO 4 ============
/* Cambia lo mas que puedas a ES el reto de Piedra Papel y Tijeras. */

/* const piedraPapelTijera = () =>{
    alert("Vamos a jugar piedra, papel o tijera.  Ingresen por turnos su elección.");
    let jugador1 = prompt("JUGADOR No.1   Ingrese su elección: ");
    let jugador2 = prompt("JUGADOR No.2   Ingrese su elección: ");
    if ( jugador1 == "piedra" ){
        if (jugador2 == "piedra"){
            alert(`EMPATE ambos eligieron ${jugador2}`);
        } else if(jugador2 == "papel") {
            alert(`GANA EL JUGADOR No. 2 porque ${jugador2} le gana a ${jugador1}`);
        }else {
            alert(`GANA EL JUGADOR No. 1 porque ${jugador1} le gana a ${jugador2}`);
        }
    } else if (jugador1 == "papel") {
        if(jugador2 == "piedra"){
            alert(`GANA EL JUGADOR No. 1 porque ${jugador1} le gana a ${jugador2}`);
        }else if (jugador2 == "papel"){
            alert(`EMPATE ambos eligieron ${jugador2}`);
        }else {
        alert(`GANA EL JUGADOR No. 2 porque ${jugador2} le gana a ${jugador1}`);
        }
    } else {
        if (jugador2 == "piedra"){
            alert(`GANA EL JUGADOR No. 2 porque ${jugador2} le gana a ${jugador1}`);
        }else if (jugador2 == "papel"){
            alert(`GANA EL JUGADOR No. 1 porque ${jugador1} le gana a ${jugador2}`);
        }else {
            alert(`EMPATE ambos eligieron ${jugador2}`);
        }
    }
}

piedraPapelTijera(); */






//======== RETO NUMERO 5 ============
/* Crea una funcion que imprima el número de parámetros enviados. */

/* const numeroParametros = (...parametro) => parametro.length;

console.log(numeroParametros("hola","como","estas","?")); */
