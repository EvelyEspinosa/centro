let pagoMes = 21;
let consumo = 300;
let porcentaje = 20;
const KWH = 450;
let operacion = pagoMes * porcentaje/100;
let resultado = operacion + pagoMes ;
let total = KWH >= consumo ? resultado : pagoMes;
console.log("Debido a que su hogar tuvo un consumo de "+ KWH + ", en base al ajuste tarifario (hogares con consumo mayor a 300Kwh por mes tendran un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que sera de :"+total);