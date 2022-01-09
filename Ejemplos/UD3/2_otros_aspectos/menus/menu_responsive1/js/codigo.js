window.addEventListener("load",cargaPagina);

function cargaPagina(){
    document.getElementById("hamburguesa").addEventListener("click", pulsa);
}

function pulsa(){
    document.getElementById("menu-responsive").classList.toggle("responsive");
}