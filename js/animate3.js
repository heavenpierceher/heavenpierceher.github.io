var albert = document.querySelector(".circulo");
var lore = document.querySelector(".burb1");

albert.addEventListener("click", circulo)

function circulo (){ 
    lore.classList.remove("oculto-lorelei");
    albert.classList.add("oculto-lorelei");
    lore.classList.add("burb11");
    
}




var albertt = document.querySelector(".circulo2");
var loree = document.querySelector(".burb2");

albertt.addEventListener("click", circulo2)

function circulo2 (){ 
    loree.classList.remove("oculto-lorelei");
    albertt.classList.add("oculto-lorelei");
    
    loree.classList.add("burb12");
    
}