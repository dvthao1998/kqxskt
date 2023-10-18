<?php
function kqxsmbTemplate($api, $h1 = 99, $title_thu = false)
{
  $dau_duoi_xsmb = array();
  global $_SLUG, $_SLUG_TAX;
  if (!empty($api) && isset($api)) {
    ?>
    <header class="section-header">
      <?php
      $today = 'ngày ' . formatDate($api['ngay']);
      if ($title_thu) {
        if (get_option('_transient_api_kqxs_mien_bac?ngay=' . $title_thu)) {
          $h1_check = 0;
        } else {
          $h1_check = 1;
        }

        if ($h1 == $h1_check) {
          echo '<h1>XSMB ' . weekDay($api['ngay']) . ' – KQ Xổ số miền Bắc ' . weekDay($api['ngay']) . ' hàng tuần</h1>';
        } else {
          echo '<h2>Xổ số Miền Bắc ' . $today . " (" . $api['ten_tinh'] . ")" . '</h2>';
        }
      } else {
        if (get_option('_transient_api_kqxs_mien_bac?ngay=' . date('Y-m-d'))) {
          $h1_check = 0;
        } else {
          $h1_check = 1;
        }

        if ($h1 == $h1_check) {
          echo '<h1>Kết quả xổ số Miền Bắc (KQXS MB) ' . $today . ' - XSMB hôm nay</h1>';
        } else if ($h1 == 'homepage') {
          echo '<h2><a title="Kết quả Xổ số Miền Bắc (KQXS MB)" href="' . $_SLUG['xsmb'] . '">Kết quả xổ số Miền Bắc -
          KQXS MB </a></h2>';
        } else {
          echo '<h2 style="padding: 15px;">Kết quả xổ số Miền Bắc (KQXS MB) ' . $today . ' (' . $api['ten_tinh'] . ')</h2>';
        }
      }
      ?>
      <div class="site-link" id="kqLiveLink">
        <a tite="XSMB" href="<?= $_SLUG['xsmb']; ?>">XSMB</a>
        <a title="XSMB <?php echo weekDay($api['ngay']); ?>"
          href="<?php echo $_SLUG_TAX['xsmb'] . 'xsmb-' . genSlug(weekDay($api['ngay'])) . '/'; ?>">
          XSMB
          <?php echo weekDay($api['ngay']); ?>
        </a>
        <a title="XSMB <?php echo formatDate($api['ngay']); ?>"
          href="<?php echo $_SLUG['xsmb'] . '?ngay=' . genSlug(formatDate($api['ngay'])); ?>">XSMB
          <?php echo formatDate($api['ngay']); ?>
        </a>
        <?php echo "(" . $api['ten_tinh'] . ")"; ?>
      </div>
    </header>
    <div class="section-content">
      <table class="table-result table-xsmb table-kqxs">
        <tbody>
          <tr>
            <th class="name-prize"></th>
            <td class="number-prize" id="mb_prizeCode">
              <?php
              $kytu = explode("-", $api['kytu']);

              foreach ($kytu as $item) {
                echo '<span class="code-DB' . count($kytu) . '" id="mb_prizeCode_item0">' . $item . '</span>';
              }
              ?>
            </td>
          </tr>
          <?php
          global $giaiXoSo;
          foreach ($giaiXoSo as $key => $giai) { ?>
            <tr>
              <th>
                <?php echo $giai; ?>
              </th>
              <td>
                <?php
                foreach ($api as $keyCon => $value) {
                  if ($keyCon == $key) {
                    foreach ($value as $so) {
                      echo '<span id="mb_prizeDB_item' . $giai . '" class="prize' . $giai . '" data-loto="' . $so . '" >' . $so . '</span>';
                      array_push($dau_duoi_xsmb, $so);
                    }
                  }
                }
                ?>
              </td>
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
      <?php echo first_end_list($dau_duoi_xsmb); ?>
    </div>
  <?php }
  if ($h1 == $h1_check) {
    get_posts_block_phan_tich('Thống kê KQXS miền Bắc - Xổ số miền Bắc', 'thong-ke-xsmb');
  }
}