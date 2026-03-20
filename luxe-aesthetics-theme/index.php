<?php
/**
 * The main template file
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
    if ( have_posts() ) :
        while ( have_posts() ) :
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class( 'py-20' ); ?>>
                <div class="container mx-auto px-6 md:px-16">
                    <header class="entry-header mb-8">
                        <?php the_title( '<h1 class="entry-title font-display text-4xl md:text-5xl font-bold text-foreground mb-4">', '</h1>' ); ?>
                        <div class="entry-meta text-muted-foreground">
                            <?php
                            echo '<span>' . get_the_date() . '</span>';
                            if ( get_the_author() ) {
                                echo ' <span class="separator">|</span> ' . esc_html__( 'By', 'luxe-aesthetics' ) . ' ' . get_the_author();
                            }
                            ?>
                        </div>
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

        the_posts_navigation();
    else :
        ?>
        <div class="container mx-auto px-6 md:px-16 py-20">
            <p class="text-center text-lg text-muted-foreground">
                <?php esc_html_e( 'No content found. Please try a different search.', 'luxe-aesthetics' ); ?>
            </p>
        </div>
        <?php
    endif;
    ?>
</main>

<?php
get_footer();
