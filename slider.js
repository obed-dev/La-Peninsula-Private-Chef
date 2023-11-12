$(document).ready(function() {
    var currentIndex = 1; // Inicia con la segunda imagen para que la primera esté en el centro
    var slideWidth = $('.slide').width();

    $('#nextBtn').click(function() {
        currentIndex++;
        updateCarousel();
    });

    $('#prevBtn').click(function() {
        currentIndex--;
        updateCarousel();
    });

    function updateCarousel() {
        var translateValue = -currentIndex * slideWidth;
        $('.carousel').css('transform', 'translateX(' + translateValue + 'px)');
    }
});


// boton para desplazarse
$(document).ready(function() {
    $("#desplazarse-hacia-arriba").click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 300 );
    });
  });