var $window = jQuery(window);
$window.load(function() {
  function checkWidth() {
    var $windowsize = $window.width();
    var $teams = jQuery('.hcs-team-widget-container');
    if ($windowsize < 900) {
      $teams.addClass('owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        responsive:{
          0: {
            items:1,
            stagePadding:100
          },
          600: {
            items:2,
            stagePadding:50
          }
          
        }
      });

    }
    else if ($windowsize >= 900){
      $teams.removeClass('owl-carousel').trigger('destroy.owl.carousel');
    }
  }

    // ADD ARIA LABELS TO OWLS
  jQuery('.owl-carousel.hcs-team-widget-container').each(function() {
    jQuery(this).find('.owl-dot').each(function(index) {
      jQuery(this).attr('aria-label', index + 1);
    });
  });

  // CHECK WINDOW WIDTH ON RESIZE
  checkWidth();
  $window.resize(checkWidth);

});
