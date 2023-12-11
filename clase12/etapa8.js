const autosImportados = require("./autos")

let concesionaria = {
   autos: autosImportados,
 
   buscarAuto: function (patente) {
      const autoEncontrado = this.autos.find(auto => auto.patente === patente);
      return autoEncontrado || null
   },
    //ALT + SHIFT +F

   venderAuto: function (patente) {
      let autoVenta = this.buscarAuto(patente);
      if (autoVenta) {
         autoVenta.vendido = true;
      }
      },

   autosParaLaVenta:  function () {
      return this.autos.filter(auto => !auto.vendido).filter(auto => auto.vendido == false);
      },
   
   autosNuevos: function(){
      return this.autosParaLaVenta().filter(auto => auto.km< 100)
   },

   listaDeVentas: function (){

     return this.autos.filter(auto => auto.vendido).map(auto => auto.precio)
   },

   totalDeVentas: function(){
      let totalPrecio = this.listaDeVentas().reduce(function(total,auto){
      return total + auto;
      },0)
      return totalPrecio
   }
}