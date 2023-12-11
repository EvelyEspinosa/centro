let perfil = "administrador"
if (perfil == "administrador"){
    console.log('Usted tiene todos los privilegios de uso del sistema');
} else if(perfil == "asistente"){
    console.log("Usted solo tiene permiso de registra, modificar y consultar datos");
}  else if (perfil == "invitado") {
    console.log("Usted solo tiene permiso de consultar datos");
} else; 
    console.log("Debe especificar un perfil valido");
