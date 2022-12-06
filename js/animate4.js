var ceja = document.querySelector(".ceja");
var circulo = document.querySelector(".circulo4")

circulo.addEventListener("click", personaje1f)

function personaje1f (){ 
    
    ceja.classList.add("movimiento-ceja");
    circulo.classList.add("oculto-lorelei")
    
}