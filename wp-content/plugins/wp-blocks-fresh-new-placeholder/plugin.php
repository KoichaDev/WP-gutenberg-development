<?php
/**
 * Plugin Name:       Block Placeholder
 * Description:       Add description test...
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Khoi Hoang
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       team-members
 *
 * @package           blocks-placeholder
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function blocks_course_placeholder_init() {
	register_block_type_from_metadata( __DIR__);
}
add_action( 'init', 'blocks_course_placeholder_init' );
