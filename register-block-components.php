<?php
/**
 * File to register all the blocks
 * 
 * @package learn-gutenberg
 */


/**
 * Registering static block.
 */
function lg_static_block_init() {

	register_block_type( __DIR__ . '/build/block-components/static-block/' );

}
add_action( 'init', 'lg_static_block_init' );

/**
 * Registering dynamic block.
 */
function lg_dynamic_block_init() {

	register_block_type( __DIR__ . '/build/block-components/dynamic-block/' );

}
add_action( 'init', 'lg_dynamic_block_init' );

/**
 * Registering block support.
 */
function lg_block_support_init() {

	register_block_type( __DIR__ . '/build/block-components/block-supports/' );

}
add_action( 'init', 'lg_block_support_init' );

/**
 * Registering block control.
 */
function lg_block_controls_init() {

	register_block_type( __DIR__ . '/build/block-components/block-controls/' );

}
add_action( 'init', 'lg_block_controls_init' );

/**
 * Registering block attributes.
 */
function lg_block_attributes_init() {

	register_block_type( __DIR__ . '/build/block-components/block-attributes/' );

}
add_action( 'init', 'lg_block_attributes_init' );

/**
 * Registering nested block.
 */
function lg_nested_blocks_init() {

	register_block_type( __DIR__ . '/build/block-components/nested-blocks/' );

}
add_action( 'init', 'lg_nested_blocks_init' );

/**
 * Registering metabox examples.
 */
function lg_metabox_example_blocks_init() {

	register_block_type( __DIR__ . '/build/block-components/metaboxes/' );

}
add_action( 'init', 'lg_metabox_example_blocks_init' );

/**
 * Registering metabox examples.
 */
function lg_notice_example_blocks_init() {

	register_block_type( __DIR__ . '/build/block-components/notices/' );

}
add_action( 'init', 'lg_notice_example_blocks_init' );

