<?php
/**
 * Plugin Name:       Block for managing Meta data
 * Description:       Demo of managing data as an example
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Khoi Hoang
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-meta-data
 *
 * @package           block-meta-data
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

 
function block_course_register_meta() {
	
	register_meta( 'post', '_block_course_post_subtitle', [
		'single' 			=>	true,
		'type'	 			=> 'string', // which data type the meta-key field will be
		'show_in_rest' 		=> true, // behind the scene, WP is using a REST-api to get the data
		'sanitize_callback'	=> 'sanitize_text_field', // sanitize the data before sending the data to the server
		'auth_callback'		=> function() {
			return current_user_can( 'edit_posts' );
		}
	]);
}

add_action( 'init', 'block_course_register_meta');


function blocks_course_meta_data_init() {
	register_block_type_from_metadata( __DIR__);
}
add_action( 'init', 'blocks_course_meta_data_init' );
