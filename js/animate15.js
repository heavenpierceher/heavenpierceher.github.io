var albert = document.querySelector(".circulo15");
var lore = document.querySelector(".lorelei");

albert.addEventListener("click", personaje1f)

function personaje1f (){ 
    lore.classList.remove("oculto-lorelei");
    albert.classList.add("oculto-lorelei");
    lore.classList.add("opacidad-lorelei");
    
}