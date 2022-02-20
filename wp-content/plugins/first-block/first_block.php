<?php
/** 
 * Plugin Name: First Block
 * Plugin URI: http://www.example.com/
 * Description: This is my first block.
 * Author: Khoi Hoang
 * Author URI: http://www.example.com/
*/

function block_course_firstblock_init() {
    register_block_type_from_metadata( __DIR__ );
}

add_action( "init", "block_course_firstblock_init" );