const buscarPais = nombre => {
  const nombrePais = nombre.toLowerCase();
  fetch(`https://restcountries.eu/rest/v2/name/${nombrePais}`)
    .then((respuesta) => {
      console.log(respuesta)
      if(respuesta.status === 200){
        respuesta.json()
          .then(function(respuesta){return respuesta.json();})
          .then( respuesta => {
            let bandera = ""
            if(respuesta === undefined){
              document.getElementById("bandera").innerHTML = "..."
            } else {
              bandera = respuesta[0].flag
              document.getElementById("bandera").innerHTML = bandera;
              console.log(bandera);
            }
          }

          )
          .catch((error) => console.log(error))
      } else {
        console.log("País no encontrado");
      }
    })
    .catch((err) => console.log(err));
}


nombrePais("colombia");