<?php
// print_r(get_queried_object()->ID);
$post_id = get_queried_object()->ID;
$taxonomy = 'category';
$terms = wp_get_post_terms($post_id, $taxonomy);
get_header();
while (have_posts()) {
  the_post();
  ?>
  <main class="main">
    <div class="main-content">
      <?php if (!empty($terms)) {
        foreach ($terms as $term) {
          $term_name = $term->name;
          $term_id = $term->term_id;
        }
        renderBreadcrumb($term_name);
      } ?>
      <div class="content-left">
        <article class="the-article">
          <header class="the-article-header">
            <h1 class="the-article-title">
              <?php the_title(); ?>
            </h1>
            <div class="the-article-time">
              <?php
              echo weekDay(get_the_modified_date()) . ' ';
              echo get_the_modified_date(); ?>
            </div>
          </header>
          <div class="the-article-content">
            <main class="main">
              <?php the_content(); ?>
            </main>
          </div>
          <div class="section-related">
            <div class="related-title">
              <h3>Tin liên quan</h3>
            </div>
            <div class="section-content">
              <?php get_posts_tinxoso_term($term_id, '', true); ?>
            </div>
          </div>
        </article>
      </div>
      <?php

      get_sidebar('left');
      get_sidebar('right'); ?>
    </div>
  </main>

<?php }
get_footer(); ?>