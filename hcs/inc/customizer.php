<?php
/**
 * hcs Theme Customizer
 *
 * @package hcs
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function hcs_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial( 'blogname', array(
			'selector'        => '.site-title a',
			'render_callback' => 'hcs_customize_partial_blogname',
		) );
		$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
			'selector'        => '.site-description',
			'render_callback' => 'hcs_customize_partial_blogdescription',
		) );
	}


	// Tracking Pixels
	$wp_customize->add_section(
		'tracking-pixels',
		array(
			'title' => __( 'Tracking Pixels', 'tc1' ),
			'priority' => 30,
			'description' => __( 'Tracking Pixels', 'tc1' )
		)
	);
	// GTM Pixel ID
	$wp_customize->add_setting('gtm_pixel_id', array( 'default' => '' ));
	$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'gtm_pixel_id', array( 'label' => __( 'Google Tag Manager Pixel Id', 'tc1' ), 'section' => 'tracking-pixels', 'settings' => 'gtm_pixel_id', ) ) );
	// Facebook Pixel ID
	$wp_customize->add_setting('facebook_pixel_id', array( 'default' => '' ));
	$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'facebook_pixel_id', array( 'label' => __( 'Facebook Pixel Id', 'tc1' ), 'section' => 'tracking-pixels', 'settings' => 'facebook_pixel_id', ) ) );


	// Footer
	$wp_customize->add_section(
		'footer',
		array(
			'title' => __( 'Footer Settings', 'tc1' ),
			'priority' => 30,
			'description' => __( 'Footer Settings', 'tc1' )
		)
	);

	// Footer Address
	$wp_customize->add_setting('footer-address', array( 'default' => '' ));
	$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'footer-address', array( 'label' => __( 'Footer Address', 'tc1' ), 'type' => 'textarea', 'section' => 'footer', 'settings' => 'footer-address', ) ) );

	// Footer Phone
	$wp_customize->add_setting('footer-phone', array( 'default' => '' ));
	$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'footer-phone', array( 'label' => __( 'Footer Phone Number', 'tc1' ), 'type' => 'text', 'section' => 'footer', 'settings' => 'footer-phone', ) ) );

	// Footer Legal
	$wp_customize->add_setting('footer-legal', array( 'default' => '' ));
	$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'footer-legal', array( 'label' => __( 'Footer Legal', 'tc1' ), 'type' => 'textarea', 'section' => 'footer', 'settings' => 'footer-legal', ) ) );


	// Add Social Media Section
	$wp_customize->add_section(
		'social-media',
		array(
			'title' => __( 'Social Media Links', 'tc1' ),
			'priority' => 30,
			'description' => __( 'Enter your social media URLs', 'tc1' )
		)
	);

	// Add URL Field Settings for each Social Media
	$wp_customize->add_setting('twitter', array( 'default' => '' ));
	$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'twitter', array( 'label' => __( 'Twitter', 'tc1' ), 'section' => 'social-media', 'settings' => 'twitter', ) ) );

	$wp_customize->add_setting('facebook', array( 'default' => '' ));
	$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'facebook', array( 'label' => __( 'Facebook', 'tc1' ), 'section' => 'social-media', 'settings' => 'facebook', ) ) );

	$wp_customize->add_setting('instagram', array( 'default' => '' ));
	$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'intagram', array( 'label' => __( 'Instagram', 'tc1' ), 'section' => 'social-media', 'settings' => 'instagram', ) ) );

	$wp_customize->add_setting('youtube', array( 'default' => '' ));
	$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'youtube', array( 'label' => __( 'YouTube', 'tc1' ), 'section' => 'social-media', 'settings' => 'youtube', ) ) );

	$wp_customize->add_setting('pintrest', array( 'default' => '' ));
	$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'pintrest', array( 'label' => __( 'Pintrest', 'tc1' ), 'section' => 'social-media', 'settings' => 'pintrest', ) ) );

	$wp_customize->add_setting('linkedin', array( 'default' => '' ));
	$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'linkedin', array( 'label' => __( 'LinkedIn', 'tc1' ), 'section' => 'social-media', 'settings' => 'linkedin', ) ) );




}
add_action( 'customize_register', 'hcs_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function hcs_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function hcs_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function hcs_customize_preview_js() {
	wp_enqueue_script( 'hcs-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'hcs_customize_preview_js' );
