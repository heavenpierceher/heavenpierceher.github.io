var albert = document.querySelector(".circulo18");
var lore = document.querySelector(".voces");

albert.addEventListener("click", personaje1f)

function personaje1f (){ 
    lore.classList.remove("oculto-lorelei");
    albert.classList.add("oculto-lorelei")
    lore.classList.add("letras");
    
}