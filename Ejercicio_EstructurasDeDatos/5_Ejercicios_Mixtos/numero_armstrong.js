let numero = parseInt(prompt("Ingrese el número a verificar: "));
let suma = 0;

for(i = 0; i < numero.length; i++){
  suma += Math.pow(numero.charAt(i), numero.length);
}

if(suma === numero){
  alert("El número ingresado SI es un número Armstrong.");
  } else {
  alert("El número ingresado NO es un número Armstrong.");
}

