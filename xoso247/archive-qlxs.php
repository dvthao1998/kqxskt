<?php
get_header(); ?>
<main class="main">
  <div class="main-content">
    <?php renderBreadcrumb('Xổ số tỉnh'); ?>
    <div class="content-left">
      <?php
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["select"]) && isset($_POST["from"]) && isset($_POST["to"])) {
          $fromDate = $_POST["from"];
          $toDate = $_POST["to"];
          $selected = $_POST["select"];

          $data = implode("-", array_slice(explode("-", $selected), 2));
          dataXsTinhRender($data, genSlug($fromDate), genSlug($toDate));
        } else {
          echo "Dữ liệu đang gặp sự cố, vui lòng quay lại sau 5 phút";
        }
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