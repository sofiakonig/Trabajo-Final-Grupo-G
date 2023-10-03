/*const baseDeDatosCorreos = {
correos: ["juanadearco@gmail.com", "pedrogarcia@gmail.com","martinamarquez@gmail.com", "emiliamartinez@gmail.com", "estebanripoll@gmail.com"]
}

localStorage.setItem('baseDeDatosCorreos', JSON.stringify(baseDeDatosCorreos));

const baseDeDatosRecuperada = JSON.parse(localStorage.getItem('baseDeDatosCorreos')) || {};

const listaDeCorreos = baseDeDatosRecuperada.correos || [];

console.log(listaDeCorreos);*/

document.getElementById('newslatter').addEventListener('submit', function(event){
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // registra el valor del input
    let email = document.getElementById('barra').value;
    
    // Crea un objeto JSON con el string
    let jsonCorreos = { "texto": email };

    // Convierte el objeto JSON a una cadena
    let jsonString = JSON.stringify(jsonCorreos);

    // mostrar JSON en la consola para verificar
    console.log(jsonString);

    // guardar el JSON en localStorage
    localStorage.setItem('jsonCorreos', jsonString); })
