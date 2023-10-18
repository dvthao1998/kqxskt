<?php

function render_template_phan_tich($query, $title)
{ ?>
  <section class="section">
    <header class="section-header">
      <h1>
        <?php echo $title; ?>
      </h1>
    </header>
    <div class="section-content">
      <?php
      if ($query->have_posts()) {
        while ($query->have_posts()) {
          $query->the_post();
          if ($query->current_post == 0) {
            ?>
            <article class="article-list">
              <?php if (has_post_thumbnail()) { ?>
                <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="thumb">
                  <?php
                  $thumbnail_url = get_the_post_thumbnail_url();
                  echo '<img src="' . esc_url($thumbnail_url) . '" alt="' . esc_attr(get_the_title()) . '" class="image"></a>';
              } ?>
                <header>
                  <h2 class="article-title first-news"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                      <?php the_title(); ?>
                    </a></h2>
                  <div class="article-summary">
                    <?php echo has_excerpt() ? the_excerpt() : wp_trim_words(get_the_content(), 30); ?>
                  </div>
                </header>
            </article>
          <?php }
          if ($query->current_post > 0) { ?>

            <article class="article-list">
              <header>
                <h2 class="article-title"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                    <?php the_title(); ?>
                  </a></h2>
              </header>
              <?php if (has_post_thumbnail()) { ?>
                <a class="article-image thumb200" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                  <?php
                  $thumbnail_url = get_the_post_thumbnail_url();
                  echo '<img src="' . esc_url($thumbnail_url) . '" alt="' . esc_attr(get_the_title()) . '" class="image lazy"></a>';
              } ?>
              </a>
              <div class="article-summary">
                <?php echo has_excerpt() ? the_excerpt() : wp_trim_words(get_the_content(), 30); ?>
              </div>
            </article>


          <?php }
        }
      } else {
        // Không tìm thấy bài viết nào
        echo 'Không có bài viết nào.';
      } ?>

    </div>
  </section>
<?php }

function render_list_phan_tich($query)
{ ?>
  <ul class="related-links">
    <?php
    if ($query->have_posts()) {
      while ($query->have_posts()) {
        $query->the_post(); ?>
        <li>
          <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
            <?php the_title(); ?>
          </a>
        </li>

      <?php }
    } ?>

  </ul>
  <?php
}

function get_posts_phan_tich($title)
{
  $default_posts_per_page = get_option('posts_per_page');
  $args = array(
    'post_type' => 'phantich',
    'post_status' => 'publish',
    'posts_per_page' => $default_posts_per_page,
    'paged' => get_query_var('paged')
  );

  $query = new WP_Query($args);
  render_template_phan_tich($query, $title);

  $pagination = paginate_links(
    array(
      'total' => $query->max_num_pages,
      'current' => max(1, get_query_var('paged')),
      'prev_text' => '«',
      'next_text' => '»',
    )
  );
  echo '<div class="pagination-wrapper">';
  echo $pagination;
  echo '</div>';

  wp_reset_postdata(); // Đặt lại trạng thái của truy vấn
}
;

function get_posts_phan_tich_and_term($term_id, $title = '', $list = false)
{
  $default_posts_per_page = get_option('posts_per_page');
  $args = array(
    'post_type' => 'phantich',
    'post_status' => 'publish',
    'posts_per_page' => $list ? 5 : $default_posts_per_page,
    !$list ? '' : 'post__not_in' => array(get_the_ID()),
    'paged' => get_query_var('paged'),
    'tax_query' => array(
      array(
        'taxonomy' => 'phan_tich_kqxs',
        'field' => 'id',
        'terms' => $term_id,
      ),
    ),
  );

  $query = new WP_Query($args);
  $list ? render_list_phan_tich($query) : render_template_phan_tich($query, $title);

  $pagination = paginate_links(
    array(
      'total' => $query->max_num_pages,
      'current' => max(1, get_query_var('paged')),
      'prev_text' => '«',
      'next_text' => '»',
    )
  );
  echo '<div class="pagination-wrapper">';
  echo $list ? '' : $pagination;
  echo '</div>';

  wp_reset_postdata(); // Đặt lại trạng thái của truy vấn
}
// gọi các bài phân tích lên trang chủ, xsmb,xsmn,....
function render_block_template_phan_tich($query, $title, $type = 'thong-ke-xsmb')
{ ?>
  <section class="section">
    <header class="section-header2">
      <h2>
        <a
          href="<?= $type !== 'homepage' ? get_menu_item_link('phan_tich_kqxs', $type) : get_post_type_archive_link('phantich'); ?>">
          <?= $title; ?>
        </a>
      </h2>
    </header>
    <div class="section-content">
      <ul class="post-news">
        <?php
        if ($query->have_posts()) {
          while ($query->have_posts()) {
            $query->the_post();
            if ($query->current_post == 0) {
              ?>
              <li>
                <?php if (has_post_thumbnail()) { ?>
                  <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="post-thumbnail thumb120">
                    <?php
                    $thumbnail_url = get_the_post_thumbnail_url();
                    echo '<img src="' . esc_url($thumbnail_url) . '" alt="' . esc_attr(get_the_title()) . '" class="image"></a>'; ?>
                  </a>
                <?php } ?>
                <h3 class="description"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                    <?php the_title(); ?>
                  </a></h3>
              </li>
            <?php } else { ?>
              <li>
                <div class="post-title2"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                    <?php the_title(); ?>
                  </a></div>
              </li>
              <?php
            }
          }
        } ?>
      </ul>
    </div>
    <div class="see-more">
      <a href="<?= $type !== 'homepage' ? get_menu_item_link('phan_tich_kqxs', $type) : get_post_type_archive_link('phantich'); ?>"
        title="Xem thêm Thống kê Kết quả xổ số">Xem thêm</a>
    </div>
  </section>
<?php }

function get_posts_block_phan_tich($title, $type = 'thong-ke-xsmb', )
{
  $term = get_term_by('slug', $type, 'phan_tich_kqxs');
  $tax_term = '';
  if ($type !== 'homepage') {
    $tax_term = array(
      array(
        'taxonomy' => 'phan_tich_kqxs',
        'field' => 'id',
        'terms' => $term,
      ),
    );
  }
  $args = array(
    'post_type' => 'phantich',
    'post_status' => 'publish',
    'posts_per_page' => 3,
    'tax_query' => $tax_term,
  );

  $query = new WP_Query($args);
  render_block_template_phan_tich($query, $title, $type);
  wp_reset_postdata();
}


// Dùng để gọi các bài viết có postype post cho tax tinxoso
function get_posts_tinxoso($title = '', $list = false)
{
  $default_posts_per_page = get_option('posts_per_page');
  $args = array(
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page' => $list ? 5 : $default_posts_per_page,
    'paged' => get_query_var('paged'),
    !$list ? '' : 'post__not_in' => array(get_the_ID()),

  );

  $query = new WP_Query($args);
  $list ? render_list_phan_tich($query) : render_template_phan_tich($query, $title);

  $pagination = paginate_links(
    array(
      'total' => $query->max_num_pages,
      'current' => max(1, get_query_var('paged')),
      'prev_text' => '«',
      'next_text' => '»',
    )
  );
  echo '<div class="pagination-wrapper">';
  echo $list ? '' : $pagination;
  echo '</div>';

  wp_reset_postdata(); // Đặt lại trạng thái của truy vấn
}

function get_posts_tinxoso_term($term_id, $title = '', $list = false)
{
  $default_posts_per_page = get_option('posts_per_page');
  $args = array(
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page' => $list ? 5 : $default_posts_per_page,
    'paged' => get_query_var('paged'),
    !$list ? '' : 'post__not_in' => array(get_the_ID()),
    'tax_query' => array(
      array(
        'taxonomy' => 'category',
        'field' => 'id',
        'terms' => $term_id,
      ),
    ),

  );

  $query = new WP_Query($args);
  $list ? render_list_phan_tich($query) : render_template_phan_tich($query, $title);

  $pagination = paginate_links(
    array(
      'total' => $query->max_num_pages,
      'current' => max(1, get_query_var('paged')),
      'prev_text' => '«',
      'next_text' => '»',
    )
  );
  echo '<div class="pagination-wrapper">';
  echo $list ? '' : $pagination;
  echo '</div>';

  wp_reset_postdata(); // Đặt lại trạng thái của truy vấn
}

function mau_ve_trung_thuong()
{
  $the_query = new WP_Query([
    // 's' => "MẪU VÉ TRÚNG THƯỞNG xổ số kiến thiết mới nhất",
    'name' => 'mau-ve-trung-thuong-xo-so-kien-thiet-moi-nhat',
    'post_status' => 'publish',
    'post_type' => 'post',
    'tax_query' => array(
      array(
        'taxonomy' => 'category',
        'field' => 'id',
        'terms' => 'quy-dinh-xo-so',
      ),
    ),
  ]);
  if ($the_query->have_posts()) {
    while ($the_query->have_posts()) {
      $the_query->the_post(); ?>
      <article class="the-article">
        <header class="the-article-header">
          <h1 class="the-article-title">
            <?php the_title(); ?>
          </h1>
        </header>
        <div class="the-article-content">
          <main class="main">
            <?php the_content(); ?>
          </main>
        </div>
      </article>
    <?php }
  } else {
    echo "Hiện chúng tôi chưa cập nhật quy định vé số";
  }
}

function get_posts_somo()
{
  $args = array(
    'post_type' => 'somo',
    'post_status' => 'publish',
    'posts_per_page' => 5,
    'post__not_in' => array(get_the_ID()),
  );

  $query = new WP_Query($args);
  render_list_phan_tich($query);
  wp_reset_postdata(); // Đặt lại trạng thái của truy vấn
}