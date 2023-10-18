<?php
function thuDataSoDauDuoi_MBRender($thu, $day)
{
  global $_API_URL;
  $set_Slug_MB_thu = 'api_kqxs_thu_' . $thu . '_mb' . '_' . ngay_thu_gan_nhat($thu);
  $url = $_API_URL['api_kqxs_thu'] . '?thu=' . $thu . '&mien=mien-bac';
  $result = 'results';
  $api = cacheAPI_JSON_XS3M($set_Slug_MB_thu, $url, $result);
  if (!empty($api)) {
    so_dau_duoi_mb_temp(array_reverse($api), $day);
  }
}

function dataSoDauDuoi_MBRender()
{
  global $_API_URL;
  $current = genSlug(fewDaysAgo(1));
  if (date('H:i:s') > '18:30') {
    $data = api_kqxs_make_api_call($_API_URL['api_kqxs_mien_bac'] . '?ngay=' . genSlug(fewDaysAgo(0)));
    if (isset($data['success']) && $data['success'] == true) {
      $current = genSlug(fewDaysAgo(0));
    }
  }
  $set_sdd_Slug_MB = 'api_kqxs_list_mien_bac' . '?to=' . $current;
  $url = $_API_URL['api_kqxs_list_mien_bac'] . '?from=' . genSlug(fewDaysAgo(30)) . '&to=' . $current;
  $result = 'results';
  $api = cacheAPI_JSON_XS3M($set_sdd_Slug_MB, $url, $result);
  if (!empty($api)) {
    so_dau_duoi_mb_temp(array_reverse($api));
  }
  echo "</br>";

}

// =============== MIỀN NAM ==========================

function thuDataSoDauDuoi_MNRender($thu, $day)
{
  global $_API_URL;
  $set_Slug_MN_thu = 'api_kqxs_thu_' . $thu . '_mn' . '_' . ngay_thu_gan_nhat($thu);
  $url = $_API_URL['api_kqxs_thu'] . '?thu=' . $thu . '&mien=mien-nam';
  $result = 'results';
  $api = cacheAPI_JSON_XS3M($set_Slug_MN_thu, $url, $result);
  if (!empty($api)) {
    so_dau_duoi_mn_temp($api, $day);
  }
}

function dataSoDauDuoi_MNRender()
{
  global $_API_URL;
  $current = genSlug(fewDaysAgo(1));
  if (date('H:i:s') > '16:25') {
    $data = api_kqxs_make_api_call($_API_URL['api_kqxs_mien_nam'] . '?ngay=' . genSlug(fewDaysAgo(0)));
    if (isset($data['success']) && $data['success'] == true) {
      $current = genSlug(fewDaysAgo(0));
    }
  }
  $set_sdd_Slug_MN = 'api_kqxs_list_mien_nam' . '?to=' . $current;
  $url = $_API_URL['api_kqxs_list_mien_nam'] . '?from=' . genSlug(fewDaysAgo(30)) . '&to=' . $current;
  $result = 'results';
  $api = cacheAPI_JSON_XS3M($set_sdd_Slug_MN, $url, $result);
  if (!empty($api)) {
    so_dau_duoi_mn_temp($api, false);
  }
  echo "</br>";

}

// ++++++++++++ MIỀN TRUNG +++++++++++++++++++++++++++

function thuDataSoDauDuoi_MTRender($thu, $day)
{
  global $_API_URL;
  $set_Slug_MT_thu = 'api_kqxs_thu_' . $thu . '_mt' . '_' . ngay_thu_gan_nhat($thu);
  $url = $_API_URL['api_kqxs_thu'] . '?thu=' . $thu . '&mien=mien-trung';
  $result = 'results';
  $api = cacheAPI_JSON_XS3M($set_Slug_MT_thu, $url, $result);
  if (!empty($api)) {
    so_dau_duoi_mt_temp($api, $day);
  }
}

function dataSoDauDuoi_MTRender()
{
  global $_API_URL;
  $current = genSlug(fewDaysAgo(1));
  if (date('H:i:s') > '17:30') {
    $data = api_kqxs_make_api_call($_API_URL['api_kqxs_mien_nam'] . '?ngay=' . genSlug(fewDaysAgo(0)));
    if (isset($data['success']) && $data['success'] == true) {
      $current = genSlug(fewDaysAgo(0));
    }
  }
  $set_sdd_Slug_MT = 'api_kqxs_list_mien_trung' . '?to=' . $current;
  $url = $_API_URL['api_kqxs_list_mien_trung'] . '?from=' . genSlug(fewDaysAgo(30)) . '&to=' . $current;
  $result = 'results';
  $api = cacheAPI_JSON_XS3M($set_sdd_Slug_MT, $url, $result);
  if (!empty($api)) {
    so_dau_duoi_mt_temp($api, false);
  }
  echo "</br>";
}