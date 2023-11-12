$(document).ready(function() {
    let currentIndex = 0;
    let slides = $('.slide');
    let totalSlides = slides.length;

    function showSlide(index) {
        
        slides.hide();

    
        let firstIndex = index % totalSlides;
        let secondIndex = (index + 1) % totalSlides;
        let thirdIndex = (index + 2) % totalSlides;

      
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


    let interval = setInterval(nextSlide, 5000);

    
    $('.slider').hover(function() {
        clearInterval(interval);
    }, function() {
        interval = setInterval(nextSlide, 5000);
    });

   
    showSlide(currentIndex);
});