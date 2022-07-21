let mostarMangaOculto = document.querySelector("#produto__mangas__ver-tudo")
let mostarConsolesOculto = document.querySelector("#produto__consoles__ver-tudo")
let mostarDiversosOculto = document.querySelector("#produto__diversos__ver-tudo")


let produtosManga = document.querySelector(".produto__manga").children
let produtosConsole = document.querySelector(".produto__console").children
let produtosDiversos = document.querySelector(".produto__diversos").children


mostarMangaOculto.addEventListener("click", function(){
    produtosManga[4].style.display = "block"
    produtosManga[5].style.display = "block"
});

mostarConsolesOculto.addEventListener("click", function(){
    produtosConsole[4].style.display = "block"
    produtosConsole[5].style.display = "block"
});

mostarDiversosOculto.addEventListener("click", function(){
    produtosDiversos[4].style.display = "block"
    produtosDiversos[5].style.display = "block"
});

