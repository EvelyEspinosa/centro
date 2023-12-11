let peliculas = ['turno de dia','30 noches con mi ex','Bestia','El monte', 'Top gun maverick','Thor:amor y trueno.'];

let pelicula ="thor: amor y trueno";
function tranformarMayuscula(pelicula){
    return pelicula.toUpperCase()};
    let peliculaMayuscula= tranformarMayuscula(pelicula);
    console.log(peliculaMayuscula);
peliculas.unshift(peliculaMayuscula);
console.log(peliculas);

let peliculasAEstrenar = "Counter- Strike,NOP,Vertigo,Nick,Avatar";

let newPelis = peliculasAEstrenar.split(",");
newPelis.shift();

let todasLasPeliculas = peliculas.concat(newPelis);

console.log(todasLasPeliculas);