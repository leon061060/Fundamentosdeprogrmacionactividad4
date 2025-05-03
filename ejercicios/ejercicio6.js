const readline = require('readline');

const rl=readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Escribe un número entre 0 y 10: ', function(respuesta) {
    const numero = parseInt(respuesta);

    if (isNaN(numero) || numero < 0 || numero > 10) {
        console.log('¡Error! Debes escribir un número del 0 al 10.');
      }else {
        console.log(`\nTabla del ${numero}:`);

        for (let i = 1; i <= 10; i++) {
          console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }
    rl.close();
});