<?php
/**
 * The header for our theme
 *
 * @package Luxe_Aesthetics
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo( 'description' ); ?>">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header id="masthead" class="site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300" data-scrolled="false">
    <div class="container mx-auto px-6 md:px-16 flex items-center justify-between py-4 md:py-6">
        <!-- Logo -->
        <div class="site-branding">
            <?php if ( has_custom_logo() ) : ?>
                <?php the_custom_logo(); ?>
            <?php else : ?>
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="font-display text-2xl font-bold transition-colors logo-text">
                    <?php bloginfo( 'name' ); ?><span class="text-primary">.</span>
                </a>
            <?php endif; ?>
        </div>

        <!-- Desktop Nav -->
        <nav class="main-navigation hidden md:flex items-center gap-8" aria-label="<?php esc_attr_e( 'Primary Navigation', 'luxe-aesthetics' ); ?>">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'primary',
                'menu_class'     => 'flex items-center gap-6',
                'container'      => false,
                'fallback_cb'    => false,
            ) );
            ?>
            <a href="<?php echo esc_url( get_theme_mod( 'luxe_aesthetics_cta_url', '#' ) ); ?>" 
               class="text-sm py-2.5 px-5 rounded-md font-semibold transition-all duration-300 btn-primary header-cta">
                <?php echo esc_html( get_theme_mod( 'luxe_aesthetics_cta_text', 'Book Audit' ) ); ?>
            </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-toggle md:hidden transition-colors" 
                aria-label="<?php esc_attr_e( 'Toggle menu', 'luxe-aesthetics' ); ?>"
                aria-expanded="false">
            <i data-lucide="menu" class="w-6 h-6 menu-icon"></i>
            <i data-lucide="x" class="w-6 h-6 close-icon hidden"></i>
        </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border shadow-soft hidden">
        <nav class="container mx-auto px-6 py-6 flex flex-col gap-4" aria-label="<?php esc_attr_e( 'Mobile Navigation', 'luxe-aesthetics' ); ?>">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'primary',
                'menu_class'     => 'flex flex-col gap-3',
                'container'      => false,
                'fallback_cb'    => false,
            ) );
            ?>
            <a href="<?php echo esc_url( get_theme_mod( 'luxe_aesthetics_cta_url', '#' ) ); ?>" 
               class="btn-primary w-full mt-2 text-center inline-block">
                <?php echo esc_html( get_theme_mod( 'luxe_aesthetics_cta_text', 'Book Audit' ) ); ?>
            </a>
        </nav>
    </div>
</header>

<div id="content" class="site-content">
