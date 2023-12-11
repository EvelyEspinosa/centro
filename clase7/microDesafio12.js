let cuenta = [200,-20,50,-10,150,-15,35,60,40,-30];

const saldo = function calcularCuenta(cuenta){
    let deposito = 0;
    let retiro =0;

    for(let operacion of operaciones){
    if(cuenta > 0){
        deposito += deposito + cuenta[i]
    }else(cuenta <-0);
        retiro += math.abs(deposito + cuenta[i] );
    }
}
const saldoActual = saldoDepositos - saldoRetiros;

return {
  saldoDepositos: saldoDepositos,
  saldoRetiros: saldoRetiros,
  saldoActual: saldoActual
}
const obtenerInformacionCliente = function(nombre, apellido, operaciones) {
const saldos = calcularSaldos(operaciones);

return (
  "Estimada " + nombre + " " + apellido + ":\b" + " "+
  "El monto total de los depósitos es de: $" + saldos.saldoDepositos + ".\b" + " "+ 
  "El monto total de los retiros es de: $" + saldos.saldoRetiros + ".\b" + " "+
  "Por lo tanto, su saldo actual en la cuenta es de: $" + saldos.saldoActual + "."
);
};


const nombreCliente = "Gloria";
const apellidoCliente = "Medina";

const mensajeCliente = obtenerInformacionCliente(nombreCliente, apellidoCliente, operacionesBancarias);
console.log(mensajeCliente);