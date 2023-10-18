<?php

// print_r(get_queried_object());
// print_r(
//   http_build_query(
//     $_GET
//   )
// );
get_header(); ?>
<main class="main">
  <div class="main-content">
    <div class="content-left">

      <?php
      xshn_list_render();
      homePageXsmbRender();
      get_posts_block_phan_tich('Thống kê kết quả xổ số', 'homepage');
      homePageXsmnRender();
      homePageXsmtRender(); ?>
    </div>

    <?php

    get_sidebar('left');
    get_sidebar('right'); ?>

  </div>
</main>

<?php
get_footer();