<?php
// print_r(get_queried_object());
$term = get_term_by('slug', 'tin-xo-so-moi-nhat', 'category');
$term_rule = get_term_by('slug', 'quy-dinh-xo-so', 'category');

get_header(); ?>
<main class="main">
  <div class="main-content">
    <?php renderBreadcrumb('Phân Tích'); ?>
    <div class="content-left">
      <?php
      if (is_tax('tinxoso', 'tin-moi-nhat')) {
        get_posts_tinxoso_term($term->term_id, 'Tin Xổ Số Mới Nhất');
      } else if (is_tax('tinxoso', 'quy-dinh-xo-so')) {
        get_posts_tinxoso_term($term_rule->term_id, 'Quy Định Xổ Số');
      } else {
        mau_ve_trung_thuong();
      }
      ?>
    </div>
    <?php

    get_sidebar('left');
    get_sidebar('right'); ?>
  </div>
</main>

<?php
get_footer(); ?>