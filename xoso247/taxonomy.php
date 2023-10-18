<?php
if (isset($_GET) && !empty($_GET['ngay'])) {
  $timestamp = strtotime($_GET['ngay']);
  // $ngay = $_GET['ngay'];
  $ngay = date("Y-m-d", $timestamp);
} else {
  $ngay = false;
}

$tax_label = '';
get_header(); ?>
<main class="main">
  <div class="main-content">
    <?php
    if (is_tax('xsmb')) {
      renderBreadcrumb('Xổ số miền Bắc');
    } else if (is_tax('xsmn')) {
      renderBreadcrumb('Xổ số miền Nam');
    } else {
      renderBreadcrumb('Xổ số miền Trung');
    }
    ?>
    <div class="content-left">
      <?php
      if (is_tax('xsmb')) {
        kqxs_date('xsmb');
      } else if (is_tax('xsmn')) {
        kqxs_date('xsmn');
      } else {
        kqxs_date('xsmt');
      }
      ?>

      <?php
      if (is_tax('xsmb')) {
        $tax_label = 'MB';
        // ====
        if (is_tax('xsmb', 'xsmb-theo-ngay')) {
          if ($ngay) {
            $api = api_kqxs_make_api_call($_API_URL['api_kqxs_mien_bac'] . "?ngay=" . $ngay);
            echo $api['success'] == true ? kqxsmbTemplate($api['result']) : "Không có dữ liệu, vui lòng quay lại sau";
          } else {
            if (get_option('_transient_api_kqxs_mien_bac?ngay=' . date('Y-m-d'))) {
              childDataXsmbRender(0, 7);
            } else {
              childDataXsmbRender(1, 7);
            }
          }
        } else if (is_tax('xsmb', 'xsmb-truc-tiep')) {
          get_template_part('live');
          // Nếu qua giờ xổ thì gọi của mình, trước giờ xổ thì gọi live
        } else {
          $term = get_queried_object()->slug;
          $thu = explode("-", $term)[1] . '-' . explode("-", $term)[2];
          thuDataXsmbRender($thu);
        }
        // =====
      
      } else if (is_tax('xsmn')) {
        $tax_label = 'MN';
        // ====
        if (is_tax('xsmn', 'xsmn-theo-ngay')) {
          if ($ngay) {
            $api = api_kqxs_make_api_call($_API_URL['api_kqxs_mien_nam'] . "?ngay=" . $ngay);
            echo $api['success'] == true ? kqxsmnTemplate($api['results']) : "Không có dữ liệu, vui lòng quay lại sau";
          } else {
            if (get_option('_transient_api_kqxs_mien_nam?ngay=' . date('Y-m-d'))) {
              childDataXsmnRender(0, 7);
            } else {
              childDataXsmnRender(1, 7);
            }
          }
        } else {
          $term = get_queried_object()->slug;
          $thu = explode("-", $term)[1] . '-' . explode("-", $term)[2];
          thuDataXsmnRender($thu);
        }
        // =====
      } else {
        $tax_label = 'MT';
        // ====
        if (is_tax('xsmt', 'xsmt-theo-ngay')) {
          if ($ngay) {
            $api = api_kqxs_make_api_call($_API_URL['api_kqxs_mien_trung'] . "?ngay=" . $ngay);
            echo $api['success'] == true ? kqxsmtTemplate($api['results']) : "Không có dữ liệu, vui lòng quay lại sau";
          } else {
            if (get_option('_transient_api_kqxs_mien_trung?ngay=' . date('Y-m-d'))) {
              childDataXsmtRender(0, 7);
            } else {
              childDataXsmtRender(1, 7);
            }
          }
        } else {
          $term = get_queried_object()->slug;
          $thu = explode("-", $term)[1] . '-' . explode("-", $term)[2];
          thuDataXsmtRender($thu);
        }
        // =====
      }

      if (!$ngay) { ?>
        <div id="ajax"></div>
        <div class="load-more">
          <button id="loadmore">Xem thêm KQXS
            <?= $tax_label; ?>
          </button>
        </div>

      <?php }
      if (is_tax('xsmb')) {
        co_cau_gt_mb();
      } else if (is_tax('xsmn')) {
        co_cau_gt_mn();
      } else {
        co_cau_gt_mt();
      }
      ?>
    </div>
    <?php

    get_sidebar('left');
    get_sidebar('right'); ?>
  </div>
</main>

<?php
get_footer();