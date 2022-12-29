<?php
/**
 * Block Editor Filters.
 *
 * @package learn-gutenberg
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

// register custom meta tag field
function lg_register_post_meta() {

    register_post_meta( 'post', 'lg_meta_block_field', [
		'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
	] );

}
add_action( 'init', 'lg_register_post_meta' );
