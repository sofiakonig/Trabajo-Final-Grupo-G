window.onload = () => {
   
//Validaciones de los input 

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

//Validacion del formulario completo 

   let botonEnviar = document.getElementById("enviar");
   botonEnviar.addEventListener("click", function(event) {
       event.preventDefault();
       
       let erroresDiv = document.querySelector("div.errores");
       let mensajeDiv = document.querySelector("div.mensaje");
       

       if (validarFormulario()){
            //Si hay errores, mostramos el mensaje de error y borro el mensaje anterior
            mensajeDiv.innerText = "";
            erroresDiv.innerText = "Por favor, complete todos los campos";
        } else {
            //Si no hay errores, mostramos el mensaje de exito
            erroresDiv.innerText = "";
            mensajeDiv.innerText = "Tu consulta fue enviada con exito. Espera una pronta respuesta."
            mensajeDiv.style.color = "black";
        }
        guardarInformacion();

   });

   function validarFormulario (){
       let inputNombre = document.getElementById("nombre");
       let inputApellido = document.getElementById("apellido");
       let inputEmail = document.getElementById("email");
       let inputTelefono = document.getElementById("telefono");
       //let inputFecha = document.getElementById("fecha-viaje");
       let inputPass = document.getElementById("password");
       let inputRepeatPass = document.getElementById("confirmPassword");

       if (inputNombre.value.length < 2 || inputApellido.value.length < 2 || !inputEmail.value.includes("@") || inputTelefono.value.length < 9 || inputPass.value.length < 5 || inputRepeatPass.value !== inputPass.value) {
           
           return true; // El formulario no es válido
       } else {
           return false; 
       }
           
   }

//Almacenar la informacion en storage 
   function guardarInformacion () {
    
//Obtener la informacion que quiero guardar
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let contrasena = document.getElementById("password").value;
    let contrasenaConfirmada = document.getElementById("confirmPassword").value;

    let informacion = {
        Nombre: nombre,
        Apellido: apellido,
        Email: email,
        Telefono: telefono,
        Contrasena: contrasena,
        Confirmacion: contrasenaConfirmada

    };

    sessionStorage.setItem("informacionUsuario", JSON.stringify(informacion));
    console.log("Base de datos");
    console.log(sessionStorage);

   }

}