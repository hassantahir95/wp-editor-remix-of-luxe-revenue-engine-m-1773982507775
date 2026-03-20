<?php
/**
 * Solution Section Template Part
 *
 * @package Luxe_Aesthetics
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$pillars = array(
    array(
        'icon'        => 'calendar',
        'title'       => 'Drop-Timed Ad Sequencing',
        'description' => 'Campaigns synchronized with product availability',
        'impact'      => '40-65% ROAS improvement',
    ),
    array(
        'icon'        => 'zap',
        'title'       => 'Automated Recovery Flows',
        'description' => 'Cart recovery + browse abandonment flows',
        'impact'      => '25-45% recovery rate',
    ),
    array(
        'icon'        => 'bot',
        'title'       => 'AI Customer Concierge',
        'description' => 'Real-time support during peak windows',
        'impact'      => '18-30% conversion lift',
    ),
    array(
        'icon'        => 'bar-chart-3',
        'title'       => 'Revenue Visibility Dashboard',
        'description' => 'MER tracking + SKU-level performance',
        'impact'      => 'Know what prints money',
    ),
);
?>

<section id="solution" class="solution-section relative py-20 md:py-32 overflow-hidden" data-animate>
    <!-- Background with Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-accent/85 via-accent/80 to-accent/90"></div>
    <div class="absolute inset-0 bg-black/20 z-[2]"></div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-6 md:px-16">
        <!-- Section Label -->
        <p class="reveal-text section-label text-primary-foreground/90 text-center mb-4">
            THE DROP SURGE SYSTEM™
        </p>

        <!-- Headline -->
        <h2 class="reveal-headline stagger-1 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-center mb-4">
            A Launch-Timed Revenue Engine
        </h2>

        <!-- Body Copy -->
        <p class="reveal-text stagger-2 font-body text-primary-foreground/85 text-center max-w-3xl mx-auto mb-16 text-base md:text-lg leading-relaxed">
            We don't optimize for likes. We engineer drop revenue. The Drop Surge System™ syncs your product launches with precision automation that captures buyers at peak intent.
        </p>

        <!-- Four Pillars -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <?php foreach ( $pillars as $index => $pillar ) : ?>
                <div class="pillar-card card-glow-hover group flex flex-col justify-between min-h-[280px] p-6 border border-primary-foreground/25 bg-primary-foreground/10 backdrop-blur-sm"
                     style="transition-delay: <?php echo esc_attr( ( 400 + $index * 120 ) ); ?>ms;">
                    <!-- Icon -->
                    <div class="w-12 h-12 rounded-xl bg-secondary/20 group-hover:bg-accent flex items-center justify-center transition-colors duration-500">
                        <i data-lucide="<?php echo esc_attr( $pillar['icon'] ); ?>" class="w-6 h-6 text-secondary group-hover:text-primary-foreground transition-colors duration-500"></i>
                    </div>
                    
                    <!-- Content -->
                    <div class="mt-auto">
                        <h3 class="font-display text-xl font-semibold text-primary-foreground group-hover:text-accent mb-2 leading-tight transition-colors duration-500 max-w-[180px]">
                            <?php echo esc_html( $pillar['title'] ); ?>
                        </h3>
                        <p class="font-body text-primary-foreground/60 group-hover:text-muted-foreground text-sm leading-relaxed transition-colors duration-500">
                            <?php echo esc_html( $pillar['description'] ); ?>
                        </p>
                        
                        <!-- Impact metric -->
                        <div class="overflow-hidden h-0 group-hover:h-8 transition-all duration-500 ease-out">
                            <p class="font-body text-accent font-semibold text-sm pt-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                <?php echo esc_html( $pillar['impact'] ); ?>
                            </p>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
