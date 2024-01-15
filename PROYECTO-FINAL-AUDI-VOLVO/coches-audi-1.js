let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
}

showSlides();

function plusSlides(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


//-------------------------------------------------------------------------


// Muestra el botón cuando se desplaza hacia abajo 20px desde la parte superior de la página
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("cta").style.display = "block";
    } else {
        document.getElementById("cta").style.display = "none";
    }
}

// Función para ir al principio de la página
function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para otros navegadores
}

