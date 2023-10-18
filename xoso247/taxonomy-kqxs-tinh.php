<?php
$current_page_id = get_queried_object_id(); // Lấy ID của trang hiện tại
if ($current_page_id) {
  $slug = get_term_field('slug', $current_page_id, 'kqxs-tinh');
  $data = implode("-", array_slice(explode("-", $slug), 2));
}

if (isset($_GET) && !empty($_GET['ngay'])) {
  $timestamp = strtotime($_GET['ngay']);
  // $ngay = $_GET['ngay'];
  $ngay_tinh = date("Y-m-d", $timestamp);
} else {
  $ngay_tinh = false;
}

get_header(); ?>
<main class="main">
  <div class="main-content">
    <?php renderBreadcrumb('Xổ số tỉnh'); ?>
    <div class="content-left">
      <?php
      if ($ngay_tinh) {
        // $api = api_kqxs_make_api_call($_API_URL['api_kqxs_mien_bac'] . "?ngay=" . $ngay);
        // echo $api['success'] == true ? kqxsmbTemplate($api['result']) : "Không có dữ liệu, vui lòng quay lại sau";
        dataXsTinhRenderSingle($data, $ngay_tinh);
      } else {
        dataXsTinhRender($data, genSlug(fewDaysAgo(22)), genSlug(fewDaysAgo(0)));
      }
      ?>
    </div>
    <?php
    get_sidebar('left');
    get_sidebar('right'); ?>
  </div>
</main>

<?php
get_footer(); ?>