<?php
function kqxsTinhTemplate($api, $h1 = 0)
{
  $dau_duoi_xsmb = array();
  global $_SLUG, $_SLUG_TAX, $giaiXoSo, $giaiXoSoMN, $_SLUG_TINH;
  if (!empty($api) && isset($api)) {
    if ($api['loai'] == "mien-bac") { ?>
      <section class="section">
        <header class="section-header">
          <?php
          echo $h1 == 1 ? ' 
      <h1 style="padding: 15px;">Xổ số ' . $api['ten_tinh'] . ' ' . formatDate($api['ngay']) . '</h1>' : ' 
      <h2 style="padding: 15px;"><a title="Xổ số ' . $api['ten_tinh'] . ' ' . formatDate($api['ngay']) . '" 
      href="' . $_SLUG['xsmb'] . '?ngay=' . genSlug(formatDate($api['ngay'])) . '">Xổ số ' . $api['ten_tinh'] . ' ' . formatDate($api['ngay']) . '</a></h2>';
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
      <?php } else if ($api['loai'] == "mien-nam") { ?>
          <header class="section-header">
            <?php
            echo $h1 == 1 ? ' 
        <h1>Xổ số  ' . $api['ten_tinh'] . ' ngày ' . formatDate($api['ngay']) . '</h1>
        ' : ' 
        <h2><a title="Kết quả Xổ số Miền Nam (KQXS MN)" href="' . $_SLUG['xsmn'] . '">Xổ số  ' . $api['ten_tinh'] . ' ngày ' . formatDate($api['ngay']) . '</a></h2>'
            ;
            ?>
            <div id="ketquamnlivehead"></div>

            <h3 class="site-link" id="kqLiveLink">
              <a tite="XSMN" href="<?= $_SLUG['xsmn']; ?>">XSMN</a>
              <a title="XSMN <?php echo formatDate($api['ngay']); ?>"
                href="<?php echo $_SLUG_TINH . $api["tinh"] . '/' . '?ngay=' . genSlug(formatDate($api['ngay'])); ?>"> XS
              <?php echo $api['ten_tinh'] . ' ' . formatDate($api['ngay']); ?>
              </a>

            </h3>

          </header>
      <?php } else { ?>
          <header class="section-header">
            <?php
            echo ' 
      <h2><a title="Kết quả Xổ số Miền Trung (KQXS MT)" href="' . $_SLUG['xsmt'] . '">Kết quả Xổ số ' . $api['ten_tinh'] . ' ngày ' . formatDate($api['ngay']) . '</a></h2>
      ';
            ?>
            <div id="ketquamnlivehead"></div>
            <h3 class="site-link" id="kqLiveLink">
              <a tite="XSMT" href="<?= $_SLUG['xsmt']; ?>">XSMT</a>
              <a title="XS <?php echo $api['ten_tinh'] . ' ' . formatDate($api['ngay']); ?>"
                href="<?php echo $_SLUG_TINH . $api["tinh"] . '/' . '?ngay=' . genSlug(formatDate($api['ngay'])); ?>"> XS
              <?php echo $api['ten_tinh'] . ' ' . formatDate($api['ngay']); ?>
              </a>
            </h3>
          </header>
      <?php } ?>

      <table class="table-result table-xsmn table-kqxs">
        <tbody>
          <?php
          foreach ($api['loai'] == 'mien-bac' ? $giaiXoSo : $giaiXoSoMN as $giai => $giaiLabel) { ?>
            <tr>
              <th>
                <?php echo $giaiLabel; ?>
              </th>

              <?php
              foreach ($api as $key => $value) {
                if ($giai == $key) {
                  $class = "";
                  if ($api['loai'] == 'mien-bac' ? $giai == "giai7" : $giai == "giai8" or $giai == "giaidb") {
                    $class = "color_red";
                  }
                  ;
                  echo "<td>";
                  foreach ($value as $xoso) {
                    echo '
                      <span id="DN_prize8_item0" class="xs_prize' . count($value) . ' ' . $class . '" data-loto="' . $xoso . '" >' . $xoso . '</span>
                      ';
                    array_push($dau_duoi_xsmb, $xoso);
                  }
                  echo "</td>";
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
      <?php echo first_end_list($dau_duoi_xsmb); ?>

    </section>
  <?php } else {
    echo "Hiện không có dữ liệu cho tùy chọn này.....";
  }
}