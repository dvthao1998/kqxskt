<?php
function xoso_post_type()
{
  if (!post_type_exists('qlxs')) {
    register_post_type(
      'qlxs',
      array(

        // 'show_in_rest' => true,
        // tác dụng cho phép hiển thị trong restAPI của WP khi truy vấn
        'supports' => array('title'),
        'public' => true,
        'labels' => array(
          'name' => 'QUẢN LÝ XỔ SỐ',
          'singular_name' => 'Quản Lý Xổ Số'
        ),
        "menu_icon" => "dashicons-admin-site-alt",
        'show_ui' => true,
        'has_archive' => true,
        'rewrite' => ['slug' => "kqxs"]
        // false là không hiện trên menu bar của admin dashboard
      )
    );
  }
  global $menu_items_post_type;
  $icon = ['dashicons-media-document', 'dashicons-list-view'];
  $ii = 0;
  foreach ($menu_items_post_type as $item) {
    register_post_type(
      $item['type'],
      array(
        'supports' => array('title', 'thumbnail', 'editor', 'excerpt'),
        'public' => true,
        'labels' => array(
          'name' => $item['label'],
          'singular_name' => $item['title'],
        ),
        "menu_icon" => $icon[$ii],
        'show_ui' => true,
        'has_archive' => true,
        'rewrite' => ['slug' => $item['slug']]
      )
    );
  }
  // =======
  if (!taxonomy_exists('Chuyên mục Phân tích')) {
    $labels = array(
      'name' => _x('Chuyên mục Phân tích', 'taxonomy general name', 'textdomain'),
      'singular_name' => _x('Chuyên mục Phân tích', 'taxonomy singular name', 'textdomain'),
      'search_items' => __('Tìm kiếm Chuyên mục', 'textdomain'),
      'all_items' => __('Tất cả Chuyên mục', 'textdomain'),
      'parent_item' => __('Chuyên mục cha', 'textdomain'),
      'parent_item_colon' => __('Chuyên mục cha:', 'textdomain'),
      'edit_item' => __('Sửa Chuyên mục', 'textdomain'),
      'update_item' => __('Cập nhật Chuyên mục', 'textdomain'),
      'add_new_item' => __('Thêm mới Chuyên mục', 'textdomain'),
      'new_item_name' => __('Tên Chuyên mục mới', 'textdomain'),
      'menu_name' => __('Chuyên mục Phân tích', 'textdomain'),
    );

    $args = array(
      'hierarchical' => true,
      // Nếu muốn chuyên mục chứa chuyên mục con, đặt giá trị này thành true.
      'labels' => $labels,
      'public' => true,
      'show_ui' => true,
      'show_admin_column' => true,
      'query_var' => true,
      'rewrite' => array('slug' => 'phan-tich-kqxs'),
      // Xác định đường dẫn URL cho chuyên mục.
    );
    register_taxonomy('phan_tich_kqxs', 'phantich', $args);
    global $menu_items_post_type;
    foreach ($menu_items_post_type['phantich']['sub'] as $slug => $label) {
      if (!term_exists($label, 'phan_tich_kqxs')) {
        // Nếu term chưa tồn tại, thì tạo nó
        wp_insert_term($label, 'phan_tich_kqxs', ["slug" => $slug]);
      }
    }
  }



}
;

add_action('init', 'xoso_post_type'); //Khơi tạo các post_types