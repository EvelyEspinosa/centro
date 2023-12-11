let cuenta = [200,-20,50,-10,150,-15,35,60,40,-30];
let saldos = cuenta.filter(function (positivos) {
  return positivos >= 0
  
})

let suma = saldos.reduce(function(acumulado,sum){
  return acumulado + sum
})

let saldosNegativos = cuenta.filter(function(negativos){
  return negativos <= -0
})
let resta = saldosNegativos.reduce(function(acum,res){
  return acum + res
})
let saldoTotal = resta + suma 

console.log("El saldo total es : "+saldoTotal)
console.log("el retiro total es : "+resta)
console.log("el deposito total es de :"+suma)