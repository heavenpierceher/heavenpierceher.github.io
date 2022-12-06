var cejas = document.querySelector(".cejas");
var circulo = document.querySelector(".circulo16")
var sonido = document.querySelector(".perturbado")

circulo.addEventListener("click", personaje1f)

function personaje1f (){ 
    
    cejas.classList.add("movimiento-cejas");
    circulo.classList.add("oculto-lorelei")
    sonido.classList.add(".perturbado")
    
}