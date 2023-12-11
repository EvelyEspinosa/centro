const autosImportados = require("./autos")
let concesionaria = {
   autos: autosImportados,
   buscarAuto: function(patente){
      const autoEncontrado = this.autos.find(auto => auto.patente === patente);
      return autoEncontrado || null;
   }
};