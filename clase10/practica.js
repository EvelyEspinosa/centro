//Practica los metodos .map()  .filter()  .reduce()
let calificaciones = [10,5,3,7,8,9,3,2,1];
console.log(calificaciones);

//representar calificaciones en base a 100 puntos
//solucion en base a lo expuesto por Ruando
console.log('Trabajando con el ciclo for');
let nuevoArrayNotas = [];
for(let i = 0 ; i < calificaciones.length; i++){
    nuevoArrayNotas.push(calificaciones[i] * 10)
}
//console.log(nuevoArrayNotas);

//While - do while
//console.log('Trabajando con el ciclo while');
let contador = 0;
let nuevoArrayNotasWhile = [];
while(contador < calificaciones.length){
    nuevoArrayNotasWhile.push(calificaciones[contador] * 10);
    contador++;
}
//console.log(nuevoArrayNotasWhile);

// lo indicado por Aldair de castro - yair - manuel
//console.log('Trabajando con el .map');
let nuevasCalificaciones = calificaciones.map(function(num){
    return num * 10
})
//console.log(nuevasCalificaciones);

//Trabajando con el arrow function
let nuevasCalificaciones1 = calificaciones.map((elemento)=> elemento * 10);
//console.log(nuevasCalificaciones1);

//Generar un nuevo array con los alumnos aprobados(calificacion >=5)
//Trabajando con el .filter()
//console.log('Trabajando con el filter');
let aprobados= calificaciones.filter(notas => notas >=5);
//console.log(aprobados);

//Requiere conocer la sumatoria total de las carcteristicas de los alumnos 
const sumaCalificaciones = calificaciones.reduce((a,b) => a+b)
const promedio = sumaCalificaciones / calificaciones.length
//console.log(`La cantidad total de calificaciones fue de: ${calificaciones} y el promedio es de: ${promedio}`)


calificaciones.reduce(function(_sumatoria,_num){

})
//recorriendo en for of 
for (i of calificaciones){
  //  console.log(i)
};

//forEach

calificaciones.forEach(function (_cali) {
 //   console.log(cali)
})
//.find()
//Buscar algun alumno con calificaciones de 2 puntos
//let buscar = calificaciones.find(nota=> nota == 2)

const alumnos = [
    { nombre: 'Juan', mail: 'juan@example.com', calificacion: 8 },
    { nombre: 'María', mail: 'maria@example.com', calificacion: 9 },
    { nombre: 'Carlos', mail: 'carlos@example.com', calificacion: 7 },
    { nombre: 'Ana', mail: 'ana@example.com', calificacion: 10 },
    { nombre: 'Luis', mail: 'luis@example.com', calificacion: 6 }
  ];
  
  // Buscar con .find() al alumno Juan y mostrar su calificación
  const buscar = alumnos.find((alumnos) => alumnos.nombre === 'Juan');
if (buscar=== 'Juan'){
    console.log(`Alumno: ${buscar.nombre} su nota es: ${buscar.calificacion}`)
}else {
    console.log()
}

//
const buscarAlumno2 = (nombre, arrAlumnos = alumnos) => {
    const alumnoEncontrado = arrAlumnos.find(
        (alumno) => alumno.nombre === nombre
      );
    
      if (!alumnoEncontrado) return null; //validando si encontró el alumno o no
    
      return alumnoEncontrado.calificacion; // retornando la calificación del alumno
    };
    
    const calificacionAlumno = buscarAlumno2("Juan");
    console.log(
      calificacionAlumno
        ? ` su calificacion es de: ${calificacionAlumno}`
        : `Ese nombre no está en el array`
    );