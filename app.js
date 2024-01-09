
// Burger Menu

$(document).ready(function burgerMenu() {
   

    $('.nav-menu').hide();
    $('.navbar-toggler').click( function () {
    
      
               $('.nav-menu').toggle(500);
         
        });


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
    let scrollPosition = $(this).scrollTop();

    if (scrollPosition > 100) {
      $("#desplazarse-hacia-arriba").fadeIn();
    } else {
      $("#desplazarse-hacia-arriba").fadeOut();
    }
  });

  //funcion para crear el nav transparente 

  $(window).scroll(function(){
    let header = $("header");
    header.toggleClass("abajo", $(this).scrollTop() > 0);
   
    

});

$(document).ready(function() {
    
   
    window.sr = ScrollReveal();
   
   


      sr.reveal (".container-chef" , {   
        duration: 2500,
        origin: "bottom",
        distance: '400px'

    
      } ) 

      sr.reveal (".reserva" , {   
        duration: 3000,
        origin: "left",
        distance: '400px'

    
      } ) 
      sr.reveal (".secondary-cards" , {   
        duration: 3500,
        origin: "bottom",
        distance: '400px'

    
      } ) 

      sr.reveal ("iframe" , {   
        duration: 2000,
        origin: "bottom",
        distance: '400px'

    
      } ) 

      
      sr.reveal (".info-container" , {   
        duration: 2500,
        origin: "left",
        distance: '400px'

    
      } ) 

      
      sr.reveal (".contenedor" , {   
        duration: 2500,
        origin: "bottom",
        distance: '400px'

    
      } )
});



  //scroll events menu main nav-bar
  $(document).ready(function() {
    $("#main").click(function(e) {

      e.preventDefault();
    
      let destino = $(".container-chef");
      let destinoPosicion = destino.offset().top;
    
      let posicionAjustada = destinoPosicion - 120;

      $("html, body").animate({
        scrollTop: posicionAjustada
      }, 300 );
    });

    $("#about").click(function(e) {

      e.preventDefault();
    
      let destino = $(".services-container");
      let destinoPosicion = destino.offset().top;
      let posicionAjustada = destinoPosicion - 120;

      $("html, body").animate({
        scrollTop: posicionAjustada
      }, 300 );
    });

    $("#services").click(function(e) {

      e.preventDefault();
    
      let destino = $(".reserva");
      let destinoPosicion = destino.offset().top;
      let posicionAjustada = destinoPosicion - 130;

      $("html, body").animate({
        scrollTop: posicionAjustada
      }, 300 );
    });
    

    $("#contact").click(function(e) {

      e.preventDefault();
    
      let destino = $(".info-container");
      let destinoPosicion = destino.offset().top;
      let posicionAjustada = destinoPosicion - 200;

      $("html, body").animate({
        scrollTop: posicionAjustada
      }, 300 );
    });

    
    });


    //burger menu links
    $(document).ready(function() {
      $("#home").click(function(e) {
  
        e.preventDefault();
      
        let destino = $(".container-chef");
        let destinoPosicion = destino.offset().top;
        let posicionAjustada = destinoPosicion - 120;

        $("html, body").animate({
          scrollTop: posicionAjustada
        }, 300 );

        $('.nav-menu').hide();
      });
  
      $("#products").click(function(e) {
  
        e.preventDefault();
      
        let destino = $(".services-container");
        let destinoPosicion = destino.offset().top;
        let posicionAjustada = destinoPosicion - 120;
  
        $("html, body").animate({
          scrollTop: posicionAjustada 
        }, 300 );
        $('.nav-menu').hide();
      });
  
      $("#service-burger-menu").click(function(e) {
  
        e.preventDefault();
      
        let destino = $(".reserva");
        let destinoPosicion = destino.offset().top;
        let posicionAjustada = destinoPosicion - 125;
  
        $("html, body").animate({
          scrollTop: posicionAjustada
        }, 300 );
        $('.nav-menu').hide();
      });
      
  
      $("#contact-me").click(function(e) {
  
        e.preventDefault();
      
        let destino = $(".info-container");
        let destinoPosicion = destino.offset().top;
        let posicionAjustada = destinoPosicion - 200;
  
        $("html, body").animate({
          scrollTop: posicionAjustada
        }, 300 );
        $('.nav-menu').hide();
      });
  
      
      });

 



    $('.main-btn').click(function (e) {

      e.preventDefault();

       let destino = $('.info-container');
       let destinoPosicion = destino.offset().top;

       let posicionAjustada = destinoPosicion - 200;
     
       $("html, body").animate({
        scrollTop: posicionAjustada
      }, 300 );
      
    });
    



 