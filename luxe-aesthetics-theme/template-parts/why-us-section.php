<?php
/**
 * Why Us Section Template Part
 *
 * @package Luxe_Aesthetics
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$differentiators = array(
    array(
        'icon'        => 'sparkles',
        'title'       => 'Beauty Brand Specialists',
        'description' => 'We understand DTC beauty economics, not just "e-commerce"',
    ),
    array(
        'icon'        => 'rocket',
        'title'       => 'Launch-First Architecture',
        'description' => 'Revenue timed to drops, not wasted on "always-on" campaigns',
    ),
    array(
        'icon'        => 'activity',
        'title'       => 'Behavior Sync',
        'description' => 'Automation triggered by real buying signals, not guesses',
    ),
);
?>

<section class="why-us-section relative py-20 md:py-32 overflow-hidden" data-animate>
    <!-- Background with Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-accent/85 via-accent/80 to-accent/90"></div>
    <div class="absolute inset-0 bg-black/20 z-[2]"></div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-6 md:px-16">
        <!-- Headline -->
        <h2 class="reveal-headline font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-2xl mb-4">
            We Engineer Drop Revenue,
        </h2>
        <p class="reveal-text stagger-1 font-display text-2xl md:text-3xl text-secondary mb-12">
            Not Viral Moments
        </p>

        <!-- Differentiator Cards -->
        <div class="grid md:grid-cols-3 gap-6">
            <?php foreach ( $differentiators as $index => $diff ) : ?>
                <div class="group bg-accent/30 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-foreground/20 card-glow-hover"
                     style="transition-delay: <?php echo esc_attr( ( 300 + $index * 120 ) ); ?>ms;">
                    <div class="p-5">
                        <div class="w-10 h-10 rounded-lg bg-primary-foreground/15 flex items-center justify-center mb-4">
                            <i data-lucide="<?php echo esc_attr( $diff['icon'] ); ?>" class="w-5 h-5 text-secondary"></i>
                        </div>
                        <h3 class="font-display text-lg font-semibold text-primary-foreground mb-2">
                            <?php echo esc_html( $diff['title'] ); ?>
                        </h3>
                        <p class="font-body text-primary-foreground/70 text-sm leading-relaxed">
                            <?php echo esc_html( $diff['description'] ); ?>
                        </p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
