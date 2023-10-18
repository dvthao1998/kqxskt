<?php
// print_r(get_queried_object());
// print_r(
//   http_build_query(
//     $_GET
//   )
// );
if (isset($_GET) && !empty($_GET['ngay'])) {
  $timestamp = strtotime($_GET['ngay']);
  // $ngay = $_GET['ngay'];
  $ngay = date("Y-m-d", $timestamp);
} else {
  $ngay = false;
}

if (isset($_GET) && !empty($_GET['thu'])) {
  $thu = $_GET['thu'];
} else {
  $thu = false;
}

get_header(); ?>
<main class="main">
  <div class="main-content">
    <?php renderBreadcrumb('Xổ số Vietlott'); ?>
    <div class="content-left">
      <?php
      if (is_tax('vietlott', 'xo-so-tu-chon-mega-645')) {
        vietlott_breadcrumb('mega');
        if ($ngay) {
          mega_vietlott_home_render($ngay);
        } else if ($thu === 'thu-4' or $thu === 'thu-6' or $thu === 'chu-nhat') {
          mega_vietlott_render(many_weeks_day_ago($thu));
        } else {
          mega_vietlott_render();
        }
      } else if (is_tax('vietlott', 'xo-so-tu-chon-power-655')) {
        vietlott_breadcrumb('power');
        if ($ngay) {
          power_vietlott_home_render($ngay);
        } else if ($thu === 'thu-3' or $thu === 'thu-5' or $thu === 'thu-7') {
          power_vietlott_render(many_weeks_day_ago($thu));
        } else {
          power_vietlott_render();
        }
      } else if (is_tax('vietlott', 'xo-so-max-3d')) {
        vietlott_breadcrumb('max3d');
        if ($ngay) {
          max3d_vietlott_home_render($ngay);
        } else if ($thu === 'thu-2' or $thu === 'thu-4' or $thu === 'thu-6') {
          max3d_vietlott_render(many_weeks_day_ago($thu));
        } else {
          max3d_vietlott_render();
        }
      } else if (is_tax('vietlott', 'ket-qua-xo-so-keno')) {
        vietlott_breadcrumb('homepage');
        echo "Chúng tôi đang cập nhật về tính năng xổ số KENO";
      } else {
        vietlott_breadcrumb('homepage');
        mega_vietlott_home_render();
        power_vietlott_home_render();
        max3d_vietlott_home_render();
      }
      // get_template_part('main-inc/content', 'ccgt-mb');
      ?>
    </div>
    <?php

    get_sidebar('left');
    get_sidebar('right'); ?>
  </div>
</main>

<?php
get_footer(); ?>