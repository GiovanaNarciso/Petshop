// console.log("Arquivo main.js está sendo executado!");

// console.log(document);

// let dadosForm = document.querySelector('input');
// console.log(dadosForm);

let inputNome = document.querySelector('input');
console.log(inputNome.id);

// alterando conteúdo do título
let dadosForm = document.querySelectorAll('input');
console.log(dadosForm);

// selecionando input email
let tituloPrincipal = document.querySelector('h1');
tituloPrincipal.innerText = 'Faça parte do nosso time'

// adicionando placeholder no input email
let inputEmail = document.querySelector('#email');
inputEmail.setAttribute('placeholder', 'jane@email.com')

let inputCargaHoraria = document.querySelector('#carga-horaria');
// consultar o que está dentro do elemento selecionado no HTML
console.log(inputCargaHoraria.innerHTML)
// adicionando uma opção no select carga horária
// sem o += o inner HTML exclui todas as options anteriores e deixa somente treinee.
inputCargaHoraria.innerHTML += '<option value="Teinee">Trainee</option>';

// alterando style
tituloPrincipal.style.color = 'orange';

let elementoDiv = document.querySelector('div');

// elementoDiv.classList.add('novaClasse');

// elementoDiv.classList.remove('container');