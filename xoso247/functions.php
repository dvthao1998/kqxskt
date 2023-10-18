<?php


require get_template_directory() . '/inc/index-inc.php';
require get_template_directory() . '/admin/custom-taxonomies.php';
require get_template_directory() . '/admin/insert-post.php';

ajax_loadmore();

function web_name($capitalize = false)
{
  return $capitalize ? 'Xoso247.live' : 'xoso247.live';
}
function xoso_script()
{
  // wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js', array(), '');
  wp_enqueue_style('xoso-style', get_template_directory_uri() . '/style.css', array(), '1.2.0');
  wp_enqueue_script('high-light-script', get_template_directory_uri() . '/assets/js/hight_light.js', array('jquery'), '1.2.0');
  wp_enqueue_script('xoso-script', get_template_directory_uri() . '/script.js', array('jquery'), '1.2.0');
}


add_action("wp_enqueue_scripts", 'xoso_script');

function load_admin_style()
{
  wp_enqueue_style('admin_css', get_template_directory_uri() . '/custom-admin.css');
  wp_enqueue_script('my-admin-script', get_template_directory_uri() . '/assets/js/admin-script.js', array('jquery'), '1.0', true);
}
add_action('admin_enqueue_scripts', 'load_admin_style');

function xoso_feature()
{
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails', array('somo', 'phantich', 'post'));
  register_nav_menu('headerMenuLocation', 'Thanh Menu Máy Tính');
  register_nav_menu('headerMenuLocationMobile', 'Thanh Menu Điện Thoại');
  remove_theme_support('widgets-block-editor'); // xóa dạng widget block
}

add_action('after_setup_theme', 'xoso_feature');



// ----Add custom class into <li>

function custom_post_exists($title, $content = '', $date = '', $type = '', $status = '')
{
  global $wpdb;

  $post_title = wp_unslash(sanitize_post_field('post_title', $title, 0, 'db'));
  $post_content = wp_unslash(sanitize_post_field('post_content', $content, 0, 'db'));
  $post_date = wp_unslash(sanitize_post_field('post_date', $date, 0, 'db'));
  $post_type = wp_unslash(sanitize_post_field('post_type', $type, 0, 'db'));
  $post_status = wp_unslash(sanitize_post_field('post_status', $status, 0, 'db'));

  $query = "SELECT ID FROM $wpdb->posts WHERE 1=1";
  $args = array();

  if (!empty($date)) {
    $query .= ' AND post_date = %s';
    $args[] = $post_date;
  }

  if (!empty($title)) {
    $query .= ' AND post_title = %s';
    $args[] = $post_title;
  }

  if (!empty($content)) {
    $query .= ' AND post_content = %s';
    $args[] = $post_content;
  }

  if (!empty($type)) {
    $query .= ' AND post_type = %s';
    $args[] = $post_type;
  }

  if (!empty($status)) {
    $query .= ' AND post_status = %s';
    $args[] = $post_status;
  }

  if (!empty($args)) {
    return (int) $wpdb->get_var($wpdb->prepare($query, $args));
  }

  return 0;
}

// renderXoSoData(); // Chức năng tạo ra data danh mục xổ số


// ============ HÀM NÀY DÙNG ĐỂ CUSTOM CSS CỦA WP-ADMIN ========================
function add_custom_admin_styles()
{
  // Định dạng đường dẫn tới file CSS của bạn
  $css_file_url = get_template_directory_uri() . '/custom-admin-style.css';

  // Thêm CSS vào trang quản trị
  wp_enqueue_style('custom-admin-css', $css_file_url);
}

add_action('admin_enqueue_scripts', 'add_custom_admin_styles');
// =============================================================================
