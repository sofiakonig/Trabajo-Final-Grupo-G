function saludar (){
    alert ("Bienvenido/a " + nombre + " " + apellido + " al sitio web de Turismo Ingenias");
}
let nombre = prompt ("Por favor ingrese su nomnbre")
let apellido = prompt ("Por favor ingrese su apellido")
saludar(nombre, apellido);

let destinoElegido = Number(prompt("Conoce un poco mas acerca de nuestros destinos. Selecciona el numero correspondiente para cada destino: 1- Argentina. 2- Peru. 3- Chile. 4- Uruguay"))
switch (destinoElegido){
    case 1:
        alert("Destino perfecto para aquellos que quieren disfrutar de los paisajes naturales del pais")
        break;
    case 2:
        alert("Destino excelente para conocer ruinas y ciudades antiguas")
        break;
    case 3:
        alert("Destino indicado para disfrutar de las playas y montañas")
        break;
    case 4:
        alert("Destino recomendado para disfrutar de las playas y centros comerciales ")
        break;
    default:
        alert("Por favor, selecciona un numero entre el 1 y el 4")
        break;
}