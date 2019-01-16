(function(){
  'use strict';

  new WOW().init();

})();

// Initialise FlexSlider for Carousels
$(window).load(function() {
    $('.flexslider').flexslider({
    animation: "fade",
    slideshow: false,
    directionNav: true,
    animationSpeed: 600,
    touch: true
    });
});
