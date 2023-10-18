<?php
// Dùng để tạo bài viết quy định xổ số trúng thưởng tự động và lưu trong bản nháp
// ---->     inc/patterns/phan_tich_function.php -> mau_ve_trung_thuong()   ===== Check ở đây nếu thay đổi info của hàm

add_action('init', 'insert_post');
function insert_post()
{
  $new_post_data = array(
    'post_title' => 'MẪU VÉ TRÚNG THƯỞNG xổ số kiến thiết mới nhất',
    'post_content' => 'Tổng hợp các mẫu vé số mới nhất của ba miền, bao gồm: Mẫu vé trúng thưởng của 6 tỉnh thành miền Bắc, mẫu vé trúng thưởng của 21 tỉnh thành Miền Nam và mẫu vé kiểm tra đổi số trúng thưởng của 14 tỉnh thành Miền Trung. Cụ thể như sau:',
    'post_status' => 'draft',
    'post_type' => 'post',
    'post_name' => 'mau-ve-trung-thuong-xo-so-kien-thiet-moi-nhat',
  );

  // Hàm clone từ hàm post_exits của WP, vì nó ko cho dùng :D (lưu ở file functions.php)
  if (custom_post_exists('MẪU VÉ TRÚNG THƯỞNG xổ số kiến thiết mới nhất') == 0) {
    $post_id = wp_insert_post($new_post_data);
    if ($post_id) {
      $term = get_term_by('slug', 'quy-dinh-xo-so', 'category');
      $term_ids = array($term->term_id); // ID của term bạn muốn thêm
      wp_set_post_terms($post_id, $term_ids, 'category'); // Thay 'taxonomy_name' bằng tên thực tế của loại taxonomy

    } else {
      echo 'Có lỗi xảy ra khi thêm bài viết.';
    }
  }
}