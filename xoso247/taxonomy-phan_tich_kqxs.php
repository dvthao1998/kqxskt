<?php
// print_r(get_queried_object());
//print_r(get_queried_object()->term_taxonomy_id); // trả về id của term, cái mà gắn vô fucntion get_posts_by_post_type_and_term
if (get_queried_object()->slug == 'thong-ke-xs-vietlott') {
  $title = 'Tin tức XS Vietlott - XS Mega 6/45';
} else if (get_queried_object()->slug == 'thong-ke-xsmb') {
  $title = 'Thống kê XS Miền Bắc - Phân tích KQXS MB';

} else if (get_queried_object()->slug == 'thong-ke-xsmn') {
  $title = 'Thống kê XS Miền Nam - Phân tích KQXS MN';

} else {
  $title = 'Thống kê XS Miền Trung - Phân tích KQXS MT';

}

get_header(); ?>
<main class="main">
  <div class="main-content">
    <?php renderBreadcrumb(get_queried_object()->name, 'Phân Tích'); ?>
    <div class="content-left">
      <?php
      get_posts_phan_tich_and_term(get_queried_object()->term_taxonomy_id, $title);
      ?>
    </div>
    <?php

    get_sidebar('left');
    get_sidebar('right'); ?>
  </div>
</main>

<?php
get_footer(); ?>