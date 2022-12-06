var albert = document.querySelector(".circulo6");

var loree = document.querySelector(".caminadoalbert2");

var loreee = document.querySelector(".albertder");
albert.addEventListener("click", circulo)

function circulo (){ 
   
    loree.classList.remove("oculto-lorelei");
    albert.classList.add("oculto-lorelei");
    
    loree.classList.add("albertcaminado2");

    setTimeout (function(){
    loree.classList.add("oculto-lorelei")
    loreee.classList.remove("oculto-lorelei")
    
    },500*6)
}
    
    
