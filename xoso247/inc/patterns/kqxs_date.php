<?php
$arr_kqxs_date_xsmb = array(
  "xsmb-thu-2" => "Thứ 2",
  "xsmb-thu-3" => "Thứ 3",
  "xsmb-thu-4" => "Thứ 4",
  "xsmb-thu-5" => "Thứ 5",
  "xsmb-thu-6" => "Thứ 6",
  "xsmb-thu-7" => "Thứ 7",
  "xsmb-chu-nhat" => "Chủ Nhật",
);
$arr_kqxs_date_xsmn = array(
  "xsmn-thu-2" => "Thứ 2",
  "xsmn-thu-3" => "Thứ 3",
  "xsmn-thu-4" => "Thứ 4",
  "xsmn-thu-5" => "Thứ 5",
  "xsmn-thu-6" => "Thứ 6",
  "xsmn-thu-7" => "Thứ 7",
  "xsmn-chu-nhat" => "Chủ Nhật",
);
$arr_kqxs_date_xsmt = array(
  "xsmt-thu-2" => "Thứ 2",
  "xsmt-thu-3" => "Thứ 3",
  "xsmt-thu-4" => "Thứ 4",
  "xsmt-thu-5" => "Thứ 5",
  "xsmt-thu-6" => "Thứ 6",
  "xsmt-thu-7" => "Thứ 7",
  "xsmt-chu-nhat" => "Chủ Nhật",
);

function kqxs_date($type)
{
  global $arr_kqxs_date_xsmb, $_SLUG_TAX, $arr_kqxs_date_xsmn, $arr_kqxs_date_xsmt;
  if ($type == 'xsmb') { ?>
    <div class="section">
      <ul class="nav-panel">
        <li class="first-xs"><a class="active" href="<?php echo $_SLUG_TAX['xsmb']; ?>"><span class="p-xs">Miền Bắc</span>
            <span class="m-xs">XSMB</span></a>
        </li>
        <?php
        foreach ($arr_kqxs_date_xsmb as $slug => $label) {
          echo '
        <li><a href="' . $_SLUG_TAX['xsmb'] . $slug . '/"><span class="p-xs">' . $label . '</span> </a></li>
        ';
        }
        ?>
      </ul>
    </div>
  <?php } else if ($type == 'xsmn') { ?>
      <div class="section">
        <ul class="nav-panel">
          <li class="first-xs"><a class="active" href="<?php echo $_SLUG_TAX['xsmn']; ?>"><span class="p-xs">Miền Nam</span>
              <span class="m-xs">XSMN</span></a>
          </li>
          <?php
          foreach ($arr_kqxs_date_xsmn as $slug => $label) {
            echo '
        <li><a href="' . $_SLUG_TAX['xsmn'] . $slug . '/"><span class="p-xs">' . $label . '</span> </a></li>
        ';
          }
          ?>
        </ul>
      </div>
  <?php } else { ?>
      <div class="section">
        <ul class="nav-panel">
          <li class="first-xs"><a class="active" href="<?php echo $_SLUG_TAX['xsmt']; ?>"><span class="p-xs">Miền Trung</span>
              <span class="m-xs">XSMT</span></a>
          </li>
          <?php
          foreach ($arr_kqxs_date_xsmt as $slug => $label) {
            echo '
        <li><a href="' . $_SLUG_TAX['xsmt'] . $slug . '/"><span class="p-xs">' . $label . '</span> </a></li>
        ';
          }
          ?>
        </ul>
      </div>
  <?php }
}
// 
// ================= SỔ ĐẦU ĐUÔI (BẢNG THỨ) ==========================
$arr_so_dd_date_xsmb = array(
  "?thu=thu-2" => "Thứ 2",
  "?thu=thu-3" => "Thứ 3",
  "?thu=thu-4" => "Thứ 4",
  "?thu=thu-5" => "Thứ 5",
  "?thu=thu-6" => "Thứ 6",
  "?thu=thu-7" => "Thứ 7",
  "?thu=chu-nhat" => "Chủ Nhật",
);
$arr_so_dd_date_xsmn = array(
  "?thu=thu-2" => "Thứ 2",
  "?thu=thu-3" => "Thứ 3",
  "?thu=thu-4" => "Thứ 4",
  "?thu=thu-5" => "Thứ 5",
  "?thu=thu-6" => "Thứ 6",
  "?thu=thu-7" => "Thứ 7",
  "?thu=chu-nhat" => "Chủ Nhật",
);
$arr_so_dd_date_xsmt = array(
  "?thu=thu-2" => "Thứ 2",
  "?thu=thu-3" => "Thứ 3",
  "?thu=thu-4" => "Thứ 4",
  "?thu=thu-5" => "Thứ 5",
  "?thu=thu-6" => "Thứ 6",
  "?thu=thu-7" => "Thứ 7",
  "?thu=chu-nhat" => "Chủ Nhật",
);

function so_dd_date_board($type)
{
  global $arr_so_dd_date_xsmb, $_SLUG_TAX, $arr_so_dd_date_xsmn, $arr_so_dd_date_xsmt;
  if ($type == 'mb') { ?>
    <div class="section">
      <ul class="nav-panel">
        <li class="first-xs"><a class="active"
            href="<?php echo get_menu_item_link('sodauduoi', 'so-dau-duoi-mien-bac'); ?>"><span class="p-xs">Miền Bắc</span>
            <span class="m-xs">XSMB</span></a>
        </li>
        <?php
        foreach ($arr_so_dd_date_xsmb as $slug => $label) {
          echo '
        <li><a href="' . get_menu_item_link('sodauduoi', 'so-dau-duoi-mien-bac') . $slug . '"><span class="p-xs">' . $label . '</span> </a></li>
        ';
        }
        ?>
      </ul>
    </div>
  <?php } else if ($type == 'mn') { ?>
      <div class="section">
        <ul class="nav-panel">
          <li class="first-xs"><a class="active"
              href="<?php echo get_menu_item_link('sodauduoi', 'so-dau-duoi-mien-nam'); ?>"><span class="p-xs">Miền Nam</span>
              <span class="m-xs">XSMN</span></a>
          </li>
          <?php
          foreach ($arr_so_dd_date_xsmn as $slug => $label) {
            echo '
        <li><a href="' . get_menu_item_link('sodauduoi', 'so-dau-duoi-mien-nam') . $slug . '"><span class="p-xs">' . $label . '</span> </a></li>
        ';
          }
          ?>
        </ul>
      </div>
  <?php } else { ?>
      <div class="section">
        <ul class="nav-panel">
          <li class="first-xs"><a class="active"
              href="<?php echo get_menu_item_link('sodauduoi', 'so-dau-duoi-mien-trung'); ?>"><span class="p-xs">Miền
                Trung</span>
              <span class="m-xs">XSMT</span></a>
          </li>
          <?php
          foreach ($arr_so_dd_date_xsmt as $slug => $label) {
            echo '
        <li><a href="' . get_menu_item_link('sodauduoi', 'so-dau-duoi-mien-trung') . $slug . '"><span class="p-xs">' . $label . '</span> </a></li>
        ';
          }
          ?>
        </ul>
      </div>
  <?php }
}

// ===================== VIETLOTT =======================================
function vietlott_breadcrumb($type)
{
  if (isset($_GET) && !empty($_GET['thu'])) {
    $thu = $_GET['thu'];
  } else {
    $thu = false;
  }
  if ($type == 'homepage') {
    ?>
    <div class="section">
      <div class="menu-item4">
        <a class="active" title="Vietlott" href="<?= get_menu_item_link('vietlott', 'kqxs-vietlott') ?>">Vietlott</a>
        <a title="Mega 6/45" href="<?= get_menu_item_link('vietlott', 'xo-so-tu-chon-mega-645') ?>">Mega 6/45</a>
        <a title="Power 6/55" href="<?= get_menu_item_link('vietlott', 'xo-so-tu-chon-power-655') ?>">Power 6/55</a>
        <a title="Max 3D" href="<?= get_menu_item_link('vietlott', 'xo-so-max-3d') ?>">Max 3D</a>
      </div>
    </div>
  <?php } else if ($type == 'mega') { ?>
      <div class="section">
        <div class="menu-item4">
          <a <?= !$thu ? 'class="active"' : '' ?> title="Mega 6/45"
            href="<?= get_menu_item_link('vietlott', 'xo-so-tu-chon-mega-645') ?>">Mega
            6/45</a>
          <a <?= $thu === 'thu-4' ? 'class="active"' : '' ?> title="Mega 6/45 Thứ 4"
            href="<?= get_menu_item_link('vietlott', 'xo-so-tu-chon-mega-645') . '?thu=thu-4' ?>">Thứ
            4</a>
          <a <?= $thu === 'thu-6' ? 'class="active"' : '' ?> title="Mega 6/45 Thứ 6"
            href="<?= get_menu_item_link('vietlott', 'xo-so-tu-chon-mega-645') . '?thu=thu-6' ?>">Thứ
            6</a>
          <a <?= $thu === 'chu-nhat' ? 'class="active"' : '' ?> title="Mega 6/45 Chủ Nhật"
            href="<?= get_menu_item_link('vietlott', 'xo-so-tu-chon-mega-645') . '?thu=chu-nhat' ?>">Chủ
            Nhật</a>
        </div>
      </div>
  <?php } else if ($type == 'power') { ?>
        <div class="section">
          <div class="menu-item4">
            <a <?= !$thu ? 'class="active"' : '' ?> title="Power 6/55"
              href="<?= get_menu_item_link('vietlott', 'xo-so-tu-chon-power-655') ?>">Power
              6/55</a>
            <a <?= $thu === 'thu-3' ? 'class="active"' : '' ?> title="Power 6/55 Thứ 3"
              href="<?= get_menu_item_link('vietlott', 'xo-so-tu-chon-power-655') . '?thu=thu-3' ?>">Thứ 3</a>
            <a <?= $thu === 'thu-5' ? 'class="active"' : '' ?> title="Power 6/55 Thứ 5"
              href="<?= get_menu_item_link('vietlott', 'xo-so-tu-chon-power-655') . '?thu=thu-5' ?>">Thứ 5</a>
            <a <?= $thu === 'thu-7' ? 'class="active"' : '' ?> title="Power 6/55 Thứ 7"
              href="<?= get_menu_item_link('vietlott', 'xo-so-tu-chon-power-655') . '?thu=thu-7' ?>">Thứ 7</a>
          </div>
        </div>
  <?php } else if ($type == 'max3d') { ?>
          <div class="section">
            <div class="menu-item4">
              <a <?= !$thu ? 'class="active"' : '' ?> title="Max 3D" href="<?= get_menu_item_link('vietlott', 'xo-so-max-3d') ?>">Max
                3D</a>
              <a <?= $thu === 'thu-2' ? 'class="active"' : '' ?> title="Max 3D Thứ 2"
                href="<?= get_menu_item_link('vietlott', 'xo-so-max-3d') . '?thu=thu-2' ?>">Thứ 2</a>
              <a <?= $thu === 'thu-4' ? 'class="active"' : '' ?> title="Max 3D Thứ 4"
                href="<?= get_menu_item_link('vietlott', 'xo-so-max-3d') . '?thu=thu-4' ?>">Thứ 4</a>
              <a <?= $thu === 'thu-6' ? 'class="active"' : '' ?> title="Max 3D Thứ 6"
                href="<?= get_menu_item_link('vietlott', 'xo-so-max-3d') . '?thu=thu-6' ?>">Thứ 6</a>
            </div>
          </div>
  <?php }
}