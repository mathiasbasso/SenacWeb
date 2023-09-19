/*const leia  = document.querySelector("h1");
leia.textContent = "Olá mundo";

let nomePessoa = "Jorge";
console.log(nomePessoa);
    if(nomePessoa == "Mathias"){
        alert("show, esse é o nome mesmo")
    }else{
        alert("nem sei, nem conheço, eu só conheço o "+ nomePessoa)
    }


//multiplicação
function multiplicação(valor1, valor2){
    let resultado = valor1*valor2;
        return resultado;
}
//divisao
function divisão(valor1, valor2){
    let resultado = valor1/valor2;
        return resultado;
}
console.log(multiplicação(2,5));
console.log(divisão(100, 5));

document.querySelector("html").addEventListener("click", function(){
    alert("Opa voce acabou de clicar na tela")
});*/

//MANIPULANDO A IMAGEM DA PAGINA
let imagem = document.querySelector('img');
imagem.onclick = function(){
    let imagemAtual = imagem.getAttribute('src');
    if(imagemAtual == 'imagens/firefox-icon.png'){
        imagem.setAttribute('src', 'imagens/firefox2.png');
    }else{
        imagem.setAttribute('src', 'imagens/firefox-icon.png');
    }
}

//MANIPULANDO O NOME DO USUARIO
let novoTitulo = document.querySelector('h1');
let nomePessoa = document.querySelector('button');
function setaNomePessoaNaTela(){
    let meuNome = prompt('Por favor digite o seu nome')
    if(!meuNome){
        setaNomePessoaNaTela();
    }else{
        localStorage.setItem('name', meuNome);
        novoTitulo.innerHTML = 'Mozilla é legal, '+ meuNome;
    }
}
if (!localStorage.getItem('name')){
    setaNomePessoaNaTela();
}else{
    let storageName = localStorage.getItem('name');
    novoTitulo.innerHTML = 'Mozilla é legal, '+ storageName;
}
nomePessoa.onclick = function(){
    setaNomePessoaNaTela();
}