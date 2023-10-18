<?php
// Thêm meta box cho custom post type
// function add_custom_fields_to_somo()
// {
//   // Thêm custom field "author" cho custom post type "somo"
//   add_post_type_support('somo', 'custom-fields');

//   // Đăng ký custom field "author"
//   register_meta(
//     'somo',
//     'tu_khoa',
//     array(
//       'show_in_rest' => false,
//       // Cho phép sử dụng trong REST API
//       'single' => true,
//       // Có thể có một giá trị duy nhất
//       'type' => 'string',
//       // Kiểu dữ liệu (string, integer, array, ...)
//     )
//   );
// }

// 2 field custom 
function add_custom_keyword_field_meta_box()
{
  add_meta_box(
    'custom-keyword-field',
    // ID của meta box (duy nhất)
    'Từ khóa sổ mơ (QUAN TRỌNG)',
    // Tiêu đề của meta box
    'render_custom_keyword_field',
    // Callback function để hiển thị nội dung của meta box
    'somo',
    // Tên của custom post type mà bạn muốn thêm meta box
    'side',
    // Vị trí hiển thị meta box (normal, advanced, hoặc side)
    'high' // Ưu tiên hiển thị meta box (default hoặc high)
  );
}
add_action('add_meta_boxes', 'add_custom_keyword_field_meta_box');

// Hiển thị nội dung của meta box
function render_custom_keyword_field($post)
{
  // Lấy giá trị từ khóa nếu có
  $custom_keyword = get_post_meta($post->ID, 'tu_khoa_so_mo', true);
  $custom_number = get_post_meta($post->ID, 'con_so_so_mo', true);

  // Hiển thị trường nhập từ khóa
  echo '<label for="custom_keyword">Từ khóa sổ mơ:</label>';
  echo '<input type="text" id="custom_keyword" name="custom_keyword" value="' . esc_attr($custom_keyword) . '" size="30" />';
  echo '<label for="custom_number">Con số giải mã:</label>';
  echo '<input type="text" id="custom_number" name="custom_number" value="' . esc_attr($custom_number) . '" size="30" />';
}

// Đăng ký các hàm vào hooks
function wporg_save_postdata($post_id)
{
  // Kiểm tra xem người dùng có quyền ghi dữ liệu
  if (!current_user_can('edit_post', $post_id)) {
    return;
  }

  // Kiểm tra xem có dữ liệu được gửi từ biểu mẫu không
  if (isset($_POST['custom_keyword']) && isset($_POST['custom_number'])) {
    // Lấy dữ liệu từ biểu mẫu và xử lý nó nếu cần
    $custom_keyword = sanitize_text_field($_POST['custom_keyword']);
    $custom_number = sanitize_text_field($_POST['custom_number']);

    // Lưu dữ liệu vào post_meta
    update_post_meta($post_id, 'tu_khoa_so_mo', $custom_keyword);
    update_post_meta($post_id, 'con_so_so_mo', $custom_number);
  } else {
    // Nếu không có dữ liệu gửi từ biểu mẫu, bạn có thể xóa post_meta nếu cần
    delete_post_meta($post_id, 'tu_khoa_so_mo');
    delete_post_meta($post_id, 'con_so_so_mo');
  }
}
add_action('save_post', 'wporg_save_postdata');