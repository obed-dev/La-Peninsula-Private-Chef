
// Burger Menu

$(document).ready(function burgerMenu() {
   

    $('.nav-menu').hide();
    $('.navbar-toggler').click( function () {
    
      
               $('.nav-menu').toggle(500);
         
        });


});




$(document).ready(function() {
    let currentIndex = 1; // Inicia con la segunda imagen para que la primera esté en el centro
    let slideWidth = $('.slide').width();

    $('#nextBtn').click(function() {
        currentIndex++;
        updateCarousel();
    });

    $('#prevBtn').click(function() {
        currentIndex--;
        updateCarousel();
    });

    function updateCarousel() {
        let translateValue = -currentIndex * slideWidth;
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

  
  $(window).scroll(function() {
    var scrollPosition = $(this).scrollTop();

    // Adjust the value (100 in this case) to control when the button appears
    if (scrollPosition > 100) {
      $("#desplazarse-hacia-arriba").fadeIn();
    } else {
      $("#desplazarse-hacia-arriba").fadeOut();
    }
  });


  //scroll events menu main nav-bar
  $(document).ready(function() {
    $("#main").click(function(e) {

      e.preventDefault();
    
      let destino = $(".container-chef");
      let destinoPosicion = destino.offset().top;

      $("html, body").animate({
        scrollTop: destinoPosicion
      }, 300 );
    });

    $("#about").click(function(e) {

      e.preventDefault();
    
      let destino = $(".services-container");
      let destinoPosicion = destino.offset().top;

      $("html, body").animate({
        scrollTop: destinoPosicion
      }, 300 );
    });

    $("#services").click(function(e) {

      e.preventDefault();
    
      let destino = $(".reserva");
      let destinoPosicion = destino.offset().top;

      $("html, body").animate({
        scrollTop: destinoPosicion
      }, 300 );
    });
    

    $("#contact").click(function(e) {

      e.preventDefault();
    
      let destino = $(".info-container");
      let destinoPosicion = destino.offset().top;

      $("html, body").animate({
        scrollTop: destinoPosicion
      }, 300 );
    });

    
    });


    //burger menu links
    $(document).ready(function() {
      $("#home").click(function(e) {
  
        e.preventDefault();
      
        let destino = $(".container-chef");
        let destinoPosicion = destino.offset().top;
  
        $("html, body").animate({
          scrollTop: destinoPosicion
        }, 300 );
      });
  
      $("#products").click(function(e) {
  
        e.preventDefault();
      
        let destino = $(".services-container");
        let destinoPosicion = destino.offset().top;
  
        $("html, body").animate({
          scrollTop: destinoPosicion
        }, 300 );
      });
  
      $("#service-burger-menu").click(function(e) {
  
        e.preventDefault();
      
        let destino = $(".reserva");
        let destinoPosicion = destino.offset().top;
  
        $("html, body").animate({
          scrollTop: destinoPosicion
        }, 300 );
      });
      
  
      $("#contact-me").click(function(e) {
  
        e.preventDefault();
      
        let destino = $(".info-container");
        let destinoPosicion = destino.offset().top;
  
        $("html, body").animate({
          scrollTop: destinoPosicion
        }, 300 );
      });
  
      
      });











 