//console.log('JS externo funcionou');
//console.log(window);

//alert('Seja bem vindo'); //mensagem para usuário
//let adulto = confirm('Você tem mais de 18 anos?'); //consegue salvar uma variavel, pois possui um retorno;
let nomeUsuario = prompt('Qual seu nome?'); //retorna texto inserido pelo usuário

console.log(nomeUsuario);

let elementHeader = document.querySelector('header .user_name'); //seleciona elemento html

elementHeader.innerText =`Olá, ${nomeUsuario}`; //atribui conteúdo ao elemento selecionado

let logo = document.getElementById('logo');
console.log(logo);

logo.style.color = "orange";