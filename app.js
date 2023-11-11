
// Burger Menu

$(document).ready(function burgerMenu() {
   

    $('.nav-menu').hide();
    $('.navbar-toggler').click( function () {
    
      
               $('.nav-menu').toggle(500);
         
        });


});
//Image slider 
$(document).ready(function slider () {
   

    let currentIndex = 2;
    let slides = $('slide').length;
    let totalSlides = slides;
    
    function slideShow(index) {
        slides.slice(2).show();
        

        

    };

     




});