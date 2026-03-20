<?php
/**
 * Luxe Aesthetics Agency Theme Functions
 *
 * @package Luxe_Aesthetics
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

/**
 * Theme setup
 */
function luxe_aesthetics_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails
    add_theme_support( 'post-thumbnails' );

    // Register navigation menus
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'luxe-aesthetics' ),
        'footer'  => __( 'Footer Menu', 'luxe-aesthetics' ),
    ) );

    // Switch default core markup to output valid HTML5
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );

    // Add theme support for selective refresh for widgets
    add_theme_support( 'customize-selective-refresh-widgets' );

    // Add support for custom logo
    add_theme_support( 'custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ) );
}
add_action( 'after_setup_theme', 'luxe_aesthetics_setup' );

/**
 * Enqueue scripts and styles
 */
function luxe_aesthetics_scripts() {
    // Enqueue Google Fonts
    wp_enqueue_style( 
        'luxe-aesthetics-fonts', 
        'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;500;600;700&display=swap',
        array(), 
        null 
    );

    // Enqueue Tailwind CSS from CDN (for development)
    // Note: In production, you should compile and include your own CSS
    wp_enqueue_style( 
        'luxe-aesthetics-tailwind', 
        'https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css',
        array(), 
        '3.4.1' 
    );

    // Enqueue main stylesheet
    wp_enqueue_style( 
        'luxe-aesthetics-style', 
        get_stylesheet_uri(),
        array( 'luxe-aesthetics-tailwind' ), 
        wp_get_theme()->get( 'Version' ) 
    );

    // Enqueue custom CSS
    wp_enqueue_style( 
        'luxe-aesthetics-custom', 
        get_template_directory_uri() . '/assets/css/custom.css',
        array( 'luxe-aesthetics-tailwind' ), 
        wp_get_theme()->get( 'Version' ) 
    );

    // Enqueue Lucide icons (alternative to lucide-react)
    wp_enqueue_script( 
        'luxe-aesthetics-lucide', 
        'https://unpkg.com/lucide@latest/dist/umd/lucide.min.js',
        array(), 
        null, 
        true 
    );

    // Enqueue main theme JavaScript
    wp_enqueue_script( 
        'luxe-aesthetics-script', 
        get_template_directory_uri() . '/assets/js/main.js',
        array(), 
        wp_get_theme()->get( 'Version' ), 
        true 
    );

    // Pass data to JavaScript
    wp_localize_script( 'luxe-aesthetics-script', 'luxeAesthetics', array(
        'ajaxUrl' => admin_url( 'admin-ajax.php' ),
        'nonce'   => wp_create_nonce( 'luxe-aesthetics-nonce' ),
    ) );
}
add_action( 'wp_enqueue_scripts', 'luxe_aesthetics_scripts' );

/**
 * Register widget areas
 */
function luxe_aesthetics_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Sidebar', 'luxe-aesthetics' ),
        'id'            => 'sidebar-1',
        'description'   => __( 'Add widgets here to appear in your sidebar.', 'luxe-aesthetics' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Footer 1', 'luxe-aesthetics' ),
        'id'            => 'footer-1',
        'description'   => __( 'Add widgets here to appear in footer column 1.', 'luxe-aesthetics' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title font-display text-lg font-semibold text-background mb-4">',
        'after_title'   => '</h4>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Footer 2', 'luxe-aesthetics' ),
        'id'            => 'footer-2',
        'description'   => __( 'Add widgets here to appear in footer column 2.', 'luxe-aesthetics' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title font-display text-lg font-semibold text-background mb-4">',
        'after_title'   => '</h4>',
    ) );
}
add_action( 'widgets_init', 'luxe_aesthetics_widgets_init' );

/**
 * Customizer settings
 */
function luxe_aesthetics_customize_register( $wp_customize ) {
    // Add CTA section
    $wp_customize->add_section( 'luxe_aesthetics_cta', array(
        'title'    => __( 'CTA Settings', 'luxe-aesthetics' ),
        'priority' => 30,
    ) );

    // CTA Button Text
    $wp_customize->add_setting( 'luxe_aesthetics_cta_text', array(
        'default'           => 'Book Your Revenue Audit',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'luxe_aesthetics_cta_text', array(
        'label'   => __( 'CTA Button Text', 'luxe-aesthetics' ),
        'section' => 'luxe_aesthetics_cta',
        'type'    => 'text',
    ) );

    // CTA Button URL
    $wp_customize->add_setting( 'luxe_aesthetics_cta_url', array(
        'default'           => '#',
        'sanitize_callback' => 'esc_url_raw',
    ) );

    $wp_customize->add_control( 'luxe_aesthetics_cta_url', array(
        'label'   => __( 'CTA Button URL', 'luxe-aesthetics' ),
        'section' => 'luxe_aesthetics_cta',
        'type'    => 'url',
    ) );

    // Contact Email
    $wp_customize->add_setting( 'luxe_aesthetics_email', array(
        'default'           => 'hello@luxeaesthetics.agency',
        'sanitize_callback' => 'sanitize_email',
    ) );

    $wp_customize->add_control( 'luxe_aesthetics_email', array(
        'label'   => __( 'Contact Email', 'luxe-aesthetics' ),
        'section' => 'luxe_aesthetics_cta',
        'type'    => 'email',
    ) );

    // Location
    $wp_customize->add_setting( 'luxe_aesthetics_location', array(
        'default'           => 'Los Angeles, CA',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'luxe_aesthetics_location', array(
        'label'   => __( 'Location', 'luxe-aesthetics' ),
        'section' => 'luxe_aesthetics_cta',
        'type'    => 'text',
    ) );
}
add_action( 'customize_register', 'luxe_aesthetics_customize_register' );

/**
 * Custom template tags
 */

/**
 * Get CTA button
 */
function luxe_aesthetics_cta_button( $classes = 'btn-primary' ) {
    $cta_text = get_theme_mod( 'luxe_aesthetics_cta_text', 'Book Your Revenue Audit' );
    $cta_url  = get_theme_mod( 'luxe_aesthetics_cta_url', '#' );
    
    echo '<a href="' . esc_url( $cta_url ) . '" class="' . esc_attr( $classes ) . '">';
    echo esc_html( $cta_text );
    echo '</a>';
}

/**
 * Add async/defer attributes to enqueued scripts
 */
function luxe_aesthetics_script_loader_tag( $tag, $handle ) {
    $async_scripts = array( 'luxe-aesthetics-lucide' );
    
    if ( in_array( $handle, $async_scripts ) ) {
        return str_replace( ' src', ' defer src', $tag );
    }
    
    return $tag;
}
add_filter( 'script_loader_tag', 'luxe_aesthetics_script_loader_tag', 10, 2 );
