<?php
/**
 * Pain Section Template Part
 *
 * @package Luxe_Aesthetics
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$pain_points = array(
    array(
        'icon'        => 'trending-down',
        'title'       => 'The Timing Leak',
        'description' => 'Buzz peaks before product is ready or fades before checkout, costing $24K+ per major drop',
    ),
    array(
        'icon'        => 'shopping-cart',
        'title'       => 'Cart Abandonment',
        'description' => '70% cart abandonment = $50K-$150K annually walking away at final click',
    ),
    array(
        'icon'        => 'flame',
        'title'       => 'Mistimed Ad Spend',
        'description' => '"Always-on" campaigns waste 40-60% of budget outside peak buying windows',
    ),
);
?>

<section class="pain-section relative py-20 md:py-32 overflow-hidden" data-animate>
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20"></div>

    <div class="relative z-10 container mx-auto px-6 md:px-16">
        <!-- Headline -->
        <h2 class="reveal-headline font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4">
            High Engagement ≠ High Revenue
        </h2>
        
        <p class="reveal-text stagger-1 font-display text-xl md:text-2xl text-primary text-center mb-8">
            (And It's Costing You $50K-$200K Annually)
        </p>

        <!-- Body Copy -->
        <p class="reveal-text stagger-2 font-body text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-base md:text-lg leading-relaxed">
            Strong engagement, weak conversion — 70% of carts abandoned, 2-3% checkout rates.
        </p>

        <!-- Pain Point Cards -->
        <div class="grid md:grid-cols-3 gap-6">
            <?php foreach ( $pain_points as $index => $point ) : ?>
                <div class="reveal-card bg-card rounded-xl p-8 border border-border card-gradient-hover"
                     style="transition-delay: <?php echo esc_attr( ( 300 + $index * 120 ) ); ?>ms;">
                    <div class="icon-wrapper w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative z-10 transition-colors duration-500">
                        <i data-lucide="<?php echo esc_attr( $point['icon'] ); ?>" class="w-7 h-7 text-primary transition-colors duration-500"></i>
                    </div>
                    <h3 class="font-display text-xl font-semibold text-foreground mb-3 relative z-10 transition-colors duration-500">
                        <?php echo esc_html( $point['title'] ); ?>
                    </h3>
                    <p class="font-body text-muted-foreground text-sm leading-relaxed relative z-10 transition-colors duration-500">
                        <?php echo esc_html( $point['description'] ); ?>
                    </p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
