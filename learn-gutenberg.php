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

 define( 'LG_PLUGIN_PATH', __DIR__ );

 require_once LG_PLUGIN_PATH . '/filters.php';
 require_once LG_PLUGIN_PATH . '/register-block-components.php';
 require_once LG_PLUGIN_PATH . '/register-non-block-components.php';
 require_once LG_PLUGIN_PATH . '/build/non-block-components/format-api/index.php';
 require_once LG_PLUGIN_PATH . '/build/non-block-components/slotfill-api/index.php';
