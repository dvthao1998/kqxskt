<?php
// print_r(get_queried_object()->ID);
$post_id = get_queried_object()->ID;
$taxonomy = 'phan_tich_kqxs';
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
        <table class="table-result table-somo">
          <thead>
            <tr>
              <th>Bạn mơ thấy gì</th>
              <th>Các số tương ứng</th>
            </tr>
          </thead>
          <tbody>
            <?php
            // Lấy ID của bài viết đang hiển thị
            $post_id = get_the_ID();

            // Sử dụng get_post_meta để lấy giá trị từ các trường tùy chỉnh
            $custom_keyword = get_post_meta($post_id, 'tu_khoa_so_mo', true);
            $custom_number = get_post_meta($post_id, 'con_so_so_mo', true);

            // Hiển thị giá trị từ các trường tùy chỉnh
            ?>
            <tr>
              <td>
                <?php echo $custom_keyword ?>
              </td>
              <td>
                <?php echo $custom_number; ?>
              </td>
            </tr>
          </tbody>
        </table>
        <br>
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
              <?php get_posts_somo(); ?>
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