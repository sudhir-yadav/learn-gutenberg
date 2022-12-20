<?php
/**
 * Plugin Name:       Learn Gutenberg
 * Description:       Attemp to learn gutenberg development.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Sudhir Yadav
 * Author URI:        https://sudhir.dev/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       learn-gutenberg
 *
 * @package           learn-gutenberg
 */

/**
 * Registering static block.
 */
function lg_static_block_init() {

	register_block_type( __DIR__ . '/build/static-block/' );

}
add_action( 'init', 'lg_static_block_init' );
