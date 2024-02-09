<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package hcs
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<div class="entry-content error-page">

				<h1>404 Error!</h1>
				<hr class="title-hr">
				<p>We're sorry but the page you are looking for was not found.</p>
				<a href="<?php echo get_home_url(); ?>" class="btn">Get Me Out of Here</a>

			</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
