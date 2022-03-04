<?php
/**
 * Plugin Name:       Data Store Demo
 * Description:       Example of retrieving information and dispatching actions to the block editor's data store.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ali Alaa
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       data-store-demo
 *
 * @package           blocks-course
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function blocks_course_data_store_demo_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'blocks_course_data_store_demo_block_init' );
