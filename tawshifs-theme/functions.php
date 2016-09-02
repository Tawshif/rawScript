<?php 
 
/**
 * Enqueue scripts
 *
 * @param string $handle Script name
 * @param string $src Script url
 * @param array $deps (optional) Array of script names on which this script depends
 * @param string|bool $ver (optional) Script version (used for cache busting), set to null to disable
 * @param bool $in_footer (optional) Whether to enqueue the script before </head> or before </body>
 */

add_action( 'wp_enqueue_scripts', function(){
	wp_enqueue_style( "style", get_stylesheet_uri() );
	wp_enqueue_style( "bootstrap", get_template_directory_uri() .'/css/bootstrap.css', false, '1.0','all' );
	wp_enqueue_style( "flat-ui", get_template_directory_uri() .'/css/flat-ui.css', false, '1.0','all' );

	wp_enqueue_script( "video", get_template_directory_uri().'/js/video.js', array('jquery'), '1.0', true );
	wp_enqueue_script( "flat-ui", get_template_directory_uri().'/js/flat-ui.js',array('jquery'), '1.0', true );
	wp_enqueue_script("script", get_template_directory_uri().'/jsscript.js', array('jauery'), '1.0', true);
});

/* Navigation Menues */

$locations = array(
	'primary' => __('Primary Menu'),
	'footer' => __('Footer Menu')
 );

 register_nav_menus( $locations );
