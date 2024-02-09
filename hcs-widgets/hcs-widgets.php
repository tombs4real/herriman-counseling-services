<?php
/*
Plugin Name: Herriman Counseling Widgets.
Description: Herriman Counseling Custom Widgets.
Version: 0.1
Author: James Tombs
Author URI: 
License: GPL3
License URI: https://www.gnu.org/licenses/gpl-3.0.txt
*/

function add_hcs_widgets_collection($folders)
{
    $folders[] = plugin_dir_path(__FILE__).'hcs-widgets-bundle/';
    return $folders;
}
add_filter('siteorigin_widgets_widget_folders', 'add_hcs_widgets_collection');