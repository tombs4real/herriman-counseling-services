
// OnLoad Run Init
window.onload = function(){ init(); };


// Init
function init() {

  // Mobile Menu Toggle
  let $mobile_menu = jQuery('.mobile-menu-container');
  let $mobile_toggle = jQuery('#mobile-menu-toggle');
  let $mobile_close_btn = jQuery('#mobile-close-button');
  let $page_overlay = jQuery('#page-overlay');
  let $mobile_menu_sub = jQuery('.mobile-menu-container #mobile-menu li.menu-item-has-children');

  // Toggle Mobile Menu on Click
  $mobile_toggle.on('click', function() {
    $mobile_menu.toggleClass('menu-open');
    $page_overlay.toggleClass('menu-open');
  });
  // Close Menu on Click
  $mobile_close_btn.on('click', function() {
    $mobile_menu.removeClass('menu-open');
    $page_overlay.removeClass('menu-open');
  });
  // Close Menu on Page Overlay Click
  jQuery('#page-overlay.menu-open').on('click', function() {
    $mobile_menu.removeClass('menu-open');
    $page_overlay.removeClass('menu-open');
  });
  // Toggle Mobile Menu on Click
  $mobile_menu_sub.on('click', function() {
    jQuery(this).find('.sub-menu').toggle();
  });

  // Modal Close Button
  let $modal_close_btn = jQuery('.modal-close-button');
  let $modal = jQuery('.modal-pop');

  $modal_close_btn.on('click', function() {
    $modal.hide();
  });

  let $pageOverlay = jQuery('.page-transition-overlay');
  let $menuItem = jQuery('#primary-menu a, .custom-logo-link');
  let $content = jQuery('#content');

  $content.addClass('transition-enter-active');
  $pageOverlay.removeClass('swiping-in');
  $pageOverlay.addClass('swiping-out');

  setTimeout(function(){
    $pageOverlay.removeClass('swiping-out');
  }, 50);

  $menuItem.on('click', function(event) {

    let url = jQuery(this).attr('href');

    event.preventDefault();

    if (url === '#') {

    } else {
      $pageOverlay.addClass('swiping-in');
      $content.removeClass('transition-enter transition-enter-active');
      $content.addClass('transition-exit');
      setTimeout(function(){
        $content.addClass('transition-exit-active');
      }, 50);
      window.setTimeout(function(){document.location.href=url;}, 50);
    }
    

  });

  // Vimeo API
  if ( jQuery( "#video-marquee" ).length ) {
    // Video Options
    let vid_options = {
      id: 568437986, //392536240,
      background: true,
      autoplay: true,
      loop: true,
      muted: true,
    };
    // Create New Video
    let vid = new Vimeo.Player('video-marquee', vid_options);

    // On Video Play
    vid.on('play', function() {
      console.log('Played the video');
    });
  }



} // End Init
