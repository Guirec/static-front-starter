(function ($) {
  $(document).ready(function () {
    // Media queries
    var mqExtraSmall = 480;
    var mqSmall = 768;
    var mqMedium = 992;
    var mqLarge = 1200;

    // Smooth scrolling for anchor links
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });


    // Toggle navigation
    if ($('#header-toggle-navigation').length) {
      $('#header-toggle-navigation').click(function () {
        if (!$('body').hasClass('has-navigation-open')) {
          $(this).attr('aria-expanded', 'true');
          $('body').addClass('has-navigation-open');
        } else {
          $(this).attr('aria-expanded', 'false');
          $('body').removeClass('has-navigation-open');
        }
      });
    }


    // Functions
    // ------------------------------------------------------------------

    function checkWindowWidth() {
      var windowsize = $(window).width();
      return windowsize;
    }
  });
})(jQuery);
