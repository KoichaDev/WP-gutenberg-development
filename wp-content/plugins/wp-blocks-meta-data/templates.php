<?php

function block_course_plugin_register_template() {
    $post_type_object = get_post_type_object( 'post' );
    $post_type_object -> template = [
        ['blocks-course/meta-data']
    ];
}

add_action( 'init', 'block_course_plugin_register_template');