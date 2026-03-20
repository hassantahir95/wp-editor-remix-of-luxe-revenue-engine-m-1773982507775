<?php
/**
 * Process Section Template Part
 *
 * @package Luxe_Aesthetics
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$steps = array(
    array(
        'number'      => '01',
        'title'       => 'Revenue Forensics',
        'timeline'    => 'Week 1',
        'description' => 'Complete funnel analysis: traffic flow, cart behavior, timing leaks, SKU performance, drop calendar mapping.',
    ),
    array(
        'number'      => '02',
        'title'       => 'System Installation',
        'timeline'    => 'Weeks 2-3',
        'description' => 'Drop-timed ad campaigns, behavior automation, AI concierge, recovery flows deployed across your ecosystem.',
    ),
    array(
        'number'      => '03',
        'title'       => 'Launch Execution',
        'timeline'    => 'Week 4+',
        'description' => 'First drop with real-time optimization, MER tracking, and revenue visibility. Scale what works, kill what doesn\'t.',
    ),
);
?>

<section id="process" class="process-section relative py-20 md:py-32 overflow-hidden" data-animate>
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20"></div>

    <div class="relative z-10 container mx-auto px-6 md:px-16">
        <!-- Section Label -->
        <p class="reveal-text section-label text-center mb-4">
            HOW THE DROP SURGE SYSTEM GETS DEPLOYED
        </p>

        <!-- Headline -->
        <h2 class="reveal-headline stagger-1 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
            From Audit to 3× Revenue in 60 Days
        </h2>

        <!-- Process Steps -->
        <div class="max-w-3xl mx-auto relative">
            <!-- Connecting Line -->
            <div class="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20 hidden md:block"></div>

            <div class="space-y-8 md:space-y-12">
                <?php foreach ( $steps as $index => $step ) : ?>
                    <div class="reveal-cinematic relative flex gap-6 md:gap-10"
                         style="transition-delay: <?php echo esc_attr( ( 400 + $index * 150 ) ); ?>ms;">
                        <!-- Step Number -->
                        <div class="flex-shrink-0 w-16 md:w-24 h-16 md:h-24 rounded-full bg-primary flex items-center justify-center z-10">
                            <span class="font-display text-xl md:text-2xl font-bold text-primary-foreground">
                                <?php echo esc_html( $step['number'] ); ?>
                            </span>
                        </div>

                        <!-- Step Content -->
                        <div class="flex-1 bg-card rounded-xl p-6 md:p-8 border border-border card-gradient-hover">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3 relative z-10">
                                <h3 class="font-display text-xl md:text-2xl font-semibold text-foreground transition-colors duration-500">
                                    <?php echo esc_html( $step['title'] ); ?>
                                </h3>
                                <span class="font-body text-sm text-primary font-medium mt-1 md:mt-0 transition-colors duration-500">
                                    <?php echo esc_html( $step['timeline'] ); ?>
                                </span>
                            </div>
                            <p class="font-body text-muted-foreground text-sm md:text-base leading-relaxed relative z-10 transition-colors duration-500">
                                <?php echo esc_html( $step['description'] ); ?>
                            </p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
