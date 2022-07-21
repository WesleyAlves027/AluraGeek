/// Selecionando o elemento html ////
let containerBanner = document.querySelector('.banner')
let containerProdutos = document.querySelector(".container__produtos")
let containerLogin = document.querySelector(".container__login")

/// evento de click login
let btnLogin = document.querySelector('.cabecalho__botao-login')

btnLogin.addEventListener("click", function(){

    btnLogin.classList.add("ocultar")
    containerLogin.classList.remove("ocultar")
    containerProdutos.classList.add("ocultar")
    containerBanner.classList.add("ocultar")
});

// evento click Iniciar Sessão ///
let btnEntrar = document.querySelector('.form__login__button__entrar')
let tituloPrincipal = document.querySelector('.container__adm');
let containerMangas = document.querySelector('.container__mangas');
let containerConsoles = document.querySelector('.container__consoles');
let containerDiversos = document.querySelector('.container__diversos');

let tituloManga = document.querySelector('#titulo__manga')
let tituloConsole = document.querySelector('#titulo__console')
let tituloDiversos = document.querySelector('#titulo__diversos')


btnEntrar.addEventListener('click', function(){
    mostrarEditarProduto()
    containerLogin.classList.add("ocultar");

    containerMangas.removeChild(tituloManga);
    containerConsoles.removeChild(tituloConsole);
    containerDiversos.removeChild(tituloDiversos);

    containerProdutos.classList.remove("ocultar");
    tituloPrincipal.classList.remove("ocultar");

});
