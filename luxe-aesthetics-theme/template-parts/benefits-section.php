<?php
/**
 * Benefits Section Template Part
 *
 * @package Luxe_Aesthetics
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$benefits = array(
    array(
        'icon'        => 'trending-up',
        'metric'      => '3×',
        'title'       => 'Revenue Growth',
        'description' => 'From existing traffic — no viral stunts needed',
    ),
    array(
        'icon'        => 'target',
        'metric'      => '65%',
        'title'       => 'Better ROAS',
        'description' => 'Through launch timing vs. always-on waste',
    ),
    array(
        'icon'        => 'shopping-bag',
        'metric'      => '45%',
        'title'       => 'Cart Recovery',
        'description' => 'Triple the industry average of 8-12%',
    ),
    array(
        'icon'        => 'line-chart',
        'metric'      => '100%',
        'title'       => 'Predictable Revenue',
        'description' => 'Know your numbers before you launch',
    ),
    array(
        'icon'        => 'heart',
        'metric'      => '2.5×',
        'title'       => 'Higher LTV',
        'description' => 'Strategic upsell sequences post-purchase',
    ),
    array(
        'icon'        => 'coins',
        'metric'      => '$0',
        'title'       => 'Wasted Budget',
        'description' => 'Every dollar timed for peak conversion',
    ),
);
?>

<section class="benefits-section relative py-20 md:py-32 overflow-hidden" data-animate>
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/30"></div>

    <div class="relative z-10 container mx-auto px-6 md:px-16">
        <!-- Section Label -->
        <p class="reveal-text section-label text-center mb-4">
            WHAT BEAUTY BRANDS SEE IN 60-90 DAYS
        </p>

        <!-- Benefits Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            <?php foreach ( $benefits as $index => $benefit ) : ?>
                <div class="reveal-card group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 card-gradient-hover"
                     style="transition-delay: <?php echo esc_attr( ( 150 + $index * 100 ) ); ?>ms;">
                    <!-- Content -->
                    <div class="p-6 relative z-10">
                        <!-- Title Left - Metric Right -->
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="font-display text-2xl font-bold text-foreground text-left transition-colors duration-500">
                                <?php echo esc_html( $benefit['title'] ); ?>
                            </h3>
                            <span class="font-display text-3xl font-bold text-accent text-right transition-colors duration-500">
                                <?php echo esc_html( $benefit['metric'] ); ?>
                            </span>
                        </div>
                        
                        <!-- Description -->
                        <p class="font-body text-muted-foreground text-sm leading-relaxed text-left transition-colors duration-500">
                            <?php echo esc_html( $benefit['description'] ); ?>
                        </p>
                        
                        <!-- Accent line -->
                        <div class="mt-4 h-[2px] w-12 bg-primary/30 group-hover:w-full group-hover:bg-primary-foreground transition-all duration-500"></div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <!-- Bottom Statement -->
        <p class="reveal-headline font-display text-2xl md:text-3xl font-bold text-foreground text-center" style="transition-delay: 800ms;">
            This isn't viral marketing. This is <span class="text-primary">revenue engineering.</span>
        </p>
    </div>
</section>
