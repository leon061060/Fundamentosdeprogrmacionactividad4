const readline = require('readline');

const rl=readline.createinterface({
input: process.stdin,
output: process.stdout
});

rl.question('Escribe un número entre 0 y 10: ', function(respuesta) {
    const numero = parseInt(respuesta);)}
    

