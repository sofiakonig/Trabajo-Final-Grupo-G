window.onload = () => {
    //let formulario = document.querySelector(".form-cuerpo"); //Para que no vaya a otro sitio y salte error cuando apretas submit
    //formulario.addEventListener("submit", (event) => {
       // event.preventDefault()
   // })

    let inputNombre = document.getElementById("nombre");
    inputNombre.addEventListener("keyup", () => {
        let mensaje;
        if (inputNombre.value.length < 2) {
            mensaje = "Ingrese su nombre completo"
            document.getElementById("mensajeNombre").innerText = mensaje;
        } else {
            document.getElementById("mensajeNombre").innerText = " ";
        }
    })

    let inputApellido = document.getElementById("apellido");
    inputApellido.addEventListener("keyup", () => {
        let mensaje;
        if (inputApellido.value.length < 2) {
            mensaje = "Ingrese su nombre completo"
            document.getElementById("mensajeApellido").innerText = mensaje;
        } else {
            document.getElementById("mensajeApellido").innerText = " ";
        }
    })

    let inputEmail = document.getElementById("email");
    inputEmail.addEventListener("keyup", () => {
     let mensaje;
     if (!inputEmail.value.includes("@")){
         mensaje = "El email no es válido. Debe incluir un '@'."
         document.getElementById("mensajeEmail").innerText = mensaje
     } else {
         document.getElementById("mensajeEmail").innerText = " "
     }
    })

    let inputTelefono = document.getElementById("telefono");
    inputTelefono.addEventListener("keyup", () => {
        let mensaje;
        if (inputTelefono.value.length < 9){
            mensaje = "Ingrese un número de teléfono valido"
            document.getElementById("mensajeTelefono").innerText = mensaje;
        } else{
            document.getElementById("mensajeTelefono").innerText = " ";
        }
    })

    //let inputFecha = document.getElementById("fecha-viaje"); //Si lo dejas incompleto aparece, pero una vez que completas la fecha sigue apareciendo. Probe con change y no pasa nada 
    //inputFecha.addEventListener("keyup", () => {
      //  let mensaje;
      //  if (!inputFecha.value){
        //    mensaje = "Seleccione una fecha"
          //  document.getElementById("mensajeFecha").innerText = mensaje;
        //} else{
          //  document.getElementById("mensajeFecha").innerText = " ";
        //}
    //})

    let inputPass = document.getElementById("password");
    inputPass.addEventListener("keyup", () => {
        let mensaje;
        if (inputPass.value.length < 5) {
            mensaje = "La contraseña tiene que tener al menos 5 caracteres"
            document.getElementById("mensajePassword").innerText = mensaje;
        } else {
            document.getElementById("mensajePassword").innerText = " ";
        }
    })
  

   let inputRepeatPass = document.getElementById("confirmPassword");
   inputRepeatPass.addEventListener("keyup", () => {
    let mensaje;
    if (inputRepeatPass.value != inputPass.value) {
        mensaje = "Las contraseñas deben coincidir"
        document.getElementById("mensajeRepeatPassword").innerText = mensaje
    } else {
        document.getElementById("mensajeRepeatPassword").innerText = " "
    }
   })


//PRUEBA VALIDACION 1 No salta ningun mensaje cuando apreto registrar
    //let botonEnviar = document.getElementById("enviar");
    //botonEnviar.addEventListener("click", function(event) {
      //  event.preventDefault();

      //  if (validarFormulario()){
            //document.querySelector("div.errores").innerHTML = `<p> Revise los campos </p>`
      //  } else {
      //      document.querySelector("div.mensaje").innerHTML = `<p> Tu consulta fue enviada con exito. Espera una pronta respuesta </p>`
      //  }
    //});
    //function validarFormulario (){
      //  let inputNombre = document.getElementById("nombre").value;
      //  let inputApellido = document.getElementById("apellido").value;
      //  let inputEmail = document.getElementById("email").value;
      //  let inputTelefono = document.getElementById("telefono").value;
      //  let inputFecha = document.getElementById("fecha-viaje").value;
      //  let inputPass = document.getElementById("password").value;
      //  let inputRepeatPass = document.getElementById("confirmPassword").value;

      //  if (inputNombre.value.length < 2 || inputApellido.value.length < 2 || !inputEmail.value.includes("@") || inputTelefono.value.length < 9 || !inputFecha.value || inputPass.value.length < 5 || inputRepeatPass.value !== inputPass.value) {
      //      return false; // El formulario no es válido
      //  } else {
      //      return true;
      //  }
            
    //}

//PRUEBA VALIDACION 2
//function datos (){ //No me toma la funcion
    //let inputNombre = document.getElementById ("nombre").value;
    //let inputApellido = document.getElementById("apellido").value;
    //let inputEmail = document.getElementById("email").value;
    //let inputTelefono = document.getElementById("telefono").value;
    //let inputFecha = document.getElementById("fecha-viaje").value;
    //let inputPass = document.getElementById("password").value;
    //let inputRepeatPass = document.getElementById("confirmPassword").value;

    //if (!inputNombre || !inputApellido ||!inputEmail || !inputTelefono || !inputFecha || !inputPass || !inputRepeatPass){
    //    document.querySelector("div.errores").innerHTML = `<p> Revise los campos </p>`
    //}
    //else {
    //    document.querySelector("div.mensaje").innerHTML = `<p> Tu consulta fue enviada con exito. Espera una pronta respuesta </p>`
    //}
//}


}