<?php
function so_dau_duoi_mb_temp($api, $thu = '')
{
  if (!empty($api) && isset($api)) {
    echo '<section class="section">';
    ?>
    <header class="section-header">
      <h1>Sổ đầu đuôi MB
        <?php echo $thu; ?> - Sổ đầu đuôi miền Bắc
        <?php echo $thu; ?> hàng tuần
      </h1>
    </header>
    <div class="section-content">
      <div class="list-statistic">
        <table class="table text-center">
          <thead>
            <tr>
              <th>Ngày/Tháng</th>
              <th>Giải Bảy</th>
              <th>Đặc Biệt</th>
            </tr>
          </thead>
          <tbody style="float:unset">
            <?php
            foreach ($api as $ngay) { ?>
              <tr>
                <td><a title="XSMB ngày <?php echo date('d/m/Y', strtotime($ngay['ngay'])); ?>"
                    href="<?php echo get_menu_item_link('xsmb', 'xsmb-theo-ngay') . '?ngay=' . date('d-m-Y', strtotime($ngay['ngay'])); ?>">
                    <?php echo weekDay($ngay['ngay']); ?>,
                    <?php echo date('d/m/Y', strtotime($ngay['ngay'])); ?>
                  </a></td>
                <td class="pr7">
                  <?php
                  foreach ($ngay['giai7'] as $giai) {
                    echo $giai . ' ';
                  } ?>
                </td>
                <td class="prdb">
                  <?php
                  $lastTwoDigits = substr($ngay['giaidb'][0], -2);
                  $firstThreeDigits = substr($ngay['giaidb'][0], 0, 3);
                  echo $firstThreeDigits;
                  echo '<span class="color_red">';
                  echo $lastTwoDigits;
                  echo '</span>'; ?>
                </td>
              </tr>
            <?php }
            ?>

          </tbody>
        </table>
      </div>
    </div>
    <?php
    echo '</section>';
  }
}

function so_dau_duoi_mn_temp($api, $day = '')
{
  if (isset($api) && !empty($api)) {
    echo '<section class="section">';
    ?>
    <header class="section-header">
      <h1>Sổ đầu đuôi MN
        <?php echo $day ?> - Sổ đầu đuôi miền Nam
        <?php echo $day ?> hàng tuần
      </h1>
    </header>
    <div class="section-content">
      <div class="list-statistic">
        <table class="table text-center">
          <tbody style="float:unset">
            <?php
            foreach ($api as $ngay) { ?>
              <tr>
                <td>
                  <p><strong><a title="XSMN <?php echo weekDay($ngay[0]['ngay']); ?>" href="<?php
                     $thu = 'xsmn-' . genSlug(weekDay($ngay[0]['ngay']));
                     echo get_menu_item_link('xsmn', $thu); ?>">
                        <?php echo weekDay($ngay[0]['ngay']); ?>
                      </a></strong></p>
                  <p>
                    <a title="XSMN <?php echo date('d/m/Y', strtotime($ngay[0]['ngay'])); ?>"
                      href="<?php echo get_menu_item_link('xsmn', 'xsmn-theo-ngay') . "?ngay=" . date('d-m-Y', strtotime($ngay[0]['ngay'])); ?>">
                      <?php echo date('d/m/Y', strtotime($ngay[0]['ngay'])); ?>
                    </a>
                  </p>
                </td>
                <td>
                  <?php
                  foreach ($ngay as $tinh) { ?>

                    <div class="item_xs<?php echo count($ngay); ?>">
                      <p><a title="Xổ số <?php echo $tinh['ten_tinh'];
                      echo ' ' . date('d/m/Y', strtotime($ngay[0]['ngay'])); ?> "
                          href="<?php
                          $tinh_slug = 'xo-so-' . $tinh['tinh'];
                          echo get_menu_item_link('kqxs-tinh', $tinh_slug) . "?ngay=" . date('d-m-Y', strtotime($ngay[0]['ngay'])); ?>">
                          <?php echo $tinh['ten_tinh']; ?>
                        </a></p>
                      <p class="xs_font">
                        <?php echo $tinh['giai8'][0]; ?> −<span class="color_red">
                          <?php $lastTwoDigits = substr($tinh['giaidb'][0], -2);
                          echo $lastTwoDigits; ?>
                        </span>
                      </p>
                    </div>
                  <?php }
                  ?>
                </td>
              </tr>
            <?php }
            ?>
          </tbody>
        </table>
      </div>
    </div>
    <?php
    echo '</section>';
  }
}

function so_dau_duoi_mt_temp($api, $day = '')
{
  if (isset($api) && !empty($api)) {
    echo '<section class="section">';
    ?>
    <header class="section-header">
      <h1>Sổ đầu đuôi MT
        <?php echo $day ?> - Sổ đầu đuôi miền Trung
        <?php echo $day ?> hàng tuần
      </h1>
    </header>
    <div class="section-content">
      <div class="list-statistic">
        <table class="table text-center">
          <tbody style="float:unset">
            <?php
            foreach ($api as $ngay) { ?>
              <tr>
                <td>
                  <p><strong><a title="XSMN <?php echo weekDay($ngay[0]['ngay']); ?>" href="<?php
                     $thu = 'xsmn-' . genSlug(weekDay($ngay[0]['ngay']));
                     echo get_menu_item_link('xsmn', $thu); ?>">
                        <?php echo weekDay($ngay[0]['ngay']); ?>
                      </a></strong></p>
                  <p>
                    <a title="XSMN <?php echo date('d/m/Y', strtotime($ngay[0]['ngay'])); ?>"
                      href="<?php echo get_menu_item_link('xsmn', 'xsmn-theo-ngay') . "?ngay=" . date('d-m-Y', strtotime($ngay[0]['ngay'])); ?>">
                      <?php echo date('d/m/Y', strtotime($ngay[0]['ngay'])); ?>
                    </a>
                  </p>
                </td>
                <td>
                  <?php
                  foreach ($ngay as $tinh) { ?>

                    <div class="item_xs<?php echo count($ngay); ?>">
                      <p><a title="Xổ số <?php echo $tinh['ten_tinh'];
                      echo ' ' . date('d/m/Y', strtotime($ngay[0]['ngay'])); ?> "
                          href="<?php
                          $tinh_slug = 'xo-so-' . $tinh['tinh'];
                          echo get_menu_item_link('kqxs-tinh', $tinh_slug) . "?ngay=" . date('d-m-Y', strtotime($ngay[0]['ngay'])); ?>">
                          <?php echo $tinh['ten_tinh']; ?>
                        </a></p>
                      <p class="xs_font">
                        <?php echo $tinh['giai8'][0]; ?> −<span class="color_red">
                          <?php $lastTwoDigits = substr($tinh['giaidb'][0], -2);
                          echo $lastTwoDigits; ?>
                        </span>
                      </p>
                    </div>
                  <?php }
                  ?>
                </td>
              </tr>
            <?php }
            ?>
          </tbody>
        </table>
      </div>
    </div>
    <?php
    echo '</section>';
  }
}