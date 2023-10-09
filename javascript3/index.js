const { log } = require("console");

// Implementar comando de repetição (de 1 até 20)
var i;
var somaPar = 0;
var somaImpar = 0;

for (i = 1; i <= 20; i++) {
  if ((i ** 2) % 2 == 0) {
    somaPar += (i ** 2)
  } else {
    somaImpar += (i ** 2)
  };
}

log(somaPar)
log(somaImpar)

// Implementar os comandos de decisão para verificar números quadrados pares ou ímpares