//array de pelis 
let favoritas = [{
    id: 1, //identificador unico de la pelicula
    nombre:"Crepusculo",
    rating: 9,  //calificacion por parte de los usuarios
    awards: 3, //premios
    length: 100, //duracion
    price: 8,//precio
    genre: [accion, animacion, aventura, comedia, suspenso] //genero de la pelicula
},
{
    id: 2, //identificador unico de la pelicula
    nombre:"El numero 4",
    rating: 9,  //calificacion por parte de los usuarios
    awards: 6, //premios
    length: 200, //duracion
    price: 17,//precio
    genre: accion, //genero de la pelicula
},
{
    id: 3, //identificador unico de la pelicula
    nombre:"Mama",
    rating: 9,  //calificacion por parte de los usuarios
    awards: 3, //premios
    length: 190, //duracion
    price: 7,//precio
    genre: suspenso, //genero de la pelicula
},
{
    id: 4, //identificador unico de la pelicula
    nombre:"Mario Bross",
    rating: 10,  //calificacion por parte de los usuarios
    awards: 3, //premios
    length: 160, //duracion
    price: 18,//precio
    genre: animacion, //genero de la pelicula
}]

module.exports = favoritas;

console.log(favoritas);