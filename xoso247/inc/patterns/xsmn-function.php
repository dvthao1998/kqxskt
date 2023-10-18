<?php

function kqxsmnTemplate($api, $h1 = 99, $title_thu = false)
{
  global $_SLUG, $_SLUG_TAX, $giaiXoSoMN, $_SLUG_TINH;
  if (!empty($api) && isset($api)) {
    ?>
    <header class="section-header">
      <?php
      $today = 'ngày ' . formatDate($api[0]['ngay']);
      if ($title_thu) {
        if (get_option('_transient_api_kqxs_mien_nam?ngay=' . $title_thu)) {
          $h1_check = 0;
        } else {
          $h1_check = 1;
        }

        if ($h1 == $h1_check) {
          echo '<h1>XSMN ' . weekDay($api[0]['ngay']) . ' – KQ Xổ số miền Nam ' . weekDay($api[0]['ngay']) . ' hàng tuần</h1>';
        } else {
          echo '<h2>Xổ số Miền Nam (KQXS MN) ' . $today . '</h2>';
        }
      } else {
        if (get_option('_transient_api_kqxs_mien_nam?ngay=' . date('Y-m-d'))) {
          $h1_check = 0;
        } else {
          $h1_check = 1;
        }

        if ($h1 == $h1_check) {
          echo '<h1>Kết quả xổ số Miền Nam (KQXS MN) ' . $today . ' - XSMN hôm nay</h1>';
        } else if ($h1 == 'homepage') {
          echo '<h2><a title="Kết quả Xổ số Miền Nam (KQXS MN)" href="' . $_SLUG['xsmn'] . '">Kết quả xổ số Miền Nam -
          KQXS MN </a></h2>';
        } else {
          echo '<h2>Kết quả xổ số Miền Nam (KQXS MN) ' . $today . '</h2>';
        }
      }
      ?>

      <h3 class="site-link" id="kqLiveLink">
        <a tite="XSMN" href="<?= $_SLUG['xsmn']; ?>">XSMN</a>
        <a title="XSMB <?php echo weekDay($api[0]['ngay']); ?>"
          href="<?php echo $_SLUG_TAX['xsmn'] . 'xsmn-' . genSlug(weekDay($api[0]['ngay'])) . '/'; ?>">
          XSMN
          <?php echo weekDay($api[0]['ngay']); ?>
        </a>
        <a title="XSMN <?php echo formatDate($api[0]['ngay']); ?>"
          href="<?php echo $_SLUG['xsmn'] . '?ngay=' . genSlug(formatDate($api[0]['ngay'])); ?>">
          XSMN
          <?php echo formatDate($api[0]['ngay']); ?>
        </a>


      </h3>

    </header>
    <div class="section-content">
      <table class="table-result table-xsmn table-kqxs">
        <thead>
          <tr>
            <th class="name-prize">G</th>
            <?php
            foreach ($api as $ten_tinh) {
              echo '
            <th class="prize-col' . count($api) . '"><a title="Xổ số ' . $ten_tinh['ten_tinh'] . '" href="' . $_SLUG_TINH . $ten_tinh["tinh"] . '/">' . $ten_tinh['ten_tinh'] . '</a></th>
              ';
            }
            ?>
            </th>
          </tr>
        </thead>
        <tbody>
          <?php
          foreach ($giaiXoSoMN as $giai => $giaiLabel) { ?>
            <tr>
              <th>
                <?php echo $giaiLabel; ?>
              </th>

              <?php
              foreach ($api as $tinh) {
                foreach ($tinh as $key => $value) {
                  if ($giai == $key) {
                    $class = "";
                    if ($giai == "giai8" or $giai == "giaidb") {
                      $class = "color_red";
                    }
                    ;
                    echo "<td>";
                    $xsmn = array();
                    foreach ($value as $xoso) {
                      echo '
                      <span id="DN_prize8_item0" class="xs_prize1 ' . $class . '" data-loto="' . $xoso . '" >' . $xoso . '</span>
                      ';

                    }
                    echo "</td>";
                  }
                }

              }
              ?>

            </tr>
          <?php }
          ?>
        </tbody>
      </table>
      <div class="div-table">
        <div class="config-item active" value="0">Đầy đủ</div>
        <div class="config-item" value="2">2 số</div>
        <div class="config-item" value="3">3 số</div>
        <div class="number-config" data-number="0">0</div>
        <div class="number-config" data-number="1">1</div>
        <div class="number-config" data-number="2">2</div>
        <div class="number-config" data-number="3">3</div>
        <div class="number-config" data-number="4">4</div>
        <div class="number-config" data-number="5">5</div>
        <div class="number-config" data-number="6">6</div>
        <div class="number-config" data-number="7">7</div>
        <div class="number-config" data-number="8">8</div>
        <div class="number-config" data-number="9">9</div>

      </div>
      <?php echo first_end_list_multi($api); ?>
    </div>
    <?php
    if ($h1 == $h1_check) {
      get_posts_block_phan_tich('Thống kê KQXS miền Nam - Sổ số miền Nam', 'thong-ke-xsmn');
    }
  }
}