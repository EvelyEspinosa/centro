//1
function diez(numero){
    for(let i = numero; i < numero + 10; i++){
        console.log(i);
    }
}
diez(56);

//2
function saltar(valorI,valorF){
    for(let i= valorI; i <= valorF; i+=3){
        console.log(i);
    }
}
saltar(1,57);

//3
function sumatoria(valor1,valor2){
    let suma = 0
    for(let i=valor1; i <= valor2; i++){
        suma += i
    }
    console.log("La Sumatoria es : " +suma);
}
sumatoria(0,100);

//4
function topUpper(string) {
    let resultado = "";
    for (let i = 0; i < string.length; i++) {
        resultado += string[i].toUpperCase();
    }
    console.log(resultado);
}

topUpper('practicando el uso de los ciclos o bucles')

//5
function filtrarPares(array) {
    let arrayPares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayPares.push(array[i]);
        }
    }
    return arrayPares;
}

console.log(filtrarPares([1,2,3,4,5,6,7,8,9,10,11,12,13,14]))