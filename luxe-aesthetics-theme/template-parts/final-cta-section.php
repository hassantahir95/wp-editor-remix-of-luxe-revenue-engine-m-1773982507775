<?php
/**
 * Final CTA Section Template Part
 *
 * @package Luxe_Aesthetics
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>

<section class="final-cta-section relative overflow-hidden min-h-[80vh] flex items-center" data-animate>
    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-95"></div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-6 md:px-16 py-16 md:py-24">
        <div class="max-w-xl">
            <!-- Headline -->
            <h2 class="reveal-headline font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                Getting Engagement But Not Sales?
            </h2>

            <!-- Body -->
            <p class="reveal-text stagger-1 font-body text-white/90 max-w-md mb-8 text-sm md:text-base leading-relaxed">
                Let's analyze your drop revenue potential. No pitch. Just data.<br class="hidden md:block">
                We'll show you your conversion funnel, cart abandonment losses, and expected ROI timeline.
            </p>

            <!-- CTA Button -->
            <div class="reveal-cinematic stagger-2 mb-8">
                <a href="<?php echo esc_url( get_theme_mod( 'luxe_aesthetics_cta_url', '#' ) ); ?>" 
                   class="btn-cta-ghost inline-flex items-center gap-3 text-lg px-12 py-5">
                    <?php echo esc_html( get_theme_mod( 'luxe_aesthetics_cta_text', 'Book Your Revenue Audit' ) ); ?>
                    <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
            </div>

            <!-- Trust Line -->
            <p class="reveal-text stagger-3 font-body text-sm text-white/75">
                Best fit for beauty brands doing $30K+ monthly with product drops or seasonal campaigns
            </p>
        </div>
    </div>
</section>
