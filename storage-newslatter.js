const baseDeDatosCorreos = {
correos: ["juanadearco@gmail.com", "pedrogarcia@gmail.com","martinamarquez@gmail.com", "emiliamartinez@gmail.com", "estebanripoll@gmail.com"]
}

// Almacenar la base de datos en localStorage
localStorage.setItem('baseDeDatosCorreos', JSON.stringify(baseDeDatosCorreos));

// Recuperar la base de datos desde localStorage
const baseDeDatosRecuperada = JSON.parse(localStorage.getItem('baseDeDatosCorreos')) || {};

// Acceder a la lista de correos electrónicos
const listaDeCorreos = baseDeDatosRecuperada.correos || [];

// Mostrar la lista de correos (solo para propósitos de demostración)
console.log(listaDeCorreos);
