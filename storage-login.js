    window.onload = () => {
        let boton = document.querySelector("#loginBtn");
        let correosRegistrados = JSON.parse(localStorage.getItem("correosRegistrados")) || ["juanadearco@gmail.com", "pedrogarcia@gmail.com", "martinamarquez@gmail.com", "emiliamartinez@gmail.com", "estebanripoll@gmail.com"];
        console.log(correosRegistrados)
        boton.onclick = (event) => {
            event.preventDefault();
            let inputUsuario = document.getElementById("email").value;
            if (correosRegistrados.includes(inputUsuario)) {
               /* let p = document.createElement ("p");
                p.innerText = "Ingreso con exito";
                document.querySelector("form").appendChild (p) */
                document.querySelector("form").innerText = "Ingreso con exito!!! "
                sessionStorage.setItem("sesionIniciada", true)
                sessionStorage.setItem("username", inputUsuario)
                console.log(sessionStorage);
            } else {
                /*let p = document.createElement ("p")
                p.innerText = "Intente de nuevo"
                document.querySelector("form")(p)*/
                document.querySelector("form").innerText = "Intente de nuevo";
        }
            }
    
        }
    
