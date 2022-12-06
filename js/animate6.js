var albert = document.querySelector(".circulo6");
var lore = document.querySelector(".burbani");
var loree = document.querySelector(".caminadoalbert");

albert.addEventListener("click", circulo)

function circulo (){ 
    lore.classList.remove("oculto-lorelei");
    loree.classList.remove("oculto-lorelei");
    albert.classList.add("oculto-lorelei");
    lore.classList.add("moveburb");
    loree.classList.add("albertcaminado");
    
}




