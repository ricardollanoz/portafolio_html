// Manda un mensaje de bienvenida al cargar la página
window.onload = function() {
        alert("¡Bienvenido a mi portafolio, soy Ricardo Llanos!"); 
    }

// Menu hamburguesa para móvil
function hiddenHamburguer() {
    var btn = document.getElementById("btn-show");
    var nav = document.getElementById("nav-menu"); 
    nav.classList.toggle("active");
    if (nav.classList.contains("active")) {
        btn.innerText = "✕ Ocultar menu";
    } else {
        btn.innerText = "≡ Desplegar menu";
    }
}



