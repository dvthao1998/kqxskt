<?php

function homePageXsmbRender()
{
  global $_API_URL;
  $today = genSlug(fewDaysAgo(1));
  if (date('H:i:s') > '18:30' && date('H:i:s') <= '18:55') {
    $data = api_kqxs_make_api_call($_API_URL['api_kqxs_mien_bac'] . '?ngay=' . genSlug(fewDaysAgo(0)));
    if (isset($data) && isset($data['success']) && $data['success'] == true) {
      $today = genSlug(fewDaysAgo(0));
    }
  } else if (date('H:i:s') > '18:55') {
    $today = genSlug(fewDaysAgo(0));
  }
  $set_Slug_MB = 'api_kqxs_mien_bac' . '?ngay=' . $today;
  $url = $_API_URL['api_kqxs_mien_bac'] . '?ngay=' . $today;
  $result = 'result';
  $api = cacheAPI_JSON_XS3M($set_Slug_MB, $url, $result);
  kqxsmbTemplate($api, 'homepage');
  echo "</br>";

}

function homePageXsmnRender()
{
  global $_API_URL;
  $today = genSlug(fewDaysAgo(1));
  if (date('H:i:s') > '16:25' && date('H:i:s') <= '16:45') {
    $data = api_kqxs_make_api_call($_API_URL['api_kqxs_mien_nam'] . '?ngay=' . genSlug(fewDaysAgo(0)));
    if (isset($data) && isset($data['success']) && $data['success'] == true) {
      $today = genSlug(fewDaysAgo(0));
    }
  } else if (date('H:i:s') > '16:45') {
    $today = genSlug(fewDaysAgo(0));
  }
  $set_Slug_MN = 'api_kqxs_mien_nam' . '?ngay=' . $today;
  $url = $_API_URL['api_kqxs_mien_nam'] . '?ngay=' . $today;
  $result = 'results';
  $api = cacheAPI_JSON_XS3M($set_Slug_MN, $url, $result);
  kqxsmnTemplate($api, 'homepage');
  echo "</br>";

}

function homePageXsmtRender()
{
  global $_API_URL;
  $today = genSlug(fewDaysAgo(1));
  if (date('H:i:s') > '17:30' && date('H:i:s') <= '17:45') {
    $data = api_kqxs_make_api_call($_API_URL['api_kqxs_mien_trung'] . '?ngay=' . genSlug(fewDaysAgo(0)));
    if (isset($data) && isset($data['success']) && $data['success'] == true) {
      $today = genSlug(fewDaysAgo(0));
    }
  } else if (date('H:i:s') > '17:45') {
    $today = genSlug(fewDaysAgo(0));
  }

  $set_Slug_MT = 'api_kqxs_mien_trung' . '?ngay=' . $today;
  $url = $_API_URL['api_kqxs_mien_trung'] . '?ngay=' . $today;
  $result = 'results';
  $api = cacheAPI_JSON_XS3M($set_Slug_MT, $url, $result);
  kqxsmtTemplate($api, 'homepage');
  echo "</br>";
}

// End of homepage function for rendering data



function childDataXsmbRender($fr = 0, $to = 7)
{
  global $_API_URL;
  foreach (range($fr, $to) as $i) {
    $set_Slug_MB = 'api_kqxs_mien_bac' . '?ngay=' . genSlug(fewDaysAgo($i));
    $url = $_API_URL['api_kqxs_mien_bac'] . '?ngay=' . genSlug(fewDaysAgo($i));
    $result = 'result';
    $api = cacheAPI_JSON_XS3M($set_Slug_MB, $url, $result);
    kqxsmbTemplate($api, $i);
    echo "</br>";
  }
}

function childDataXsmnRender($fr = 0, $to = 7)
{
  global $_API_URL;
  foreach (range($fr, $to) as $i) {
    $set_Slug_MN = 'api_kqxs_mien_nam' . '?ngay=' . genSlug(fewDaysAgo($i));
    $url = $_API_URL['api_kqxs_mien_nam'] . '?ngay=' . genSlug(fewDaysAgo($i));
    $result = 'results';
    $api = cacheAPI_JSON_XS3M($set_Slug_MN, $url, $result);
    kqxsmnTemplate($api, $i);
    echo "</br>";
  }
}

function childDataXsmtRender($fr = 0, $to = 7)
{
  global $_API_URL;
  foreach (range($fr, $to) as $i) {
    $set_Slug_MT = 'api_kqxs_mien_trung' . '?ngay=' . genSlug(fewDaysAgo($i));
    $url = $_API_URL['api_kqxs_mien_trung'] . '?ngay=' . genSlug(fewDaysAgo($i));
    $result = 'results';
    $api = cacheAPI_JSON_XS3M($set_Slug_MT, $url, $result);
    kqxsmtTemplate($api, $i);
    echo "</br>";
  }
}
// Thứ

function thuDataXsmbRender($thu, $multi_days = 1)
{
  global $_API_URL;
  $i = 0;
  foreach (many_weeks_day_ago($thu, $multi_days) as $ngay) {
    $set_Slug_MB = 'api_kqxs_mien_bac' . '?ngay=' . $ngay;
    $url = $_API_URL['api_kqxs_mien_bac'] . '?ngay=' . $ngay;
    $result = 'result';
    $api = cacheAPI_JSON_XS3M($set_Slug_MB, $url, $result);
    kqxsmbTemplate($api, $i, many_weeks_day_ago($thu, $multi_days)[0]);
    $i++;
    echo "</br>";
  }
}

function thuDataXsmnRender($thu, $multi_days = 1)
{
  global $_API_URL;
  $i = 0;
  foreach (many_weeks_day_ago($thu, $multi_days) as $ngay) {
    $set_Slug_MN = 'api_kqxs_mien_nam' . '?ngay=' . $ngay;
    $url = $_API_URL['api_kqxs_mien_nam'] . '?ngay=' . $ngay;
    $result = 'results';
    $api = cacheAPI_JSON_XS3M($set_Slug_MN, $url, $result);
    kqxsmnTemplate($api, $i, many_weeks_day_ago($thu, $multi_days)[0]);
    $i++;
    echo "</br>";
  }
}

function thuDataXsmtRender($thu, $multi_days = 1)
{
  global $_API_URL;
  $i = 0;
  foreach (many_weeks_day_ago($thu, $multi_days) as $ngay) {
    $set_Slug_MT = 'api_kqxs_mien_trung' . '?ngay=' . $ngay;
    $url = $_API_URL['api_kqxs_mien_trung'] . '?ngay=' . $ngay;
    $result = 'results';
    $api = cacheAPI_JSON_XS3M($set_Slug_MT, $url, $result);
    kqxsmtTemplate($api, $i, many_weeks_day_ago($thu, $multi_days)[0]);
    $i++;
    echo "</br>";
  }
}
// ======================================
function mega_vietlott_render($thu_arr = false)
{
  global $_API_URL;
  global $megaDates;
  $today = date('d-m-Y');
  if ($thu_arr) {
    foreach ($thu_arr as $ngay) {
      $set_Slug_mega = 'api_vietlott_mega' . '?ngay=' . $ngay;
      $url = $_API_URL['api_vietlott_mega'] . '?ngay=' . $ngay;
      $result = 'result';
      $api = cacheAPI_JSON_XS3M($set_Slug_mega, $url, $result);
      kqxs_mega_template($api);
    }
  } else {
    if (weekDay($today) === 'Thứ 4' or weekDay($today) === 'Thứ 6' or weekDay($today) === 'Chủ Nhật') {
      $set_Slug_mega = 'api_vietlott_mega' . '?ngay=' . genSlug(fewDaysAgo(0));
      $url = $_API_URL['api_vietlott_mega'] . '?ngay=' . genSlug(fewDaysAgo(0));
      $result = 'result';
      $api = cacheAPI_JSON_XS3M($set_Slug_mega, $url, $result);
      kqxs_mega_template($api);
    }
    foreach ($megaDates as $ngay) {
      $set_Slug_mega = 'api_vietlott_mega' . '?ngay=' . $ngay;
      $url = $_API_URL['api_vietlott_mega'] . '?ngay=' . $ngay;
      $result = 'result';
      $api = cacheAPI_JSON_XS3M($set_Slug_mega, $url, $result);
      kqxs_mega_template($api);
    }
  }
}
function power_vietlott_render($thu_arr = false)
{
  global $_API_URL;
  global $powerDates;
  $today = date('d-m-Y');
  if ($thu_arr) {
    foreach ($thu_arr as $ngay) {
      $set_Slug_power = 'api_vietlott_power' . '?ngay=' . $ngay;
      $url = $_API_URL['api_vietlott_power'] . '?ngay=' . $ngay;
      $result = 'result';
      $api = cacheAPI_JSON_XS3M($set_Slug_power, $url, $result);
      kqxs_power_template($api);
    }
  } else {
    if (weekDay($today) === 'Thứ 4' or weekDay($today) === 'Thứ 6' or weekDay($today) === 'Chủ Nhật') {
      $set_Slug_power = 'api_vietlott_power' . '?ngay=' . genSlug(fewDaysAgo(0));
      $url = $_API_URL['api_vietlott_power'] . '?ngay=' . genSlug(fewDaysAgo(0));
      $result = 'result';
      $api = cacheAPI_JSON_XS3M($set_Slug_power, $url, $result);
      kqxs_power_template($api);
    }
    foreach ($powerDates as $ngay) {
      $set_Slug_power = 'api_vietlott_power' . '?ngay=' . $ngay;
      $url = $_API_URL['api_vietlott_power'] . '?ngay=' . $ngay;
      $result = 'result';
      $api = cacheAPI_JSON_XS3M($set_Slug_power, $url, $result);
      kqxs_power_template($api);
    }
  }
}
function max3d_vietlott_render($thu_arr = false)
{
  global $_API_URL;
  global $max_3dDates;
  $today = date('d-m-Y');
  if ($thu_arr) {
    foreach ($thu_arr as $ngay) {
      $set_Slug_max_3d = 'api_vietlott_max3d' . '?ngay=' . $ngay;
      $url = $_API_URL['api_vietlott_max3d'] . '?ngay=' . $ngay;
      $result = 'result';
      $api = cacheAPI_JSON_XS3M($set_Slug_max_3d, $url, $result);
      kqxs_max3d_template($api);
    }
  } else {
    if (weekDay($today) === 'Thứ 3' or weekDay($today) === 'Thứ 5' or weekDay($today) === 'Thứ 7') {
      $set_Slug_power = 'api_vietlott_power' . '?ngay=' . genSlug(fewDaysAgo(0));
      $url = $_API_URL['api_vietlott_power'] . '?ngay=' . genSlug(fewDaysAgo(0));
      $result = 'result';
      $api = cacheAPI_JSON_XS3M($set_Slug_power, $url, $result);
      kqxs_max3d_template($api);
    }
    foreach ($max_3dDates as $ngay) {
      $set_Slug_max_3d = 'api_vietlott_max3d' . '?ngay=' . $ngay;
      $url = $_API_URL['api_vietlott_max3d'] . '?ngay=' . $ngay;
      $result = 'result';
      $api = cacheAPI_JSON_XS3M($set_Slug_max_3d, $url, $result);
      kqxs_max3d_template($api);
    }
  }
}
// +++++++++++++++++++++
function mega_vietlott_home_render($date = false)
{
  global $_API_URL;
  global $megaDates;
  $today = date('d-m-Y');
  if ($date) {
    $set_Slug_mega = 'api_vietlott_mega' . '?ngay=' . $date;
    $url = $_API_URL['api_vietlott_mega'] . '?ngay=' . $date;
    $result = 'result';
    $api = cacheAPI_JSON_XS3M($set_Slug_mega, $url, $result);
    kqxs_mega_template_homepage($api);
  } else {
    if (weekDay($today) === 'Thứ 4' or weekDay($today) === 'Thứ 6' or weekDay($today) === 'Chủ Nhật') {
      $set_Slug_mega = 'api_vietlott_mega' . '?ngay=' . genSlug(fewDaysAgo(0));
      $url = $_API_URL['api_vietlott_mega'] . '?ngay=' . genSlug(fewDaysAgo(0));
      $result = 'result';
      $api = cacheAPI_JSON_XS3M($set_Slug_mega, $url, $result);
      kqxs_mega_template_homepage($api);
    } else {
      $set_Slug_mega = 'api_vietlott_mega' . '?ngay=' . $megaDates[0];
      $url = $_API_URL['api_vietlott_mega'] . '?ngay=' . $megaDates[0];
      $result = 'result';
      $api = cacheAPI_JSON_XS3M($set_Slug_mega, $url, $result);
      kqxs_mega_template_homepage($api);
    }
  }
}
function power_vietlott_home_render($date = false)
{
  global $_API_URL;
  global $powerDates;
  $today = date('d-m-Y');
  if ($date) {
    $set_Slug_power = 'api_vietlott_power' . '?ngay=' . $date;
    $url = $_API_URL['api_vietlott_power'] . '?ngay=' . $date;
    $result = 'result';
    $api = cacheAPI_JSON_XS3M($set_Slug_power, $url, $result);
    kqxs_power_template_homepage($api);
  } else {

    if (weekDay($today) === 'Thứ 3' or weekDay($today) === 'Thứ 5' or weekDay($today) === 'Thứ 7') {
      $set_Slug_power = 'api_vietlott_power' . '?ngay=' . genSlug(fewDaysAgo(0));
      $url = $_API_URL['api_vietlott_power'] . '?ngay=' . genSlug(fewDaysAgo(0));
      $result = 'result';
      $api = cacheAPI_JSON_XS3M($set_Slug_power, $url, $result);
      kqxs_power_template_homepage($api);
    } else {
      $set_Slug_power = 'api_vietlott_power' . '?ngay=' . $powerDates[0];
      $url = $_API_URL['api_vietlott_power'] . '?ngay=' . $powerDates[0];
      $result = 'result';
      $api = cacheAPI_JSON_XS3M($set_Slug_power, $url, $result);
      kqxs_power_template_homepage($api);
    }
  }
}
function max3d_vietlott_home_render($date = false)
{
  global $_API_URL;
  global $max_3dDates;
  $today = date('d-m-Y');
  if ($date) {
    $set_Slug_max_3d = 'api_vietlott_max3d' . '?ngay=' . $date;
    $url = $_API_URL['api_vietlott_max3d'] . '?ngay=' . $date;
    $result = 'result';
    $api = cacheAPI_JSON_XS3M($set_Slug_max_3d, $url, $result);
    kqxs_max3d_template($api);
  } else {

    if (weekDay($today) === 'Thứ 2' or weekDay($today) === 'Thứ 4' or weekDay($today) === 'Thứ 6') {
      $set_Slug_max_3d = 'api_vietlott_max3d' . '?ngay=' . genSlug(fewDaysAgo(0));
      $url = $_API_URL['api_vietlott_max3d'] . '?ngay=' . genSlug(fewDaysAgo(0));
      $result = 'result';
      $api = cacheAPI_JSON_XS3M($set_Slug_max_3d, $url, $result);
      kqxs_max3d_template($api);
    } else {
      $set_Slug_max_3d = 'api_vietlott_max3d' . '?ngay=' . $max_3dDates[0];
      $url = $_API_URL['api_vietlott_max3d'] . '?ngay=' . $max_3dDates[0];
      $result = 'result';
      $api = cacheAPI_JSON_XS3M($set_Slug_max_3d, $url, $result);
      kqxs_max3d_template($api);
    }
  }
}
// ================================

function dataXsTinhRender($tinh, $from, $to)
{
  global $_API_URL;
  $set_Slug_tinh = 'api_kqxs_' . $tinh . 'ngay' . $from . '_' . $to;
  $url = $_API_URL["api_kqxs_list"] . '?tinh=' . $tinh . '&from=' . $from . '&to=' . $to;
  $result = 'results';
  $revrese = true;
  $api = cacheAPI_JSON_XS3M($set_Slug_tinh, $url, $result, $revrese);
  if (!empty($api)) {
    $i = 1;
    foreach ($api as $itemAPI) {
      kqxsTinhTemplate($itemAPI, $i);
      $i++;
    }
  }
}

function dataXsTinhRenderSingle($tinh, $date)
{
  global $_API_URL;
  $set_Slug_tinh = 'api_kqxs_' . $tinh . 'ngay=' . $date;
  $url = $_API_URL["api_kqxs_item"] . '?tinh=' . $tinh . '&ngay=' . $date;
  $result = 'result';
  $api = cacheAPI_JSON_XS3M($set_Slug_tinh, $url, $result);
  $i = 1;
  kqxsTinhTemplate($api, 1);
}