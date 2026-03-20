<?php
/**
 * The footer for our theme
 *
 * @package Luxe_Aesthetics
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>

</div><!-- #content -->

<footer id="colophon" class="site-footer bg-foreground py-16">
    <div class="container mx-auto px-6 md:px-16">
        <div class="grid md:grid-cols-4 gap-10 mb-12">
            <!-- Brand -->
            <div class="md:col-span-2">
                <?php if ( has_custom_logo() ) : ?>
                    <div class="footer-logo">
                        <?php the_custom_logo(); ?>
                    </div>
                <?php else : ?>
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="font-display text-3xl font-bold text-background">
                        <?php bloginfo( 'name' ); ?><span class="text-primary">.</span>
                    </a>
                <?php endif; ?>
                
                <p class="font-body text-background/70 mt-4 max-w-md leading-relaxed">
                    <?php 
                    $description = get_bloginfo( 'description' );
                    if ( $description ) {
                        echo esc_html( $description );
                    } else {
                        echo 'We help beauty brands 3× their revenue with The Drop Surge System™, a launch-timed ad and automation engine built for DTC beauty economics.';
                    }
                    ?>
                </p>
                
                <a href="<?php echo esc_url( get_theme_mod( 'luxe_aesthetics_cta_url', '#' ) ); ?>" 
                   class="btn-primary mt-6 inline-flex items-center gap-2">
                    <?php echo esc_html( get_theme_mod( 'luxe_aesthetics_cta_text', 'Book Your Audit' ) ); ?>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>

            <!-- Footer Widget Areas -->
            <?php if ( is_active_sidebar( 'footer-1' ) ) : ?>
                <div class="footer-widget-area">
                    <?php dynamic_sidebar( 'footer-1' ); ?>
                </div>
            <?php else : ?>
                <div>
                    <h4 class="font-display text-lg font-semibold text-background mb-4">
                        <?php esc_html_e( 'Quick Links', 'luxe-aesthetics' ); ?>
                    </h4>
                    <ul class="space-y-3">
                        <li><a href="#solution" class="font-body text-background/70 hover:text-primary transition-colors"><?php esc_html_e( 'Our Solution', 'luxe-aesthetics' ); ?></a></li>
                        <li><a href="#results" class="font-body text-background/70 hover:text-primary transition-colors"><?php esc_html_e( 'Case Studies', 'luxe-aesthetics' ); ?></a></li>
                        <li><a href="#process" class="font-body text-background/70 hover:text-primary transition-colors"><?php esc_html_e( 'Our Process', 'luxe-aesthetics' ); ?></a></li>
                        <li><a href="#faq" class="font-body text-background/70 hover:text-primary transition-colors"><?php esc_html_e( 'FAQ', 'luxe-aesthetics' ); ?></a></li>
                    </ul>
                </div>
            <?php endif; ?>

            <?php if ( is_active_sidebar( 'footer-2' ) ) : ?>
                <div class="footer-widget-area">
                    <?php dynamic_sidebar( 'footer-2' ); ?>
                </div>
            <?php else : ?>
                <div>
                    <h4 class="font-display text-lg font-semibold text-background mb-4">
                        <?php esc_html_e( 'Get in Touch', 'luxe-aesthetics' ); ?>
                    </h4>
                    <ul class="space-y-3">
                        <li class="font-body text-background/70">
                            <?php echo esc_html( get_theme_mod( 'luxe_aesthetics_email', 'hello@luxeaesthetics.agency' ) ); ?>
                        </li>
                        <li class="font-body text-background/70">
                            <?php echo esc_html( get_theme_mod( 'luxe_aesthetics_location', 'Los Angeles, CA' ) ); ?>
                        </li>
                    </ul>
                </div>
            <?php endif; ?>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="font-body text-sm text-background/50">
                &copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. <?php esc_html_e( 'All rights reserved.', 'luxe-aesthetics' ); ?>
            </p>
            <div class="flex gap-6">
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'footer',
                    'menu_class'     => 'flex gap-6',
                    'container'      => false,
                    'depth'          => 1,
                    'fallback_cb'    => '__return_false',
                ) );
                ?>
                <?php if ( ! has_nav_menu( 'footer' ) ) : ?>
                    <a href="#" class="font-body text-sm text-background/50 hover:text-primary transition-colors">
                        <?php esc_html_e( 'Privacy Policy', 'luxe-aesthetics' ); ?>
                    </a>
                    <a href="#" class="font-body text-sm text-background/50 hover:text-primary transition-colors">
                        <?php esc_html_e( 'Terms of Service', 'luxe-aesthetics' ); ?>
                    </a>
                <?php endif; ?>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
