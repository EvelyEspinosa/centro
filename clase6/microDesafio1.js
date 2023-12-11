let hogar = ["Estufa","abanico","nevera","radio","microondas","television"];
console.log(hogar.indexOf("nevera"));

hogar.shift(0);
hogar.push(0,"lavadora","laptop");
console.log(hogar.length);

let busca = hogar.indexOf("radio");
if(busca){
    console.log("Producto Encontrado");
}else{
    console.log("El Producto buscado no existe");
}
hogar.join(" ");
console.log(hogar.length);
