
function mostrarEditarProduto(){
let produtosManga = document.querySelector(".produto__manga").children

    for (let i=0; i < produtosManga.length; i++) {
        produtosManga[i].querySelector(".menu__editar__produto").classList.remove("ocultar");
    }

let produtosConsole = document.querySelector(".produto__console").children

    for (let i=0; i < produtosConsole.length; i++) {
        produtosConsole[i].querySelector(".menu__editar__produto").classList.remove("ocultar");
    }

let produtosDiversos = document.querySelector(".produto__diversos").children

    for (let i=0; i < produtosDiversos.length; i++) {
        produtosDiversos[i].querySelector(".menu__editar__produto").classList.remove("ocultar");
    }
}



