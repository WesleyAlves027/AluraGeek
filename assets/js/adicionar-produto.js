let btnAdicProdutoTopo = document.querySelector('.adm__topo__button__adicionarProduto')
let containerAdicProduto = document.querySelector('.container__adicionarProduto')
let btnMenuAdm = document.querySelector('.cabecalho__botao__menuAdm')
let btnAdicionarProdutoEnviar = document.querySelector('.form__adicionarProduto__enviar')

btnAdicProdutoTopo.addEventListener("click", function(){
    containerAdicProduto.classList.remove('ocultar')
    containerProdutos.classList.add("ocultar");

    btnMenuAdm.classList.remove('ocultar')
});

btnMenuAdm.addEventListener("click", function(){
    containerAdicProduto.classList.add('ocultar')
    containerProdutos.classList.remove("ocultar");

    btnMenuAdm.classList.add('ocultar')
});

btnAdicionarProdutoEnviar.addEventListener("click", function(){
    containerAdicProduto.classList.add('ocultar')
    containerProdutos.classList.remove("ocultar");

    btnMenuAdm.classList.add('ocultar')

    setTimeout(() => {
        alert("Produto Adicionado a loja");
      }, "1000")

    setTimeout(exibeMensagemProdutoAdicionado(),5000)  
});