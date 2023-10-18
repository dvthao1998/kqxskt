<?php
function cacheAPI_JSON_XS3M($_set_slugs, $url, $result, $reverse = false)
{
  $_kqxs_api_cache_slugs = get_transient($_set_slugs); // Gọi dữ liệu từ key $_set_slugs trong Transient
  // Kiểm tra, nếu chưa có thì tạo dữ liệu cho Transient mang tên đã set trong $_set_slugs
  if (empty($_kqxs_api_cache_slugs)) {

    $response = get_data_api($url);
    $data = json_decode($response, true);

    // Lưu dữ liệu cần hiển thị vào data hoặc tạo mảng array('results' => data[$result]);
    if (isset($data['success']) && $data['success'] == true && !empty($data[$result])) {
      $_kqxs_api_cache = $reverse ? array_reverse($data[$result]) : $data[$result];
      // Tạo key transient với tên đã set trong $_set_slugs
      set_transient($_set_slugs, $_kqxs_api_cache, 60 * 60 * 12); // 60*60*12 nghĩa là mỗi 12 giờ (giây*phút*giờ)
      return $_kqxs_api_cache;
    }

  } else {
    $_kqxs_api_cache = $reverse ? array_reverse($_kqxs_api_cache_slugs) : $_kqxs_api_cache_slugs;
    return $_kqxs_api_cache;

  }
}

/**
 * Hàm trả về 1 mảng chứa trước giờ bắt đầu xổ và sau giờ kết thúc xổ bao nhiêu phút
 * 
 * @param  string $mien Gồm 3 miền -> 'xsmb', 'xsmn' , 'xsmt'
 * @param  string $truoc_gio Trước giờ xổ số của param $mien bao nhiêu phút, truyền vào dạng 'số phút'
 * @param  string $sau_gio Sau giờ xổ số của param $mien bao nhiêu phút, truyền vào dạng 'số phút' 
 * @return array
 */
function gio_call_API($mien = 'xsmb', $truoc_gio = '10', $sau_gio = '10')
{
  /**
   * @var array $gio_so Chứa giờ xổ số của 3 đài 
   */
  $gio_so = array(
    'xsmb' => ['18:15', '18:40'],
    'xsmn' => ['16:15', '16:40'],
    'xsmt' => ['17:15', '17:40'],
  );
  $truoc_gio_xo = date('H:i:s', strtotime('-' . $truoc_gio . ' minute', strtotime($gio_so[$mien][0])));
  $sau_gio_xo = date('H:i:s', strtotime('+' . $sau_gio . ' minute', strtotime($gio_so[$mien][1])));
  return [$truoc_gio_xo, $sau_gio_xo];
}




function bang_lich_quay()
{
  // Tạo bảng lịch quay theo thứ, function chưa gồm thẻ body bọc ngoài
  global $lichQuay;
  global $arrthu;
  foreach ($arrthu as $thu) { ?>
    <tr>
      <td>
        <?php echo $thu; ?>
      </td>

      <td>
        <?php foreach ($lichQuay['mien-bac'] as $mien) {
          // print_r($mien['lichquay']);
          if (in_array($thu, $mien['lichquay'])) {
            echo '<p><a href="' . site_url() . '/xo-so-tinh/' . $mien["key"] . '/' . '">' . $mien["label"] . '</a></p>';
          }
          ;
        } ?>
      </td>

      <td>
        <?php foreach ($lichQuay['mien-trung'] as $mien) {
          if (in_array($thu, $mien['lichquay'])) {
            echo '<p><a href="' . site_url() . '/xo-so-tinh/' . $mien["key"] . '/' . '">' . $mien["label"] . '</a></p>';
          }
          ;
        } ?>
      </td>

      <td>
        <?php foreach ($lichQuay['mien-nam'] as $mien) {
          // print_r($mien['lichquay']);
          if (in_array($thu, $mien['lichquay'])) {
            echo '<p><a href="' . site_url() . '/xo-so-tinh/' . $mien["key"] . '/' . '">' . $mien["label"] . '</a></p>';
          }
          ;
        } ?>
      </td>
    </tr>
    <?php
  }
}

function ngay_thu_gan_nhat($result)
{
  $currentDate = date('Y-m-d'); // 1999-10-28
  switch ($result) {
    case "thu-2":
      return date('Y-m-d', strtotime('last monday', strtotime($currentDate)));
    case "thu-3":
      return date('Y-m-d', strtotime('last tuesday', strtotime($currentDate)));
    case "thu-4":
      return date('Y-m-d', strtotime('last wednesday', strtotime($currentDate)));
    case "thu-5":
      return date('Y-m-d', strtotime('last thursday', strtotime($currentDate)));
    case "thu-6":
      return date('Y-m-d', strtotime('last friday', strtotime($currentDate)));
    case "thu-7":
      return date('Y-m-d', strtotime('last saturday', strtotime($currentDate)));
    default:
      return date('Y-m-d', strtotime('last sunday', strtotime($currentDate)));
  }
}

function weekDay($time) // tạo ra thứ khi truyền vào năm-tháng-ngày
{
  $timestamp = strtotime($time);
  $newDate = date("Y-m-d", $timestamp);
  // $time = "2023-09-30";
  date_default_timezone_set('Asia/Bangkok');
  $timeSingle = explode('-', $newDate);
  $ngay = $timeSingle[2];
  $thang = $timeSingle[1];
  $nam = $timeSingle[0];

  $date = date("l", mktime(0, 0, 0, $thang, $ngay, $nam));
  switch ($date) {
    case "Monday":
      return 'Thứ 2';
    case "Tuesday":
      return 'Thứ 3';
    case "Wednesday":
      return 'Thứ 4';
    case "Thursday":
      return 'Thứ 5';
    case "Friday":
      return 'Thứ 6';
    case "Saturday":
      return 'Thứ 7';
    default:
      return 'Chủ Nhật';
  }
}

function formatDate($time)
{
  $timestamp = strtotime($time);
  return date("d/m/Y", $timestamp);
}

function genSlug($text)
{
  return sanitize_title($text);
}

function fewDaysAgo(int $day)
{
  // $day có kiểu dữ liệu là số nguyên
  $date = date("Y/m/d");
  //$date = date("Y/m/d", '-1 month'); // trừ lại 1 tháng

  // Chuyển đổi ngày sang định dạng Unix timestamp
  $timestamp = strtotime($date);

  // Trừ đi $day ngày
  $timestamp -= $day * 24 * 3600; // 6 ngày * 24 giờ/ngày * 3600 giây/giờ

  // Chuyển đổi lại thành định dạng năm/tháng/ngày
  $newDate = date("Y/m/d", $timestamp);

  return $newDate;
}

function slug_to_text_for_day($thu)
{
  switch ($thu) {
    case 'thu-2':
      return 'Thứ 2';
    case 'thu-3':
      return 'Thứ 3';
    case 'thu-4':
      return 'Thứ 4';
    case 'thu-5':
      return 'Thứ 5';
    case 'thu-6':
      return 'Thứ 6';
    case 'thu-7':
      return 'Thứ 7';
    default:
      return 'Chủ Nhật';
  }
}



function many_weeks_day_ago(string $thu_slug, int $multi_days = 1)
{
  switch ($thu_slug) {
    case 'thu-2':
      $desired_day = 1;
      break;
    case 'thu-3':
      $desired_day = 2;
      break;
    case 'thu-4':
      $desired_day = 3;
      break;
    case 'thu-5':
      $desired_day = 4;
      break;
    case 'thu-6':
      $desired_day = 5;
      break;
    case 'thu-7':
      $desired_day = 6;
      break;
    default:
      $desired_day = 0;
      break;
  }
  // 1 tương ứng với ngày thứ 2 (0 là Chủ Nhật, 1 là Thứ 2, 2 là Thứ 3, và cứ tiếp tục)
  $num_of_weeks = $multi_days * 10; // Số tuần muốn lấy
  $desired_dates = array(); // Mảng để lưu trữ các ngày thứ
  $current_timestamp = strtotime('today'); // Lấy ngày hiện tại

  // Lặp để tìm và lưu trữ 10 ngày thứ 2
  for ($i = 0; $i < $num_of_weeks; $i++) {
    while (date('w', $current_timestamp) != $desired_day) {
      $current_timestamp = strtotime('-1 day', $current_timestamp);
    }
    $desired_dates[] = date('Y-m-d', $current_timestamp);
    $current_timestamp = strtotime('-1 week', $current_timestamp);
  }
  if ($multi_days >= 1) {
    return array_slice($desired_dates, $num_of_weeks - 10, 10);
  }
}


// ++++++++++++++++++++ VIETLOTT+++++++++++++++++++
$megaDates = array();
function ngay_quay_mega()
{
  $numberOfDays = 10;
  $currentDate = new DateTime();
  global $megaDates;
  while (count($megaDates) < $numberOfDays) {
    // Giảm ngày hiện tại xuống 1 ngày
    $currentDate->sub(new DateInterval('P1D'));
    // Kiểm tra ngày hiện tại có phải là thứ 4, thứ 6, hoặc Chủ Nhật không
    $dayOfWeek = $currentDate->format('N');
    if ($dayOfWeek == 3 || $dayOfWeek == 5 || $dayOfWeek == 7) {
      $megaDates[] = $currentDate->format('Y-m-d');
    }
  }
}
ngay_quay_mega();

$powerDates = array();
function ngay_quay_power()
{
  $numberOfDays = 10;
  $currentDate = new DateTime();
  global $powerDates;
  while (count($powerDates) < $numberOfDays) {
    // Giảm ngày hiện tại xuống 1 ngày
    $currentDate->sub(new DateInterval('P1D'));
    // Kiểm tra ngày hiện tại có phải là thứ 3, thứ 5, hoặc thứ 7 không
    $dayOfWeek = $currentDate->format('N');
    if ($dayOfWeek == 2 || $dayOfWeek == 4 || $dayOfWeek == 6) {
      $powerDates[] = $currentDate->format('Y-m-d');
    }
  }
}
ngay_quay_power();

$max_3dDates = array();
function ngay_quay_max_3d()
{
  $numberOfDays = 10;
  $currentDate = new DateTime();
  global $max_3dDates;
  while (count($max_3dDates) < $numberOfDays) {
    // Giảm ngày hiện tại xuống 1 ngày
    $currentDate->sub(new DateInterval('P1D'));
    // Kiểm tra ngày hiện tại có phải là thứ 2, thứ 4, hoặc thứ 6 không
    $dayOfWeek = $currentDate->format('N');
    if ($dayOfWeek == 1 || $dayOfWeek == 3 || $dayOfWeek == 5) {
      $max_3dDates[] = $currentDate->format('Y-m-d');
    }
  }
}
ngay_quay_max_3d();



//do_action('init', 'ngay_quay_mega');