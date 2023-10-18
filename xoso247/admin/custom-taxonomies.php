<?php
/** 
 * Function này dùng để tự tạo taxonomies và các terms của từng taxonomies 
 */

add_action('init', 'xoso_taxonomy');

function xoso_taxonomy()
{
  if (post_type_exists('qlxs')) {
    global $menu_items, $dataKqxs;
    // Tax of province
    $label_tinh = $labels = array(
      'name' => 'Kết quả xổ số tỉnh',
      'singular_name' => 'Kết quả xổ số tỉnh'
    );
    $args_tinh = array(
      'hierarchical' => true,
      'labels' => $label_tinh,
      'show_ui' => true,
      'query_var' => true,
      'rewrite' => array('slug' => 'xo-so-tinh'),
    );
    if (!taxonomy_exists('Kết quả xổ số tỉnh')) {
      register_taxonomy('kqxs-tinh', 'qlxs', $args_tinh);
      foreach ($dataKqxs as $slug => $label) {
        if (!term_exists($label, 'kqxs-tinh')) {
          // Nếu term chưa tồn tại, thì tạo nó
          wp_insert_term($label, 'kqxs-tinh', ["slug" => $slug]);
        }
      }
    }

    // Tax of menu
    foreach ($menu_items as $item) {

      if (!taxonomy_exists($item['title'])) {
        $labels = array(
          'name' => $item['title'],
          'singular_name' => $item['title']
        );

        $args = array(
          'hierarchical' => true,
          'labels' => $labels,
          'show_ui' => true,
          'query_var' => true,
          'rewrite' => array('slug' => $item['slug']),
        );

        register_taxonomy($item['type'], 'qlxs', $args);

        foreach ($item['sub'] as $slug => $label) {
          if (!term_exists($label, $item['type'])) {
            // Nếu term chưa tồn tại, thì tạo nó
            wp_insert_term($label, $item['type'], ["slug" => $slug]);
          }
        }
      }
    }

    // Term of post category 
    if (!term_exists('Tin xổ số mới nhất', 'category')) {
      wp_insert_term('Tin xổ số mới nhất', 'category', ["slug" => 'tin-xo-so-moi-nhat']);
    }
    if (!term_exists('Quy đinh xổ số', 'category')) {
      wp_insert_term('Quy đinh xổ số', 'category', ["slug" => 'quy-dinh-xo-so']);
    }

  }

}