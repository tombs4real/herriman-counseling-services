<?php
/**
 * The HCS Team post Loop template file.
 * Template Name: HCS Team post Loop
 *
 * @package hcs
 */

  // VARS
  $short_desc = rwmb_meta( 'hcs_short_desc' );
  $position = rwmb_meta( 'hcs_position' );

 ?>
<div class="team-member">
  <div class="card">
    <div class="team-headshot">
      <?php the_post_thumbnail(); ?>
    </div>
    <div class="team-bio">
    <h3 class="team-name"><?php the_title(); ?><span><?php if ( !empty($position) ) : ?><?php echo($position); ?><?php endif; ?></span></h3>
    <div class="team-desc">
      <?php if ( !empty($short_desc) ) : ?>
        <?php echo($short_desc); ?>
        <?php else: ?>
        <?php the_content(); ?>
      <?php endif; ?>
      </div>
    </div>
  </div>
</div>
