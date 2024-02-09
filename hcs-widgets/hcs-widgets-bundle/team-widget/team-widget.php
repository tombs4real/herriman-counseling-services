<?php
/*
Widget Name: HCS Team Widget
Description: Display your team on any page.
Author: James Tombs
Author URI: https://umc.utah.edu
*/

class HCS_Team_Widget extends SiteOrigin_Widget {


	function __construct() {

		// ENQUEUE ADMIN STYLES & SCRIPTS
    add_action('admin_enqueue_scripts', array($this, 'admin_enqueue_scripts') );
    add_action('admin_enqueue_scripts', array($this, 'admin_register_scripts') );

		parent::__construct(
			'hcs-team-widget',
			__('Team Widget', 'team-widget-text-domain'),
			array(
				'description' => __('Display your team on any page.', 'team-widget-text-domain'),
				'panels_icon' => 'hcs-so-widget-icon',
			),
			array(

			),
			array(
				// FIELDS
			),
			plugin_dir_path(__FILE__)
		);

	}

	// / ENQUEUE ADMIN STYLES & SCRIPTS
	public function admin_enqueue_scripts()
	{
			wp_enqueue_style(
				'siteorigin-widgets-manage-admin', 
				plugin_dir_url(__FILE__) . 'admin/admin.css', 
				array(), 
				time(),
				true
			);
	}

	public function admin_register_scripts()
	{
			wp_register_style(
					'team-widget-admin-css',
					plugin_dir_url(__FILE__) . 'admin/admin.css'
			);
	}


	function get_template_name($instance) {
		return 'team-widget-template';
	}


	function initialize() {
		$this->register_frontend_scripts(
	        array(
	            array( 'team-widget-js',
	            	plugin_dir_url(__FILE__) . 'js/team-widget.js',
	            	array( 'jquery' ),
	            	 time(),
	            	 true
	            	)
	        )
	    );
		$this->register_frontend_styles(
			array(
				array(
					'team-widget-css',
					plugin_dir_url(__FILE__) . 'css/team-widget.css',
					array(),
					time()
				),
			)
		);

	}

}

siteorigin_widget_register('hcs-team-widget', __FILE__, 'HCS_Team_Widget');

