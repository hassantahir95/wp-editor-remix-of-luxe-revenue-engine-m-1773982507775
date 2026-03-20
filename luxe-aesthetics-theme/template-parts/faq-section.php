<?php
/**
 * FAQ Section Template Part
 *
 * @package Luxe_Aesthetics
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$faqs = array(
    array(
        'question' => 'How fast will I see results?',
        'answer'   => 'Most beauty brands see measurable improvement in cart recovery within 14-21 days. Full 3× revenue impact typically lands at 60-90 days once complete drop cycles execute.',
    ),
    array(
        'question' => 'Does this work if I\'m already running ads?',
        'answer'   => 'Absolutely. We optimize your existing spend through better timing and automation. You\'ll get 3-5× more from every dollar by syncing ads with actual buying behavior.',
    ),
    array(
        'question' => 'What if I don\'t have regular product drops?',
        'answer'   => 'The system works for seasonal campaigns, promotional windows, and even evergreen catalogs. We create "drop moments" that drive urgency and predictable revenue events.',
    ),
);
?>

<section id="faq" class="faq-section relative py-20 md:py-32 overflow-hidden" data-animate>
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/30"></div>

    <div class="relative z-10 container mx-auto px-6 md:px-16">
        <!-- Section Label -->
        <p class="reveal-text section-label text-center mb-4">
            COMMON QUESTIONS
        </p>

        <!-- FAQ Items -->
        <div class="space-y-4 max-w-3xl mx-auto">
            <?php foreach ( $faqs as $index => $faq ) : ?>
                <div class="reveal-card bg-background rounded-xl border border-border p-6 card-gradient-hover faq-item"
                     style="transition-delay: <?php echo esc_attr( ( 200 + $index * 120 ) ); ?>ms;">
                    <button class="faq-trigger w-full text-left font-display text-lg font-semibold text-foreground py-2 hover:no-underline relative z-10 transition-colors duration-500 flex items-center justify-between"
                            type="button"
                            aria-expanded="false">
                        <?php echo esc_html( $faq['question'] ); ?>
                        <i data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-300 faq-icon"></i>
                    </button>
                    <div class="faq-content hidden font-body text-muted-foreground pb-2 pt-4 leading-relaxed relative z-10 transition-colors duration-500">
                        <?php echo esc_html( $faq['answer'] ); ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
