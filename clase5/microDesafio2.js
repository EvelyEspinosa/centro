function calcularTotalHamburguesa (tipoDeHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate,lechuga, cebolla){
    let precioBase;
    switch(tipoDeHamburguesa) {
        case "Carne a la parrilla":
            precioBase = 1800;
            break;
        case "Pollo":
            precioBase = 1500;
           break;
        case "Vegetariana":
            precioBase = 1200;
            break;
            default:
                precioBase = 0
    }

let TotalAdicionales = ( jamon * 30) + (queso * 25) + (salsaTomate * 5) + (mayonesa * 5) + (mostaza * 5 ) + (tomate * 15) + (lechuga * 10) + ( cebolla * 10);

let totalAPagar = precioBase + TotalAdicionales;
return totalAPagar;
}
console.log(calcularTotalHamburguesa( ));

// segunda funcion
function generarMensaje(nombre, apellido, tipoDeHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla){
    
    let totalAPagar = calcularTotalHamburguesa(tipoDeHamburguesa,jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla);

    let mensaje = "Nombre: "+ nombre + " " + apellido + " " + " Hamburguesa de " + tipoDeHamburguesa + " "+ "Total a pagar: $" + totalAPagar;

    return mensaje;
    

}
console.log(generarMensaje(Evely,Espinosa,Vegetariana,tomate,salsaTomate,mayonesa,mostaza,cebolla,lechuga,queso));
