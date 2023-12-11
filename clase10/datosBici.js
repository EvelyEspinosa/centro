const fs = require('fs');

let data = fs.readFileSync('D:/modulo2.js/clase10/bicicletas.json');
//console.log(data);

let bici = JSON.parse(data);
console.log(bici);
console.log(typeof(bici));

module.exports = data;