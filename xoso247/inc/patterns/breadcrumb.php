<?php
function renderBreadcrumb($type, $third = '')
{
  echo '
    <div class="breadcrumb">
      <a title="Trang chủ" href="/">Trang chủ</a>';
  echo $third ? '<span>' . $third . '</span> / ' : '';
  echo '<span>' . $type . ' </span>
    </div>
  ';
}


function renderBreadcrumbVietlott()
{
  echo '
  <div class="section">
  <div class="menu-item4">
    <a class="active" title="Vietlott" href="/kqxs-vietlott-ket-qua-xo-so-vietlott.html">Vietlott</a> 
    <a title="Mega 6/45" href="/xo-so-tu-chon-mega-645.html">Mega 6/45</a> 
    <a title="Power 6/55" href="/xo-so-power-655.html">Power 6/55</a> 
    <a title="Max 3D" href="/xo-so-max-3d.html">Max 3D</a></div>
  </div>
  ';
}
;
?>