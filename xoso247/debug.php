<?php
function renderXoSoData() //functions dùng để render các bài viết cần thiết cho trang web
{
  $menu_items2 = array(
    [
      'title' => 'Quy 361 định xổ số Test 11',
      'content' => 'Test COntent 1',
      'slug' => 'quydinhxoso-1-ba-viet',
      'excerpt' => 'Tóm tắt 1',
      'tax' => 'phan_tich_kqxs',
      'cate' => 355
    ],
    [
      'title' => 'Quy 361 định xổ số Test 22',
      'content' => 'Test COntent 2',
      'slug' => 'quydinhxoso-2-ba-viet',
      'excerpt' => 'Tóm tắt 2',
      'tax' => 'phan_tich_kqxs',
      'cate' => 355
    ],
    [
      'title' => 'Quy 361 định xổ số Test 33',
      'content' => 'Test COntent 3',
      'slug' => 'quydinhxoso-3-ba-viet',
      'excerpt' => 'Tóm tắt 3',
      'tax' => 'phan_tich_kqxs',
      'cate' => 356
    ],
    [
      'title' => 'Quy 361 định xổ số Test 44',
      'content' => 'Test COntent 4',
      'slug' => 'quydinhxoso-4-ba-viet',
      'excerpt' => 'Tóm tắt 4',
      'tax' => 'phan_tich_kqxs',
      'cate' => 356
    ],
    [
      'title' => 'Quy 361 định xổ số Test 55',
      'content' => 'Test COntent 5',
      'slug' => 'quydinhxoso-5-ba-viet',
      'excerpt' => 'Tóm tắt 5',
      'tax' => 'phan_tich_kqxs',
      'cate' => 357
    ],
    [
      'title' => 'Quy 361 định xổ số Test 66',
      'content' => 'Test COntent 6',
      'slug' => 'quydinhxoso-6-ba-viet',
      'excerpt' => 'Tóm tắt 6',
      'tax' => 'phan_tich_kqxs',
      'cate' => 357
    ],
    [
      'title' => 'Quy 361 định xổ số Test 77',
      'content' => 'Test COntent 7',
      'slug' => 'quydinhxoso-7-ba-viet',
      'excerpt' => 'Tóm tắt 7',
      'tax' => 'phan_tich_kqxs',
      'cate' => 358
    ],
    [
      'title' => 'Quy 361 định xổ số Test 88',
      'content' => 'Test COntent 8',
      'slug' => 'quydinhxoso-8-ba-viet',
      'excerpt' => 'Tóm tắt 8',
      'tax' => 'phan_tich_kqxs',
      'cate' => 358
    ],
  );
  foreach ($menu_items2 as $item) {
    $new_post_data = array(
      'post_title' => $item['title'],
      'post_content' => $item['content'],
      'post_status' => 'publish',
      'post_type' => 'post',
      'post_name' => $item['slug'],
      'post_author' => 1,
      'post_excerpt ' => $item['excerpt'],
    );

    // Hàm nhà làm - No WordPress
    // custom_post_exists($item['title'] . " " . $label );
    if (custom_post_exists($item['title']) == 0) {
      $post_id = wp_insert_post($new_post_data);
      if ($post_id) {
        // Thêm bài viết vào term có ID 361
        $term_ids = array(361); // ID của term bạn muốn thêm
        wp_set_post_terms($post_id, $term_ids, 'category'); // Thay 'taxonomy_name' bằng tên thực tế của loại taxonomy

        echo 'Bài viết mới đã được thêm vào term thành công. ID của bài viết là ' . $post_id;
      } else {
        echo 'Có lỗi xảy ra khi thêm bài viết.';
      }
    }




  }


}

// renderXoSoData();