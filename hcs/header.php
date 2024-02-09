<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package hcs
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>

	<?php if ( get_theme_mod( 'gtm_pixel_id' ) ) : ?>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo get_theme_mod( 'gtm_pixel_id' ); ?>"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', '<?php echo get_theme_mod( 'gtm_pixel_id' ); ?>');
	</script>
  <!-- End Google Analytics -->
  <?php endif; ?>

  <?php if ( get_theme_mod( 'facebook_pixel_id' ) ) : ?>
  <!-- Facebook Pixel Code -->
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '<?php echo get_theme_mod( 'facebook_pixel_id' ); ?>');
    fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=<?php echo get_theme_mod( 'facebook_pixel_id' ); ?>&ev=PageView&noscript=1"
  /></noscript>
  <!-- End Facebook Pixel Code -->
  <?php endif; ?>
</head>

<body <?php body_class(); ?>>
<?php if ( is_front_page() ) : ?>
	<!-- Homepage Modal Pop
	<div class="modal-pop">
		<div class="modal-pop-content">
			<button class="modal-close-button">
				<span>CLOSE</span>
			</button>
			<h1>COVID-19 UPDATE:</h1>
			<hr class="title-hr left">
			<p>
				During this crisis our clinicians at Herriman Counseling want to continue to provide you the services you have been use to helping with your mental health and emotional support needed so you can continue to do what you need to do for your families, jobs and lives  We will keep our clinic open with regular scheduled therapy appointments until further advised. For those of you that are having a difficult time coming in we are offering Telehealth service. This is via phone, computer, laptop ect., all for the same rates and insurance billed as if you were in person visit.

				- Thank you!
			</p>
		</div>
	</div>
	End Homepage Modal Pop -->
<?php endif; ?>
<!-- MOBILE MENU -->
<div class="mobile-menu-container">
	<div class="mobile-menu-header">
		<?php the_custom_logo(); ?>
		<button id="mobile-close-button" class="mobile-close-button">
			<span>CLOSE</span>
		</button>
	</div>
	<?php
	wp_nav_menu( array(
		'theme_location' => 'menu-1',
		'menu_id'        => 'mobile-menu'
	) );
	?>
</div>
<!-- END MOBILE MENU -->
<!-- page -->
<div id="page" class="site">
	<!-- header -->
	<header id="masthead" class="site-header">
		<!-- logo -->
		<div class="site-branding">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			else :
				?>
				<?php
			endif;
			$hcs_description = get_bloginfo( 'description', 'display' );
			if ( $hcs_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $hcs_description; /* WPCS: xss ok. */ ?></p>
			<?php endif; ?>
		</div>
		<!-- end logo -->
		<!-- MOBILE MENU TOGGLE -->
    <div class="mobile-menu-toggle-container">
      <button id="mobile-menu-toggle" class="mobile-menu-toggle">
          <span>MENU</span>
        </button>
    </div>
    <!-- END MOBILE MENU TOGGLE -->
		<!-- main nav -->
		<?php
		wp_nav_menu( 
			array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',
				'container_class' => 'primary-menu-container',
			) 
		);
		?>
		<!-- end main nav -->
	</header>
	<!-- end header -->
	<!-- page transition -->
	<div class="page-transition-overlay"></div>
	<div class="page-transition-wrapper">
	<!-- content -->
	<div id="content" class="site-content transition-enter">
