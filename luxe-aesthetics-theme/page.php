<?php
/**
 * The template for displaying all pages
 *
 * @package Luxe_Aesthetics
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<main id="primary" class="site-main">
    <?php
    while ( have_posts() ) :
        the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class( 'py-20' ); ?>>
            <div class="container mx-auto px-6 md:px-16">
                <header class="entry-header mb-8">
                    <?php the_title( '<h1 class="entry-title font-display text-4xl md:text-5xl font-bold text-foreground">', '</h1>' ); ?>
                </header>

                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="entry-image mb-8">
                        <?php the_post_thumbnail( 'large', array( 'class' => 'w-full h-auto rounded-lg shadow-soft' ) ); ?>
                    </div>
                <?php endif; ?>

                <div class="entry-content prose prose-lg max-w-none">
                    <?php the_content(); ?>
                </div>
            </div>
        </article>
        <?php
    endwhile;
    ?>
</main>

<?php
get_footer();
