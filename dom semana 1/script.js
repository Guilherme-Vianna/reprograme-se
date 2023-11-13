// Selecionar todos elementos da classe 'produto_preco'
var table = document.getElementById("tabela_produtos")
var products = table.getElementsByClassName("produto_preco");
var total = 0

// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)
for (var i = 0; i < products.length; i++) {
  total += parseFloat(products[i].innerText)
}
// Escrever no conteúdo da página o valor da soma 
document.write("Total: R$" + total.toString())