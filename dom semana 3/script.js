(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          form.classList.add('was-validated')
        } else {
          inserir()
          form.classList.remove('was-validated')
          form.reset()
        }
        event.preventDefault()
        event.stopPropagation()
      }, false)
    })
})()


function getLocalStorage() {
  return JSON.parse(localStorage.getItem('bd_pendrives')) ?? [];
}

function setLocalStorage(bd_pendrives) {
  localStorage.setItem('bd_pendrives', JSON.stringify(bd_pendrives));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() { // Adaptação da função atualizarTabela (5 pontos)
  limparTabela();
  const bd_pendrives = getLocalStorage();
  let index = 0;
  for (pendrive of bd_pendrives) {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${pendrive.armazenamento}</td>
        <td>${pendrive.quantidade}</td>
        <td>${pendrive.modelo}</td>
        <td>${pendrive.valor}</td>
        <td>${pendrive.marca}</td>
        <td>${pendrive.formato}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `
    document.querySelector('#tabela>tbody').appendChild(novaLinha)
    index++;
  }
}

function inserir() { // Adaptação da função inserir (10 pontos)
  const pendrive = {
    modelo: document.getElementById('modelo').value,
    armazenamento: document.getElementById('armazenamento').value,
    formato: document.getElementById('formato').value,
    valor: document.getElementById('valor').value,
    marca: document.getElementById('marca').value
  }
  const bd_pendrives = getLocalStorage();
  bd_pendrives.push(pendrive);
  setLocalStorage(bd_pendrives);
  atualizarTabela();
}

function excluir(index) { // Adaptação da função excluir (5 pontos)
  const bd_pendrives = getLocalStorage();
  bd_pendrives.splice(index, 1);
  setLocalStorage(bd_pendrives);
  atualizarTabela();
}

function validarQuantidade() { // Adaptação da função validar (10 pontos)
  if (quantidade.value > 20) {
    console.log("Maior que 20")
    quantidade.setCustomValidity("A quantidade nao pode ser maior que 20");
    feedbackQuantidade.innerText = "A quantidade nao pode ser maior que 20";
  } else {
    quantidade.setCustomValidity("");
    feedbackQuantidade.innerText = "Informe a quantidade corretamente";
  }
  return true;
}

atualizarTabela();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const quantidade = document.getElementById("quantidade");
const feedbackQuantidade = document.getElementById("feedbackQuantidade");
quantidade.addEventListener('input', validarQuantidade);