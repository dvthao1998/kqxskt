<?php
function kqxsmtTemplate($api, $h1 = 99, $title_thu = false)
{
  global $_SLUG, $giaiXoSoMT, $_SLUG_TINH, $_SLUG_TAX;

  if (!empty($api) && isset($api)) {
    ?>

    <header class="section-header">
      <?php
      $today = 'ngày ' . formatDate($api[0]['ngay']);
      if ($title_thu) {
        if (get_option('_transient_api_kqxs_mien_trung?ngay=' . $title_thu)) {
          $h1_check = 0;
        } else {
          $h1_check = 1;
        }

        if ($h1 == $h1_check) {
          echo '<h1>XSMT ' . weekDay($api[0]['ngay']) . ' – KQ Xổ số miền Trung ' . weekDay($api[0]['ngay']) . ' hàng tuần</h1>';
        } else {
          echo '<h2>Xổ số Miền Trung (KQXS MT) ' . $today . '</h2>';
        }
      } else {

        if (get_option('_transient_api_kqxs_mien_trung?ngay=' . date('Y-m-d'))) {
          $h1_check = 0;
        } else {
          $h1_check = 1;
        }

        if ($h1 == $h1_check) {
          echo '<h1>Kết quả xổ số Miền Trung (KQXS MT) ' . $today . ' - XSMT hôm nay</h1>';
        } else if ($h1 == 'homepage') {
          echo '<h2><a title="Kết quả Xổ số Miền Trung (KQXS MT)" href="' . $_SLUG['xsmt'] . '">Kết quả xổ số Miền Trung -
          KQXS MT </a></h2>';
        } else {
          echo '<h2>Kết quả xổ số Miền Trung (KQXS MT) ' . $today . '</h2>';
        }
      }

      ?>
      <h3 class="site-link">
        <a tite="XSMT" href="<?= $_SLUG['xsmt']; ?>">XSMT</a>
        <a title="XSMB <?php echo weekDay($api[0]['ngay']); ?>"
          href="<?php echo $_SLUG_TAX['xsmt'] . 'xsmt-' . genSlug(weekDay($api[0]['ngay'])) . '/'; ?>">
          XSMT
          <?php echo weekDay($api[0]['ngay']); ?>
        </a>
        <a title="XSMT <?php echo formatDate($api[0]['ngay']); ?>"
          href="<?php echo $_SLUG['xsmt'] . '?ngay=' . genSlug(formatDate($api[0]['ngay'])); ?>">
          XSMT
          <?php echo formatDate($api[0]['ngay']); ?>
        </a>
      </h3>
    </header>
    <div class="section-content">
      <table class="table-result table-xsmt table-kqxs">
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
          foreach ($giaiXoSoMT as $giai => $giaiLabel) { ?>
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

          <?php } ?>
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
    <?php if ($h1 == $h1_check) {
      get_posts_block_phan_tich('Thống kê KQXS miền Trung - Xổ số miền Trung', 'thong-ke-xsmt');
    }
  }
}