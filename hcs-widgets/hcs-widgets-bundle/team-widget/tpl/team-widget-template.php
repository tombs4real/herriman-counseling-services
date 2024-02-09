<?php
	$args = array(
		'post_type' => array('team'),
		'post_status' => array('publish'),
		'posts_per_page' => -1,
		'order' => 'ASC',
		'orderby' => 'date'
	);
	$team_query = new WP_Query( $args );

?>
<?php if ( $team_query->have_posts() ) : ?>
<div class="hcs-team-widget-container">
	<?php while ( $team_query->have_posts() ) : 
		// VARS
		$team_query->the_post();
		//$position = rwmb_meta('hcs_position');
		$locations = rwmb_meta('hcs_location');
	?>
	<a href="<?php the_permalink(); ?>" class="hcs-team-widget-item">
		<div class="hcs-team-widget-img" style="background-image: url(<?php the_post_thumbnail_url(); ?>);"></div>
		<div class="hcs-team-widget-name"><?php the_title(); ?></div>
		<!-- <div class="hcs-team-widget-title"></div> -->
		<ul class="hcs-team-locations">
			<?php foreach ( $locations as $location ) : ?>
					<li> <img src="https://herrimancounseling.com/wp-content/uploads/2023/09/location-dot-solid.svg" alt="Location Icon"> <?= $location ?></li>
			<?php endforeach ?>
		</ul>
	</a>
	<?php endwhile; ?>
</div>
<?php endif; ?>
<?php wp_reset_postdata(); ?>
			

