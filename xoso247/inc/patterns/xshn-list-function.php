<?php
$today = weekDay(genSlug(fewDaysAgo(0)));
foreach ($lichQuay as $mien => $arr) {
  $arr_today[$mien] = array();
  foreach ($arr as $tinh) {
    if (in_array($today, $tinh['lichquay'])) {
      array_push($arr_today[$mien], $tinh['label']);
      // $arr_today[$mien][$tinh['key']] = $tinh['label'];
    }
  }
}
function xshn_list_render()
{
  global $lichQuay, $arr_today, $_SLUG;
  ?>

  <section class="section">
    <header class="section-header">
      <h1>Xổ số - Kết quả xổ số 3 miền - KQXS Hôm nay</h1>
    </header>
    <div class="section-content">
      <table class="lottery-today">
        <thead>
          <th><a href="<?= $_SLUG['xsmb']; ?>"><strong>XSMB</strong></a></th>
          <th><a href="<?= $_SLUG['xsmt']; ?>"><strong>XSMT</strong></a></th>
          <th><a href="<?= $_SLUG['xsmn']; ?>"><strong>XSMN</strong></a></th>
        </thead>
        <tbody>
          <?php
          $i = 0;
          foreach ($arr_today['mien-nam'] as $key => $label) {
            foreach ($arr_today as $mien => $tinh2) {
              if ($mien == 'mien-bac' && $i < count($arr_today['mien-bac'])) {
                echo '<td> <a href="' . site_url() . '/xo-so-tinh/xo-so-' . genSlug($arr_today['mien-bac'][$i]) . '/" >' . $arr_today['mien-bac'][$i] . '</a></td>';
              } else if ($mien == 'mien-nam' && $i < count($arr_today['mien-nam'])) {
                echo '<td> <a href="' . site_url() . '/xo-so-tinh/xo-so-' . genSlug($arr_today['mien-nam'][$i]) . '/" >' . $arr_today['mien-nam'][$i] . '</a></td>';
              } else if ($mien == 'mien-trung' && $i < count($arr_today['mien-trung'])) {
                echo '<td> <a href="' . site_url() . '/xo-so-tinh/xo-so-' . genSlug($arr_today['mien-trung'][$i]) . '/" >' . $arr_today['mien-trung'][$i] . '</a></td>';
              } else {
                echo '<td></td>';
              }
            }
            echo "</tr>";
            $i++;
          }

          ?>
        </tbody>
      </table>
    </div>
  </section>

  <?php
} ?>