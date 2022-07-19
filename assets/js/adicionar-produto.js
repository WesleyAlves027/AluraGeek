let btnAdicProduto = document.querySelector('.adm__topo__button__adicionarProduto')
let containerAdicProduto = document.querySelector('.container__adicionarProduto')
let btnMenuAdm = document.querySelector('.cabecalho__botao__menuAdm')

btnAdicProduto.addEventListener("click", function(){
    containerAdicProduto.classList.remove('ocultar')
    containerProdutos.classList.add("ocultar");

    btnMenuAdm.classList.remove('ocultar')
});

btnMenuAdm.addEventListener("click", function(){
    containerAdicProduto.classList.add('ocultar')
    containerProdutos.classList.remove("ocultar");

    btnMenuAdm.classList.add('ocultar')
});
