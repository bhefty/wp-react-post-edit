<?php

/*
* Plugin Name: WP React Post Edit
* Description: WordPress plugin that allows you to edit the 5 most recent posts
* Author:      Bill Hefty
* Author URL:  https://www.billhefty.com
*/

include dirname( __FILE__ ) . '/widget.php';

class WP_React_Post_Edit {
  static function widgets_init() {
    register_widget( 'React_Post_Edit_Widget' );
  }

  static function enqueue_scripts() {
    wp_enqueue_script( 'wp-react-post-edit', plugins_url( 'build/widget.js', __FILE__ ), array(), 'v0.0.1', true );
    wp_enqueue_style( 'wp-react-post-edit', plugins_url( 'build/widget.css', __FILE__ ), array(), 'v0.0.1' );
  }

  static function admin_enqueue_scripts() {
    wp_enqueue_script( 'wp-react-post-edit-admin', plugins_url( 'build/admin.js', __FILE__ ), array(), 'v0.0.1', true );
    wp_enqueue_style( 'wp-react-post-edit-admin', plugins_url( 'build/admin.css', __FILE__ ), array(), 'v0.0.1' );
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

add_action( 'widget_init', array( 'WP_React_Post_Edit', 'widgets_init' ) );
add_action( 'wp_equeue_scripts', array( 'WP_React_Post_Edit', 'enqueue_scripts' ) );
add_action( 'admin_enqueue_scripts', array( 'WP_React_Post_Edit', 'admin_enqueue_scripts' ) );
add_action( 'admin_menu', array( 'WP_React_Post_Edit', 'add_admin_page' ) );
