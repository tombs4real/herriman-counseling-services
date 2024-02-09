<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package hcs
 */

?>

	</div>
	<!-- end content -->
	</div>
	<!-- end page transition -->
	<!-- footer -->
	<footer id="colophon" class="site-footer">
		<div class="footer-logo">
			<?php the_custom_logo(); ?>
		</div>
		<?php if ( get_theme_mod( 'footer-phone' ) ) : ?>
		<div class="footer-phone">
			Get In Touch: <a href="tel:+1-801-217-9600">1-801-217-9600</a>
		</div>
		<?php endif; ?>
		<?php if ( get_theme_mod( 'footer-address' ) ) : ?>
		<div class="footer-address">
			<p>
				<?php echo get_theme_mod( 'footer-address' ); ?>
			</p>
		</div>
		<?php endif; ?>
		<div class="footer-copy">
			Copyright © <?php echo date('Y'); ?> Herriman Counseling Services, LLC
		</div>

		<?php if ( get_theme_mod( 'footer-legal' ) ) : ?>
		<div class="footer-legal">
			<p>
				<?php echo get_theme_mod( 'footer-legal' ); ?>
			</p>
		</div>
		<?php endif; ?>

	</footer>
	<!-- end footer -->
</div>
<!-- end page -->
<!-- wp_footer -->
<?php wp_footer(); ?>
<!-- end wp_footer -->
</body>
</html>
