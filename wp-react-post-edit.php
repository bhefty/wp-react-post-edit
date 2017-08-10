<?php

/*
* Plugin Name: WP React Post Edit
* Description: WordPress plugin that allows you to edit the 5 most recent posts
* Author:      Bill Hefty
* Author URL:  https://www.billhefty.com
*/

class WP_React_Post_Edit {

  static function admin_enqueue_scripts() {
    wp_enqueue_script( 'wp-react-post-edit-admin', plugins_url( 'build/admin.js', __FILE__ ), array(), 'v0.0.1', true );
  }

  static function add_admin_page() {
    add_menu_page(
      'WP React Post Edit',
      'Post Editor',
      'manage_options',
      'wp-react-post-editor',
      array( 'WP_React_Post_Edit', 'render_editor' )
    );
  }

  static function render_editor() {
    echo '<div id="wp-react-post-editor"></div>';
  }

}

add_action( 'wp_equeue_scripts', array( 'WP_React_Post_Edit', 'enqueue_scripts' ) );
add_action( 'admin_enqueue_scripts', array( 'WP_React_Post_Edit', 'admin_enqueue_scripts' ) );
add_action( 'admin_menu', array( 'WP_React_Post_Edit', 'add_admin_page' ) );
