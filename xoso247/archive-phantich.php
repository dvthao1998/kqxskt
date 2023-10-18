<?php
// print_r(get_queried_object());

get_header(); ?>
<main class="main">
  <div class="main-content">
    <?php renderBreadcrumb('Phân Tích'); ?>
    <div class="content-left">
      <?php
      get_posts_phan_tich('Phân tích KQXS 3 miền hôm nay');
      ?>
    </div>
    <?php

    get_sidebar('left');
    get_sidebar('right'); ?>
  </div>
</main>

<?php
get_footer(); ?>