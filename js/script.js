let menu = document.getElementById("menu_links");
let menu_barras = document.getElementById("menu_barras");
let minus = document.getElementById("minus");
let recursos = document.getElementById("recursos");

let images = Array.from(document.getElementsByClassName("imgCarousel"));
let mainPhoto = document.getElementById("mainPhoto");

function mostrarMenu() {
    /* verificando a situacao do display menu */
    if (window.getComputedStyle(menu).display == "none") {

        menu.style.display = "initial"
        menu_barras.setAttribute("aria-label", "fechar menu")
        menu_barras.setAttribute("aria-expanded", "true")



    } else {
        menu.style.display = "none"
        menu_barras.setAttribute("aria-label", "abrir menu")
        menu_barras.setAttribute("aria-expanded", "false")
    }
};

function mostrarMinus() {
    if (window.getComputedStyle(recursos).display == "none") {

        recursos.style.display = "initial"
        minus.setAttribute("aria-label", "Esconder Recursos")
        minus.setAttribute("aria-expanded", "true")
    } else {
        recursos.style.display = "none"
        minus.setAttribute("aria-label", "Mostrar Recursos")
        minus.setAttribute("aria-expanded", "false")
    }
};



function mudarImagem(event) {
    let image = event.target;
    mainPhoto.src = image.src
};

images.forEach(function(image) {
    image.addEventListener("click", mudarImagem);
});