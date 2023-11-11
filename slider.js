$(document).ready(function() {
    var currentIndex = 0;
    var slides = $('.slide');
    var totalSlides = slides.length;

    function showSlide(index) {
        // Oculta todas las diapositivas
        slides.hide();

        // Calcula los índices de las imágenes a mostrar
        var firstIndex = index % totalSlides;
        var secondIndex = (index + 1) % totalSlides;
        var thirdIndex = (index + 2) % totalSlides;

        // Muestra las tres imágenes
        slides.eq(firstIndex).fadeIn();
        slides.eq(secondIndex).fadeIn();
        slides.eq(thirdIndex).fadeIn();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    // Avanzar automáticamente a la siguiente diapositiva cada 5 segundos (5000 milisegundos)
    var interval = setInterval(nextSlide, 5000);

    // Detener el avance automático cuando se pasa el mouse sobre el carrusel
    $('.slider').hover(function() {
        clearInterval(interval);
    }, function() {
        interval = setInterval(nextSlide, 5000);
    });

    // Mostrar la primera diapositiva al cargar la página
    showSlide(currentIndex);
});