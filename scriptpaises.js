let paquete = prompt (" Indique el paquete elegido. Opción 1 - 2 - 3 o 4 ")
 
switch (paquete) {
 case "1":
   precio = 2500;
   alert ("El precio a pagar en efectivo es " + precio);
   break; 
 case "2":
   precio = 4500;
   alert ("El precio a pagar en efectivo es " + precio);
   break;
 case "3":
    precio = 2500;
    alert ("El precio a pagar en efectivo es " + precio);
    break;
 case "4":
   precio = 6000;
   alert ("El precio a pagar en efectivo es " + precio);
 default: 
  alert("Usted no ingresó una opción correcta");
  break; 
}

let medioDePago = prompt (" Indique el medio de pago elegido. EFECTIVO - CREDITO - DEBITO ");

switch (medioDePago) {
   case "EFECTIVO":
     precio = precio - 500;
     alert ("El precio final del paquete abonando en efectivo es " + precio);
     break; 
   case "CREDITO":
     precio = precio + 500;
     alert ("El precio final del paquete abonando con tarjeta de crédito es " + precio);
     break;
   case "DEBITO":
      precio = precio
      alert ("El precio final del paquete abonando con tarjeta de débito es " + precio)
   default: 
    alert("Usted no ingresó una opción correcta")
    break; 
}