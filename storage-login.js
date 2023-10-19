    window.onload = () => {
        let boton = document.querySelector("#loginBtn");
        let correosRegistrados = JSON.parse(localStorage.getItem("correosRegistrados")) || ["juanadearco@gmail.com", "pedrogarcia@gmail.com", "martinamarquez@gmail.com", "emiliamartinez@gmail.com", "estebanripoll@gmail.com"];
        console.log(correosRegistrados)
        boton.onclick = (event) => {
            event.preventDefault();
            let inputUsuario = document.getElementById("email").value;
            if (correosRegistrados.includes(inputUsuario)) {

               
                document.querySelector("form").innerHTML = ` 
                <h5>Ingresó correctamente</h5> 
                <a href="login.html"><button id="botonLogin" type="button"><img  id= "imagenLogin" src= "imagenes/flechita.png" alt="flehita" ></button></a>


                sessionStorage.setItem("sesionIniciada", true)
                sessionStorage.setItem("username", inputUsuario)
                
            } else {
                /*let p = document.createElement ("p")
                p.innerText = "Intente de nuevo"
                document.querySelector("form")(p)*/
                document.querySelector("form").innerHTML= ` 
                <h5>Intente nuevamente</h5> 
                <a href="login.html"><button id="botonLogin" type="button"><img  id= "imagenLogin" src= "imagenes/flechita.png" alt="flehita" ></button></a>

             `;
                
        }
            }
    
        }
    
