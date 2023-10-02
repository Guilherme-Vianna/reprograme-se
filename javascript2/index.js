const prompt = require('prompt-sync')();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));
var aposentadoria;
// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar
if (idade >= 65 || tempo >= 30 || idade >= 60 && tempo >= 25) {
  if (tempo > 20) {
    aposentadoria = (salario / 100) * 80;
    if (aposentadoria >= 7087.22) {
      console.log("Seu salario sera: " + 7087.22)
    } else if (aposentadoria <= 1212.00) {
      console.log("Seu salario sera: " + 1212.00)
    } else {
      console.log("Seu salario sera: " + aposentadoria)
    }
  } else {
    aposentadoria = (salario / 100) * 60;
    if (aposentadoria >= 7087.22) {
      console.log("Seu salario sera: " + 7087.22)
    } else if (aposentadoria <= 1212.00) {
      console.log("Seu salario sera: " + 1212.00)
    } else {
      console.log("Seu salario sera: " + aposentadoria)
    }
  }
}
else {
  console.log("Nao pode aposentar")
}
// Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)

// Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)
