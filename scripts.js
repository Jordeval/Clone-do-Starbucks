let imagem = document.querySelector(".imagem-copo")
let circulo = document.querySelector(".circulo")
const botao = document.querySelector(".button")

function trocaImagem(endereco){
    imagem.src = endereco
}

function trocaCor(cor){
    circulo.style.background = cor
}

function redirecionar(pagina) {
    window.open(pagina, '_blank');
}