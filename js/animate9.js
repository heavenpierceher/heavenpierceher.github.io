var albert = document.querySelector(".circulo9");
var lore = document.querySelectorAll(".random2");

albert.addEventListener("click", personaje1f)

function personaje1f (){ 
    
    lore.forEach(item => {
        item.classList.remove("oculto-lorelei");
        albert.classList.add("oculto-lorelei")
        item.classList.add("opacidad-randoms");

    })
    
}

