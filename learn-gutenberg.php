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
 * Filters the default array of categories for block types to add custom category.
 *
 * @see https://developer.wordpress.org/reference/hooks/block_categories_all/
 *
 * @param array[]                 $block_categories     Array of categories for block types.
 * @param WP_Block_Editor_Context $block_editor_context The current block editor context.
 */
function lg_block_categories_all_filter( $block_categories, $block_editor_context ) {

	return array_merge(
		$block_categories,
		[
			[
				'slug'  => 'learn-gutenberg',
				'title' => esc_html__( 'Learn Gutenberg', 'learn-gutenberg' ),
				'icon'  => null,
			],
		]
	);

}
add_filter( 'block_categories_all', 'lg_block_categories_all_filter', 10, 2 ); 

/**
 * Registering static block.
 */
function lg_static_block_init() {

	register_block_type( __DIR__ . '/build/static-block/' );

}
add_action( 'init', 'lg_static_block_init' );
