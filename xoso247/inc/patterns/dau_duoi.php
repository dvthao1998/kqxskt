<?php



function first_end_list($_arr_number)
{
  $_arr_range = range(0, 9);
  $_html_digits = '<table class="table-loto" border="1">';
  $_html_digits .= '<thead><tr>
                  <th class="loto-name">Đầu</th><th class="loto-col2">Đuôi</th>
                  <th class="loto-col2">Đầu</th><th class="loto-name">Đuôi</th>
              </tr></thead>';
  $_html_digits .= '<tbody>';
  $i = 0;
  foreach ($_arr_range as $_num_list) {
    $_html_digits .= '<tr>';
    $_html_digits .= '<th>' . $_num_list . '</th>';

    $_first_html = '';
    $_end_html = '';

    foreach ($_arr_number as $is_2_digit) {
      $_first_number = substr(substr($is_2_digit, -2), 0, 1);
      $_end_number = substr(substr($is_2_digit, -2), -1);

      $_first_html .= ($_first_number == $_num_list ? $_end_number . ',' : '');
      $_end_html .= ($_end_number == $_num_list ? $_first_number . ',' : '');
    }

    $_html_digits .= '<td>' . rtrim($_first_html, ', ') . '</td>';
    $_html_digits .= '<td>' . rtrim($_end_html, ', ') . '</td>';
    $_html_digits .= '<td>' . $_num_list . '</td>';
    $_html_digits .= '</tr>';
    ++$i;
  }
  $_html_digits .= '</tbody></table>';

  return $_html_digits;
}

// +++++++++++++++++
function array_flatten($array)
{
  if (!is_array($array)) {
    return FALSE;
  }
  $result = array();
  foreach ($array as $key => $value) {
    if (is_array($value)) {
      $result = array_merge($result, array_flatten($value));
    } else {
      $result[$key] = $value;
    }
  }
  return $result;
}

function first_end_list_multi($api)
{
  $_giai_arr = array('giaidb', 'giai1', 'giai2', 'giai3', 'giai4', 'giai5', 'giai6', 'giai7', 'giai8');
  $_arr_range = range(0, 9);
  $arr = array();
  foreach ($api as $kqxs_tinh) {
    $result = '<th class="loto-col' . count($api) . '">' . $kqxs_tinh['ten_tinh'] . '</th>';
    array_push($arr, $result);
  }
  ;
  echo '<table class="table-loto" border="1"><thead><tr><th class="loto-name ">Đầu</th>' . implode("", $arr) . '</tr></thead><tbody>';

  $i = 0;
  foreach ($_arr_range as $_num_list) {
    echo '<tr>';
    echo '<th>' . $_num_list . '</th>';

    foreach ($api as $kqxs_tinh) {
      $_html_digits = '';
      $_first_html = '';
      $_arr_giai_tinh = array();
      foreach ($_giai_arr as $is_giai) {
        $_arr_giai_tinh[] = $kqxs_tinh[$is_giai];
      }
      foreach (array_flatten($_arr_giai_tinh) as $is_2_digit) {
        $_first_number = substr(substr($is_2_digit, -2), 0, 1);
        $_end_number = substr(substr($is_2_digit, -2), -1);

        $_first_html .= ($_first_number == $_num_list ? $_end_number . ',' : '');
      }
      $_html_digits .= '<td>' . rtrim($_first_html, ', ') . '</td>';
      echo $_html_digits;
    }
    echo '</tr>';
    ++$i;
  }
  echo '</tbody></table>';
}