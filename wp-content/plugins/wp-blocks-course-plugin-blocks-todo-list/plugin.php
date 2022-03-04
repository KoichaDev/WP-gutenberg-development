<?php
/**
 * Plugin Name:       Todo Block List
 * Description:       Display Todo Block List
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Khoi Hoang
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       latest-posts
 *
 * @package           Blocks course
 */


 function blocks_course_render_todo_list_block ($attributes) {
	 return null;
 }
 
function blocks_course_todos_list_block_init() {
	register_block_type_from_metadata( __DIR__, [
		'render_callback' => 'blocks_course_render_todo_list_block',
	] );
}
add_action( 'init', 'blocks_course_todos_list_block_init' );
