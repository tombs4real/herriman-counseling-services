<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package hcs
 */

 $position = rwmb_meta('hcs_position');
 $locations = rwmb_meta('hcs_location');
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="hcs-team-header">
		<div class="hcs-team-header-img">
			<?php hcs_post_thumbnail(); ?>
		</div>
		<div class="hcs-team-header-name"><h1><?php the_title(); ?></h1></div>
		<div class="hcs-team-header-title"><?php echo($position); ?></div>
		<hr class="title-hr">
		<ul class="hcs-team-locations">
			<?php foreach ( $locations as $location ) : ?>
					<li> <img src="https://herrimancounseling.com/wp-content/uploads/2023/09/location-dot-solid.svg" alt="Location Icon"> <?= $location ?></li>
			<?php endforeach ?>
		</ul>
	</div>

	<div class="entry-content">
		<?php the_content(); ?>

		<p style="text-align: center; padding:30px;"><a class="btn" href="contact-us">Get in Touch</a></p>
	</div>

</article><!-- #post-<?php the_ID(); ?> -->
