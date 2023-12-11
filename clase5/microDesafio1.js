function alquilerDeUnVehiculo(tipoDeVehiculo,DiasDeAlquiler,sillaParabebe ){
   let pagoPorDia;

   switch(tipoDeVehiculo){

case "compacto": 
  pagoPorDia = 14000;
case "mediano": 
  pagoPorDia = 17000;
case "camioneta": 
  pagoPorDia = 28000; 
    }
if(sillaParabebe){
    pagoPorDia += 1200;
    
}

let total = pagoPorDia * DiasDeAlquiler ;

return "Estimado cliente: en base al tipo de vehiculo "+tipoDeVehiculo+" alquilado, considerando los "+DiasDeAlquiler+" dias utilizados, el monto a pagar es de "+ total
}


// console.log("Estimado cliente: en base al tipo de vehiculo "+tipoDeVehiculo+" alquilado, considerando los "+DiasDeAlquiler+" dias utilizados, el monto a pagar es de "+ total);

console.log(alquilerDeUnVehiculo("mediano",2,false));
