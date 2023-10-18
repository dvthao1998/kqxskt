<?php
function kqxs_mega_template_homepage($api)
{
  if (!empty($api) && isset($api)) {
    ?>

    <section class="section">
      <header class="section-header">
        <h2>Xổ số Mega 6/45 ngày
          <?php echo formatDate($api['ngay']); ?>
        </h2>
        <h3 class="site-link"><a title="XS Mega"
            href="<?php echo get_menu_item_link('vietlott', 'xo-so-tu-chon-mega-645'); ?>">XS Mega</a> <a
            title="XS Mega <?php echo weekDay($api['ngay']) ?>"
            href="<?php echo get_menu_item_link('vietlott', 'xo-so-tu-chon-mega-645') . '?thu=' . genSlug(weekDay($api['ngay'])); ?>">XS
            Mega
            <?php echo weekDay($api['ngay']) ?>
          </a> <a title="XS Mega <?php echo date('d/m/Y', strtotime($api['ngay'])); ?>"
            href="<?php echo get_menu_item_link('vietlott', 'xo-so-tu-chon-mega-645') . '?ngay=' . date('d-m-Y', strtotime($api['ngay'])); ?>">XS
            Mega
            <?php echo formatDate($api['ngay']); ?>
          </a></h3>
      </header>
      <div class="section-content">
        <div class="mega-results">
          <div class="jackpot-item font-Jackpot">Jackpot Mega 6/45 ước tính</div>
          <div class="jackpot-item"><span class="jackpot-bonus-vnd">
              <?php echo number_format($api['jackpot_gia_tri'], 0, '.', '.'); ?>
            </span></div>
          <div class="jackpot-item">Kỳ quay thưởng: <strong>#
              <?php echo $api['ky_ve']; ?>
            </strong></div>
          <div class="jackpot-item">
            <?php
            foreach ($api['ket_qua'] as $giai) {
              echo '<span class="btn-results">' . $giai . '</span> ';
            }
            ?>
          </div>
        </div>
        <div class="jackpot-item">
          <table class="table text-center">
            <thead>
              <tr>
                <th>Giải thưởng</th>
                <th>Trùng khớp</th>
                <th>Số lượng giải</th>
                <th>Giá trị giải (đồng)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jackpot</td>
                <td>O O O O O O</td>
                <td>
                  <?php echo $api['jackpot_sl'] ?>
                </td>
                <td>
                  <?php echo number_format($api['jackpot_gia_tri'], 0, '.', '.');
                  ?>
                </td>
              </tr>
              <tr>
                <td>Giải nhất</td>
                <td>O O O O O</td>
                <td>
                  <?php echo $api['giai_1_sl'] ?>
                </td>
                <td>
                  <?php echo number_format($api['giai_1_gia_tri'], 0, '.', '.');
                  ?>
                </td>
              </tr>
              <tr>
                <td>Giải nhì</td>
                <td>O O O O</td>
                <td>
                  <?php echo $api['giai_2_sl'] ?>
                </td>
                <td>
                  <?php echo number_format($api['giai_2_gia_tri'], 0, '.', '.');
                  ?>
                </td>
              </tr>
              <tr>
                <td>Giải ba</td>
                <td>O O O</td>
                <td>
                  <?php echo $api['giai_3_sl'] ?>
                </td>
                <td>
                  <?php echo number_format($api['giai_3_gia_tri'], 0, '.', '.');
                  ?>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

  <?php } else {
    echo "Hiện không có dữ liệu cho tùy chọn này.....";
  }
}

function kqxs_mega_template($api)
{
  if (!empty($api) && isset($api)) {
    ?>

    <section class="section">
      <header class="section-header">
        <h2>Xổ số Mega 6/45 <a title="Kết quả xổ số Power <?php echo weekDay($api['ngay']); ?>"
            href="<?php echo get_menu_item_link('vietlott', 'xo-so-tu-chon-mega-645') . '?thu=' . genSlug(weekDay($api['ngay'])); ?>">
            <?php echo weekDay($api['ngay']); ?>
          </a>, <a title="Kết quả xổ số Power ngày <?php echo date('d/m/Y', strtotime($api['ngay'])); ?>"
            href="<?php echo get_menu_item_link('vietlott', 'xo-so-tu-chon-mega-645') . '?ngay=' . date('d-m-Y', strtotime($api['ngay'])); ?>">
            <?php echo date('d/m/Y', strtotime($api['ngay'])); ?>
          </a></h2>

      </header>
      <div class="section-content">
        <div class="mega-results">
          <div class="jackpot-item">Kỳ quay thưởng: <strong>
              <?= '#' . $api['ky_ve']; ?>
            </strong></div>
          <div class="jackpot-item">
            <?php
            $i = 0;
            foreach ($api['ket_qua'] as $number) {
              echo '<span class="btn-results">' . $number . '</span>';
              $i++;
            }
            ?>
          </div>
        </div>
        <div class="jackpot-item">
          <table class="table text-center">
            <thead>
              <tr>
                <th>Giải thưởng</th>
                <th>Trùng khớp</th>
                <th>Số lượng giải</th>
                <th>Giá trị giải (đồng)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jackpot </td>
                <td>O O O O O O</td>
                <td>
                  <?php echo $api['jackpot_sl'] ?>
                </td>
                <td>
                  <?php echo number_format($api['jackpot_gia_tri'], 0, '.', '.'); ?>
                </td>
              </tr>
              <tr>
                <td>Giải nhất</td>
                <td>O O O O O</td>
                <td>
                  <?php echo $api['giai_1_sl'] ?>
                </td>
                <td>
                  <?php echo number_format($api['giai_1_gia_tri'], 0, '.', '.'); ?>
                </td>
              </tr>
              <tr>
                <td>Giải nhì</td>
                <td>O O O O</td>
                <td>
                  <?php echo $api['giai_2_sl'] ?>
                </td>
                <td>
                  <?php echo number_format($api['giai_2_gia_tri'], 0, '.', '.'); ?>
                </td>
              </tr>
              <tr>
                <td>Giải ba</td>
                <td>O O O</td>
                <td>
                  <?php echo $api['giai_3_sl'] ?>
                </td>
                <td>
                  <?php echo number_format($api['giai_3_gia_tri'], 0, '.', '.'); ?>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

  <?php } else {
    echo "Hiện không có dữ liệu cho tùy chọn này.....";
  }
}