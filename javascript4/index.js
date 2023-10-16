const prompt = require('prompt-sync')();

alturas = []

for (i = 0; i <= 9; i++) {
  alturas[i] = parseFloat(prompt("Digite uma altura: "));
}

for (i = 0; i <= 9; i++) {
  var x = 0;
  alturas.forEach((altura) => {
    if (alturas[i] > altura) {
      x = x + 1;
    }
  })
  console.log("Aluno " + i + ": é maior que " + x + " aluno(s)")
}



