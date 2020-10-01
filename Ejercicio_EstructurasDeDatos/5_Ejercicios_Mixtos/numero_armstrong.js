//Se recibe el numero a evaluar por medio de un prompt
let numero = parseInt(prompt("Ingrese el número a verificar: "));
let suma = 0;

for(i = 0; i < numero.length; i++){
  //Se recorre con un for cada uno de los digitos que componen el numero y se suma
  //con Math.pow se pasan dos parametros el primero es el digito y el segundo el exponente que corresponde a la longitud del numero evaluado
  suma += Math.pow(numero.charAt(i), numero.length);
}

if(suma === numero){ // Si la suma de conseguida es igual a el numero entonces es un numero armstrong
  alert("El número ingresado SI es un número Armstrong.");
  } else {
  alert("El número ingresado NO es un número Armstrong.");
}

