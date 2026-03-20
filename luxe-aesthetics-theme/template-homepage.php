<?php
/**
 * Template Name: Homepage
 * Template Post Type: page
 *
 * The homepage template that displays all sections
 *
 * @package Luxe_Aesthetics
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<main id="primary" class="site-main overflow-hidden">
    <?php
    // Hero Section
    get_template_part( 'template-parts/hero-section' );
    
    // Pain Section
    get_template_part( 'template-parts/pain-section' );
    
    // Solution Section
    get_template_part( 'template-parts/solution-section' );
    
    // Benefits Section
    get_template_part( 'template-parts/benefits-section' );
    
    // Case Studies Section
    get_template_part( 'template-parts/case-studies-section' );
    
    // Process Section
    get_template_part( 'template-parts/process-section' );
    
    // Why Us Section
    get_template_part( 'template-parts/why-us-section' );
    
    // FAQ Section
    get_template_part( 'template-parts/faq-section' );
    
    // Final CTA Section
    get_template_part( 'template-parts/final-cta-section' );
    ?>
</main>

<?php
get_footer();
