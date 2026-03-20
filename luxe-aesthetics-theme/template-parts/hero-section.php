<?php
/**
 * Hero Section Template Part
 *
 * @package Luxe_Aesthetics
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>

<section class="hero-section relative h-screen overflow-hidden flex flex-col" id="hero">
    <!-- Placeholder Background (can be replaced with actual image carousel) -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-90"></div>
    
    <!-- Black Overlay -->
    <div class="absolute inset-0 bg-black/20 z-[2]"></div>

    <!-- Animated Side Elements - Left -->
    <div class="absolute left-4 md:left-8 top-1/4 z-[3] hidden md:block">
        <div class="floating-element-1 w-3 h-3 rounded-full bg-luxe-blush/40 blur-[1px]"></div>
        <div class="floating-element-2 w-2 h-2 rounded-full bg-luxe-taupe/30 mt-12 ml-4 blur-[1px]"></div>
        <div class="floating-element-3 w-4 h-4 rounded-full border border-luxe-blush/30 mt-8"></div>
    </div>

    <!-- Animated Side Elements - Right -->
    <div class="absolute right-4 md:right-8 top-1/3 z-[3] hidden md:block">
        <div class="floating-element-3 w-4 h-4 rounded-full bg-luxe-blush/30 blur-[1px]"></div>
        <div class="floating-element-1 w-2 h-2 rounded-full bg-luxe-taupe/40 mt-10 -ml-2 blur-[1px]"></div>
        <div class="floating-element-2 w-3 h-3 rounded-full border border-luxe-rose/30 mt-6 ml-3"></div>
    </div>

    <!-- Content - Top Section -->
    <div class="relative z-10 container mx-auto px-6 md:px-12 pt-[90px] md:pt-[100px] text-center">
        <!-- Niche Callout Badge -->
        <div class="inline-flex items-center justify-center mb-2 md:mb-3 animate-fade-in-up">
            <span class="bg-luxe-taupe/20 text-luxe-taupe border border-luxe-taupe/30 px-3 py-1 rounded-full font-body text-[9px] md:text-[10px] font-semibold uppercase tracking-[1.5px]">
                For Beauty Brand Founders
            </span>
        </div>

        <!-- Hero Headline -->
        <h1 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.6] mb-3 md:mb-4 animate-fade-in-up max-w-3xl mx-auto text-balance" style="animation-delay: 0.15s;">
            We help beauty brands <span class="highlight-box">3×</span> their revenue in <span class="highlight-box">60-90 Days</span>.
        </h1>

        <!-- Subheadline -->
        <p class="font-body text-xs md:text-sm text-primary-foreground/85 max-w-xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.3s;">
            <strong>The Drop Surge System™</strong> syncs your product launches with precision automation, turning drops into predictable 70% extra revenue.
        </p>
    </div>

    <!-- CTA Button -->
    <div class="absolute bottom-6 md:bottom-10 left-0 right-0 flex justify-center z-20 animate-fade-in-up" style="animation-delay: 0.5s;">
        <a href="<?php echo esc_url( get_theme_mod( 'luxe_aesthetics_cta_url', '#' ) ); ?>" 
           class="btn-primary inline-flex items-center gap-2 md:gap-3 text-sm md:text-base px-6 py-3 md:px-8 md:py-4 whitespace-nowrap hero-cta-glow">
            <?php echo esc_html( get_theme_mod( 'luxe_aesthetics_cta_text', 'Book Your Revenue Audit' ) ); ?>
            <i data-lucide="arrow-right" class="w-4 h-4 md:w-5 md:h-5"></i>
        </a>
    </div>
</section>
