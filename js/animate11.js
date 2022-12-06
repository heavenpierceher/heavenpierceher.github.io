var albert = document.querySelector(".circulo11");
var lore = document.querySelectorAll(".fondo");

albert.addEventListener("click", personaje1f)

function personaje1f (){ 
    
    lore.forEach(item => {
        item.classList.remove("oculto-lorelei");
        albert.classList.add("oculto-lorelei")
        item.classList.add("anim-fondo");

    })
    
}
