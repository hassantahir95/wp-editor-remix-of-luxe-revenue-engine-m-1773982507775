<?php
/**
 * Case Studies Section Template Part
 *
 * @package Luxe_Aesthetics
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$case_studies = array(
    array(
        'title'     => 'Emerging Skincare Brand',
        'challenge' => '2.1% conversion, high engagement',
        'solution'  => 'Drop Surge System™',
        'result'    => '287% revenue increase, 5.8% conversion',
    ),
    array(
        'title'     => 'Cosmetics DTC Brand',
        'challenge' => '73% cart abandonment',
        'solution'  => 'Behavior automation',
        'result'    => '$47K monthly recovered, 38% recovery rate',
    ),
    array(
        'title'     => 'Personal Care Startup',
        'challenge' => '1.8× ROAS, wasted ad budget',
        'solution'  => 'Launch-timed sequencing',
        'result'    => '4.8× ROAS, $120K annual savings',
    ),
    array(
        'title'     => 'Luxury Skincare Line',
        'challenge' => 'Unpredictable drop performance',
        'solution'  => 'Complete system deployment',
        'result'    => '$180K+ per drop, 62% repeat rate',
    ),
);
?>

<section id="results" class="case-studies-section relative py-20 md:py-32 overflow-hidden" data-animate>
    <!-- Background with Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-accent/80 via-accent/75 to-accent/85"></div>
    <div class="absolute inset-0 bg-black/20 z-[2]"></div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-6 md:px-16">
        <!-- Section Label -->
        <p class="reveal-text section-label text-primary-foreground/90 text-center mb-4">
            BEAUTY BRAND RESULTS
        </p>

        <!-- Headline -->
        <h2 class="reveal-headline stagger-1 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-center mb-12">
            Real Drops. Real Revenue. Real ROI.
        </h2>

        <!-- Case Study Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <?php foreach ( $case_studies as $index => $study ) : ?>
                <div class="group bg-card rounded-2xl overflow-hidden card-glow-hover"
                     style="transition-delay: <?php echo esc_attr( ( 300 + $index * 120 ) ); ?>ms;">
                    <!-- Content -->
                    <div class="p-6">
                        <!-- Title -->
                        <h3 class="font-display text-xl font-bold text-foreground mb-5">
                            <?php echo esc_html( $study['title'] ); ?>
                        </h3>
                        
                        <div class="space-y-4">
                            <div>
                                <p class="font-body text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                                    Challenge
                                </p>
                                <p class="font-body text-sm text-foreground">
                                    <?php echo esc_html( $study['challenge'] ); ?>
                                </p>
                            </div>
                            <div>
                                <p class="font-body text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                                    Solution
                                </p>
                                <p class="font-body text-sm text-foreground">
                                    <?php echo esc_html( $study['solution'] ); ?>
                                </p>
                            </div>
                            <div>
                                <p class="font-body text-xs uppercase tracking-wider font-semibold text-primary mb-1">
                                    Result
                                </p>
                                <p class="font-body text-sm font-semibold text-foreground">
                                    <?php echo esc_html( $study['result'] ); ?>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
