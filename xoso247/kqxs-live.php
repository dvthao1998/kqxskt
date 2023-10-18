<?php
//echo time(); 

function grab_live($url, $saveto)
{
  $curl = curl_init();

  curl_setopt_array(
    $curl,
    array(
      CURLOPT_URL => $url,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'GET',
    )
  );

  $raw = curl_exec($curl);
  $raw = str_replace(array('w_30', 'number_item1'), array('prize-col3', 'xs_prize1'), $raw);
  $raw = str_replace('...', '<img src="https://ketquaday.vn/Content/images/Loading_icon.gif">', $raw);

  curl_close($curl);
  if (file_exists($saveto)) {
    unlink($saveto);
  }
  $fp = fopen($saveto, 'x');
  fwrite($fp, $raw);
  fclose($fp);
  return $raw;
}

$_arr_kqxs = array('xsmb' => '1', 'xsmn' => '2', 'xsmt' => '3');
$_group_id = (array_key_exists($_GET['kq'], $_arr_kqxs)) ? $_arr_kqxs[$_GET['kq']] : 1;
if ($_group_id > 1) {
  $url = 'https://ketquaday.vn/Xsmn/GetTemplateLiveTN?LotteryGroupId=' . $_group_id;
  $saveto = 'live/' . $_GET['kq'] . '.html';
} else {
  $url = 'https://ketquaday.vn/Xsmb/GetTemplateLive?LotteryGroupId=1';
  $saveto = 'live/xsmb.html';
}


$_kqxs_html = grab_live($url, $saveto);


preg_match('/<h2[^>]*>(.*?)<\/h2>/s', $_kqxs_html, $_heading_1);
echo '<div id="h1"><h2>' . $_heading_1[1] . '</h2></div>';

preg_match_all('/<table[^>]*class="table[^>]*"[^>]*>(.*?)<\/table>/s', $_kqxs_html, $_kqxs_table);
$_result_html = '';
//print_r($_kqxs_table);
foreach ($_kqxs_table[0] as $_table_html) {
  $_result_html .= $_table_html;
}

preg_match_all('/<a[^>]*href="(.*?)" title="(.*?)">/s', $_result_html, $_kqxs_href);
//print_r($_kqxs_href[1]);
foreach ($_kqxs_href[1] as $_urls) {
  //$_kqxs_html = preg_replace ( "'href=\"/[^>]*?-xo-so-'si", 'href="https://xoso247.live/xo-so-tinh/xo-so-', $_kqxs_html ); 
  $_new_url = preg_replace("'/[^>]*?-xo-so-'si", 'https://xoso247.live/xo-so-tinh/xo-so-', $_urls) . '/';
  $_result_html = str_replace($_urls, $_new_url, $_result_html);
}
echo $_result_html;

?>
//$data = json_decode( $response, true);
//print_r($data);
?>