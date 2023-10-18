<?php
function kqxs_max3d_template($api)
{ //homepage
  $max3d_arr = ['G.1' => 'giai_dac_biet', 'G.2' => 'giai_1', 'G.3' => 'giai_2', 'KK' => 'giai_3'];
  if (!empty($api) && isset($api)) {
    $result_board = array(
      'row1' => ['Giải thưởng', ['Kết quả'], 'Số lượng giải', 'Giá trị giải (đồng)'],
      'giai_dac_biet' => ['G.1', [], $api['sl_giai_dac_biet'], '1.000.000'],
      'giai_1' => ['G.2', [], $api['sl_giai_1'], '350.000'],
      'giai_2' => ['G.3', [], $api['sl_giai_2'], '210.000'],
      'giai_3' => ['KK', [], $api['sl_giai_3'], '100.000'],
    );
    ?>
    <section class="section">
      <header class="section-header">
        <h2><a
            href="<?php echo get_menu_item_link('vietlott', 'xo-so-max-3d') . '?thu=' . genSlug(weekDay($api['ngay'])); ?>">XS
            Max 3D
            <?= weekDay($api['ngay']) ?>
          </a>,
          <a
            href="<?php echo get_menu_item_link('vietlott', 'xo-so-max-3d') . '?ngay=' . date('d-m-Y', strtotime($api['ngay'])); ?>">
            <?php echo date('d/m/Y', strtotime($api['ngay'])); ?>
          </a>

        </h2>
      </header>
      <div class="section-content">
        <table class="table-result">
          <tbody>
            <?php
            foreach ($max3d_arr as $label => $giai) {
              echo '
                <tr>
                  <th class="name-prize">' . $label . '</th>
                    <td class="number-prize">';

              foreach ($api as $key => $kq) {
                if (is_array($kq) && $key == $giai) {
                  foreach ($kq as $number) {
                    $is_red = $label == 'G.1' ? 'color_red' : '';
                    echo '<span class="xs_prize' . count($kq) . ' ' . $is_red . '">' . $number . '</span>';
                    array_push($result_board[$giai][1], $number);
                  }
                }
              }
              echo '</td>
                </tr>
              ';
            }
            ?>
          </tbody>
        </table>
        <table class="table text-center">
          <tbody>
            <tr>
              <th colspan="4">Max3D</th>
            </tr>
            <?php
            foreach ($result_board as $row) { ?>
              <tr>
                <th>
                  <?= $row[0]; ?>
                </th>
                <th>
                  <?php foreach ($row[1] as $number) {
                    echo '<span>' . $number . '&nbsp;</span>';
                  }
                  ; ?>
                </th>
                <th>
                  <?= $row[2]; ?>
                </th>
                <th>
                  <?= $row[3]; ?>
                </th>
              </tr>
            <?php }
            ?>
          </tbody>
        </table>
      </div>
    </section>
    <?php
  }
}