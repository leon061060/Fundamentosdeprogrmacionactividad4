let producto = 1;
let contador = 0;
let numero = 1;

while (contador <10) {
if (numero % 2 !== 0){
producto*= numero;
contador++;}
numero++;
}
console.log("El producto de los 10 primeros números impares es:", producto);
