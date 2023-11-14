(function() {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
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
  for (cliente of bd_pendrives) {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${cliente.nome}</td>
        <td>${cliente.email}</td>
        <td>${cliente.celular}</td>
        <td>${cliente.estado}</td>
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

function validarCelular() { // Adaptação da função validar (10 pontos)
  const bd_pendrives = getLocalStorage();
  for (cliente of bd_pendrives) {
    if (celular.value == cliente.celular) {
      celular.setCustomValidity("Este número de celular já existe!");
      feedbackCelular.innerText = "Este número de celular já existe!";
      return false;
    } else {
      celular.setCustomValidity("");
      feedbackCelular.innerText = "Informe o celular corretamente.";
    }
  }
  return true;
}

atualizarTabela();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const celular = document.getElementById("celular");
const feedbackCelular = document.getElementById("feedbackCelular");
celular.addEventListener('input', validarCelular);