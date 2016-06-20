(function ($) {
  $(document).ready(function () {
    // Media queries
    var mqExtraSmall = 480;
    var mqSmall = 768;
    var mqMedium = 992;
    var mqLarge = 1200;

    // Smooth scrolling for anchor links
    $('a[href*="#"]:not([href="#"],[data-toggle],[data-slide])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });

    // Functions
    // ------------------------------------------------------------------

    function checkWindowWidth() {
      var windowsize = $(window).width();
      return windowsize;
    }
  });
})(jQuery);
