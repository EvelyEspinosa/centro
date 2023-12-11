function horaDeTrabajo(salarioMensual,diasTrabajados,HorasRegularTrabajadas){
    let salarioPorDia = salarioMensual /  diasTrabajados;
    let salarioPorHora = salarioPorDia / HorasRegularTrabajadas;


    return salarioPorHora;
    

}

console.log(horaDeTrabajo(216,12,8));
