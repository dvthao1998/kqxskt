<?php
// print_r(get_queried_object()->term_id);
if (isset($_GET) && !empty($_GET['thu'])) {
  if (
    $_GET['thu'] == 'thu-2' or
    $_GET['thu'] == 'thu-3' or
    $_GET['thu'] == 'thu-4' or
    $_GET['thu'] == 'thu-5' or
    $_GET['thu'] == 'thu-6' or
    $_GET['thu'] == 'thu-7' or
    $_GET['thu'] == 'chu-nhat'
  ) {
    $thu = $_GET['thu'];
    $day = slug_to_text_for_day($thu);
  }
} else {
  $thu = false;
  $day = false;
}
get_header(); ?>
<main class="main">
  <div class="main-content">
    <?php //renderBreadcrumb('Xổ số miền Bắc'); ?>
    <div class="content-left">
      <?php
      //so_dau_duoi_mb_thu_temp(); 
      if (is_tax('sodauduoi', 'so-dau-duoi-mien-bac')) {
        so_dd_date_board('mb');
        isset($thu) && $thu ? thuDataSoDauDuoi_MBRender($thu, $day) : dataSoDauDuoi_MBRender();
      } else if (is_tax('sodauduoi', 'so-dau-duoi-mien-trung')) {
        so_dd_date_board('mt');
        isset($thu) && $thu ? thuDataSoDauDuoi_MTRender($thu, $day) : dataSoDauDuoi_MTRender();
      } else if (is_tax('sodauduoi', 'so-dau-duoi-mien-nam')) {
        so_dd_date_board('mn');
        isset($thu) && $thu ? thuDataSoDauDuoi_MNRender($thu, $day) : dataSoDauDuoi_MNRender();
      }

      if (is_tax('sodauduoi', 'so-dau-duoi-mien-bac')) {
        rule_so_dau_duoi_mb();
      } else if (is_tax('sodauduoi', 'so-dau-duoi-mien-trung')) {
        rule_so_dau_duoi_mt();
      } else if (is_tax('sodauduoi', 'so-dau-duoi-mien-nam')) {
        rule_so_dau_duoi_mn();
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