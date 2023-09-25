const prompt = require("prompt-sync")();

// Leia os três números
const numero1 = parseFloat(prompt("Digite o primeiro número: "));
const numero2 = parseFloat(prompt("Digite o segundo número: "));
const numero3 = parseFloat(prompt("Digite o terceiro número: "));
// Calcule a soma e a média
const soma = numero1 + numero2 + numero3;
const media = soma / 3;
// Mostre na tela o valor da soma e média
console.log(`A soma dos números é: ${soma}`);
console.log(`A média dos números é: ${media}`);


