<?php
session_start();
/** 
 * Plugin Name: KQXS API Plugin 
 * Description: Kết quả xổ số XSMB - MXMT - XMSN và Các tỉnh thành. 
 * Author: TVD Media 
 * Author URI: https://tvdmedia.vn
 */
// Define API URL 
if (!defined('ABSPATH')) {
    die('Invalid request.'); // sẽ k chạy kiểu /wp-content/plugins/kqxs/index.php...... mà chạy kiểu slug của web thui
}
//define('KQXS_API_KEY', 'xxxxxxxxxxxxxxxxxxxxxxxx');
$domain = site_url();
define('KQXS_API_URL', $domain);
//define('KQXS_LIVE_API_URL', 'https://kqxs-ws.trien.dev/');
//define('KQXS_LIVE', true);

/** endpoint and parameters **/
$_api_url_list = array(
    array('url' => 'live', 'label' => 'Live Websocket', 'notes' => 'Tích hợp websocket để live kết quả xổ số'),
    array('url' => 'api/list-all-tinh', 'label' => 'Danh sách tỉnh thành', 'notes' => 'Liệt kê danh sách các tỉnh theo Miền Bắc - Miền Trung - Miền Nam'),
    array('url' => 'api/today', 'label' => 'Các tỉnh xổ số hôm nay', 'notes' => 'Liệt kê danh sách các tỉnh có xổ số hôm nay'),
    array('url' => 'api/kqxs/mien-bac', 'label' => 'KQXS Miền Bắc', 'notes' => 'Kết quả xổ số miền bắc theo ngày: ?ngay=Y-m-d'),
    array('url' => 'api/kqxs/list/mien-bac', 'label' => 'KQXS Miền Bắc (Nhiều ngày)', 'notes' => 'Từ ngày bắt đầu from: Y-m-d đến ngày kết thúc to:Y-m-d'),
    array('url' => 'api/kqxs/mien-trung', 'label' => 'KQXS Miền Trung', 'notes' => 'Kết quả xổ số miền trung theo ngày: ?ngay=Y-m-d'),
    array('url' => 'api/kqxs/list/mien-trung', 'label' => 'KQXS Miền Trung (Nhiều ngày)', 'notes' => 'Từ ngày bắt đầu from: Y-m-d đến ngày kết thúc to:Y-m-d'),
    array('url' => 'api/kqxs/mien-nam', 'label' => 'KQXS Miền Nam', 'notes' => 'Kết quả xổ số miền nam theo ngày: ?ngay=Y-m-d'),
    array('url' => 'api/kqxs/list/mien-nam', 'label' => 'KQXS Miền Nam (Nhiều ngày)', 'notes' => 'Từ ngày bắt đầu from: Y-m-d đến ngày kết thúc to:Y-m-d'),
    array('url' => 'api/kqxs/item', 'label' => 'KQXS Theo Tỉnh', 'notes' => 'Danh sách tỉnh được liệt kê tại: /api/list-all-tinh: tinh={}&ngay=Y-m-d'),
    array('url' => 'api/kqxs/list', 'label' => 'KQXS Theo Tỉnh (Nhiều ngày)', 'notes' => 'Danh sách tỉnh được liệt kê tại: /api/list-all-tinh: tinh=tp-hcm&from=Y-m-d&to=Y-m-d'),
    array('url' => 'api/kqxs/thu', 'label' => 'KQXS Theo Thứ', 'notes' => '?thu={thu-2}&ngay=Y-m-d&page={1}<br>thu: thu-2, thu-3, thu-4, thu-5, thu-6, thu-7, chu-nhat; mien: mien-bac, mien-trung, mien-nam; page: 1 - ++'),
    array('url' => 'api/vietlott/mega', 'label' => 'Vietlott MEGA 6/45', 'notes' => 'Kết quả xổ số Vietlott MEGA 6/45 ? ngay=Y-m-d'),
    array('url' => 'api/vietlott/list/mega', 'label' => 'Vietlott MEGA 6/45 (Nhiều ngày)', 'notes' => 'Kết quả xổ số Vietlott MEGA 6/45. Từ ngày bắt đầu from đến ngày kết thúc to'),
    array('url' => 'api/vietlott/power', 'label' => 'Vietlott POWER 6/55', 'notes' => 'Kết quả xổ số Vietlott POWER 6/55 ? ngay=Y-m-d'),
    array('url' => 'api/vietlott/list/power', 'label' => 'Vietlott POWER 6/55 (Nhiều ngày)', 'notes' => 'Kết quả xổ số Vietlott POWER 6/55. ,Từ ngày bắt đầu from đến ngày kết thúc to'),
    array('url' => 'api/vietlott/max3d', 'label' => 'Vietlott MAX 3D ', 'notes' => 'Kết quả xổ số Vietlott MAX 3D ? ngay=Y-m-d'),
    array('url' => 'api/vietlott/list/max3d', 'label' => 'Vietlott MAX 3D  (Nhiều ngày)', 'notes' => 'Kết quả xổ số Vietlott MAX 3D . Từ ngày bắt đầu from đến ngày kết thúc to')
);
//echo '<pre>'; print_r($_api_url_list); echo '</pre>';
//foreach ( $_api_url_list as $_api_url)  {
//    echo str_replace('/', '-', $_api_url['url']);
//echo '<pre>'; print_r($_api_url); echo '</pre>';
//} 


// Define the plugin's settings. 

if (!function_exists('api_kqxs_register_settings')) {
    function api_kqxs_register_settings()
    {
        add_option('api_key', 'xxxxxxxxxxxxxxxxxxxxxxxx');
        register_setting('kqxs_options_group', 'api_key', 'api_kqxs_validate_api_key');

        add_option('api_url', 'https://kqxs.trien.dev/');
        register_setting('kqxs_options_group', 'api_url', 'api_kqxs_validate_api_key');

    }
}
add_action('admin_init', 'api_kqxs_register_settings');

// Define the plugin's settings. 

if (!function_exists('api_kqxs_urls_settings')) {
    function api_kqxs_urls_settings()
    {
        global $_api_url_list;
        foreach ($_api_url_list as $_api_url) {
            $_opt_key = str_replace(array('/', '-'), '_', $_api_url['url']);
            add_option($_opt_key, $_api_url['url']);
            register_setting('kqxs_urls_options_group', $_opt_key, 'api_kqxs_validate_api_key');
            //echo '<pre>'; print_r($_api_url); echo '</pre>';
        }
    }
}
add_action('admin_init', 'api_kqxs_urls_settings');

// Validate the API key. 
function api_kqxs_validate_api_key($value)
{
    // Check if the value is empty. 
    if (empty($value)) {
        return '';
    }

    // Check if the value is valid. 
    return $value;
}
// Add a settings page. 
add_action(
    'admin_menu',
    'api_kqxs_add_settings_page'
);


function api_kqxs_add_settings_page()
{
    // Add the settings page.
    add_menu_page(
        'KQXS API Integration',
        'KQXS',
        'manage_options',
        'api-kqxs',
        'api_kqxs_render_settings_page',
        '',
        '2'
    );

}

// Render the settings page.
function api_kqxs_render_settings_page()
{
    global $_api_url_list;
    // Get the API key.
    //$api_key = get_option( 'api_key' );
    ?>
    <h1>Cấu hình API Key</h1>
    <form action="options.php" method="post">
        <?php echo settings_fields('kqxs_options_group'); ?>
        <table class="form-table" role="presentation">
            <tbody>

                <tr>
                    <th scope="row"><label for="apikey">API Key</label></th>
                    <td>
                        <input type="text" name="api_key" value="<?php echo esc_attr(get_option('api_key')); ?>"
                            class="regular-text">
                    </td>
                </tr>
                <tr>
                    <th scope="row"><label for="siteurl">API URL</label></th>
                    <td><input name="api_url" type="url" value="<?php echo esc_attr(get_option('api_url')); ?>"
                            class="regular-text"></td>
                </tr>
            </tbody>
        </table>
        <p class="submit text-center"><input type="submit" name="submit" id="submit" class="button button-primary"
                value="Lưu thay đổi"></p>
    </form>


    <script src="https://cdn.socket.io/4.5.0/socket.io.min.js" crossorigin="anonymous"></script>
    <script>     var socket = io('https://kqxs-ws.trien.dev', {         auth: {             token: 'Hw5FfusjfKh8mvjZMMflMImBaCxkX0Dk',         }     });     socket.on('connect', () => {         if (socket.connected) {             /** LIVE CODE **/
                 socket.emit('channel', 'live');             socket.emit('run', 'mien-bac');             document.getElementById("live_status").innerText = 'XSMB Đang cập nhật...';             console.log('Đang cập nhật...');
             }     });     socket.on('kqxs', function (msg) {         addMessage(msg);         renderKqxs(msg);     });
    </script>


    <h1>Danh sách URLs</h1>
    <form action="options.php" method="post">
        <?php echo settings_fields('kqxs_urls_options_group'); ?>
        <table class="form-table" role="presentation">
            <tbody>
                <tr>
                    <th scope="row"><label for="live_status">Test Live:</label></th>
                    <td><span id="live_status" class="regular-text" style="color:#008a20;"></span></td>
                </tr>
                <?php
                $a = 1;
                foreach ($_api_url_list as $_api_url) {
                    $_opt_key = str_replace(array('/', '-'), '_', $_api_url['url']);
                    $_otp_get_value = esc_attr(get_option($_opt_key));
                    $_otp_value = !empty($_otp_get_value) ? $_otp_get_value : $_api_url['url'];
                    ?>
                    <tr>
                        <th scope="row"><label for="<?php echo $_opt_key; ?>">
                                <?php echo $a . '. ' . $_api_url['label']; ?>
                            </label></th>
                        <td>
                            <input type="text" name="<?php echo $_opt_key; ?>" id="<?php echo $_opt_key; ?>"
                                value="<?php echo esc_attr($_otp_value); ?>" class="regular-text">
                            <p class="description" id="tagline-description">
                                <a target="_blank" href="<?php echo esc_attr(get_option('api_url') . $_otp_value); ?>">[Xem]</a>
                                <?php echo $_api_url['notes']; ?>
                            <pre><?php echo esc_attr(get_option('api_url') . $_otp_value); ?></pre>

                        </td>
                    </tr>
                    <?php
                    ++$a;
                }
                ?>
            </tbody>
        </table>

        <p class="submit text-center"><input type="submit" name="submit" id="submit" class="button button-primary"
                value="Lưu thay đổi"></p>
    </form>
    <?php
}


// This is how to make an API call
add_action(
    'init',
    'api_kqxs_make_api_call'
);


// CURL GET DATA
function get_data_api($url)
{
    // Get the API key.
    $api_key = get_option('api_key');

    $ipAddress = $_SERVER['REMOTE_ADDR']; //Custom IP here
    $ch = curl_init();
    //curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ["x-api-key: $api_key", "REMOTE_ADDR: $ipAddress", "HTTP_X_FORWARDED_FOR: $ipAddress"]);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; KQXS/1.0; +http://' . $_SERVER['SERVER_NAME'] . '/)');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    //curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 200);
    curl_setopt($ch, CURLOPT_TIMEOUT, 60);
    curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_WHATEVER);
    curl_setopt($ch, CURLOPT_TCP_FASTOPEN, true);
    curl_setopt($ch, CURLOPT_ENCODING, '');

    // Set the URL                                                                  
    curl_setopt($ch, CURLOPT_URL, trim($url));
    usleep(1); //50000

    $content = curl_exec($ch);
    //$redirectURL = curl_getinfo($ch,CURLINFO_EFFECTIVE_URL );
    //$httpStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $info = curl_getinfo($ch);
    // print_r($info);
    @header('Content-Type: ' . $info['content_type'] . '');
    //print_r($httpStatus);
    curl_close($ch);

    return $content;
}



function api_kqxs_make_api_call($url)
{
    // Get the API key.
    $api_key = get_option('api_key');

    // Make a call to the API.
    //$url = 'https://kqxs.trien.dev/api/list-all-tinh?access_key=' . $api_key;
    $response = get_data_api($url);

    // Check if the response was successful.
    if (is_wp_error($response)) {
        // Handle the error.
        return NULL;

    } else {
        // Get the WordPress data that is returned. 
        $data = json_decode($response, true);


        // Implement something with the data
        //echo '<pre>'; print_r($data['success']); echo '</pre>';
        //echo '<pre>'; print_r($data['results']); echo '</pre>';
        //var_dump( $response);
        return $data;
    }
}
// var_dump(api_kqxs_make_api_call('URL'));
// $_SESSION['section_tinh'] = (isset($_SESSION['section_tinh']) && empty($_SESSION['section_tinh']) ? $_SESSION['section_tinh'] = api_kqxs_make_api_call('https://minigame.dienlanhminhquan.vn/api/customer/read.php') : "this is sesstion, not api");

// print_r($_SESSION);

function get_multi_data_api($urls, $options = array())
{

    // array of curl handles
    $curly = array();
    // urls to be returned
    $result = array();

    // multi handle
    $mh = curl_multi_init();

    // loop through $urls and create curl handles
    // then add them to the multi-handle
    foreach ($urls as $id => $d) {

        $curly[$id] = curl_init();

        $url = (is_array($d) && !empty($d['url'])) ? $d['url'] : $d;
        curl_setopt($curly[$id], CURLOPT_URL, $url);
        curl_setopt($curly[$id], CURLOPT_HEADER, 0);
        curl_setopt($curly[$id], CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curly[$id], CURLOPT_FOLLOWLOCATION, 1);

        // post?
        if (is_array($d)) {
            if (!empty($d['post'])) {
                curl_setopt($curly[$id], CURLOPT_POST, 1);
                curl_setopt($curly[$id], CURLOPT_POSTFIELDS, $d['post']);
            }
        }

        // extra options?
        if (!empty($options)) {
            curl_setopt_array($curly[$id], $options);
        }

        curl_multi_add_handle($mh, $curly[$id]);
    }

    // execute the handles
    $active = null;
    do {
        $mrc = curl_multi_exec($mh, $active);
    } while ($mrc == CURLM_CALL_MULTI_PERFORM);

    while ($active && $mrc == CURLM_OK) {
        if (curl_multi_select($mh) == -1) {
            usleep(3);
        }

        do {
            $mrc = curl_multi_exec($mh, $active);
        } while ($mrc == CURLM_CALL_MULTI_PERFORM);
    }

    // get content and remove handles
    foreach ($curly as $id => $c) {
        $result[$id] = curl_multi_getcontent($c);
        curl_multi_remove_handle($mh, $c);

        //$info = curl_getinfo($c);
        //print_r($info);
        //@header('Content-Type: '.$info['content_type'].'');
    }

    // all done
    curl_multi_close($mh);

    return $result;
}

function api_kqxs_make_api_call_multi($array)
{
    // Get the API key.
    // $api_key = get_option('api_key');
    // Get the API key.
    $api_key = get_option('api_key');

    // Make a call to the API.
    //$url = 'https://kqxs.trien.dev/api/list-all-tinh?access_key=' . $api_key;
    $response = get_multi_data_api($array);

    // Check if the response was successful.
    if (is_wp_error($response)) {
        // Handle the error.
        return NULL;

    } else {

        foreach ($response as $item) {
            $result = json_decode($item, true);
            $data[] = $result;
        }
    }
    return $data;
}


$_API_URL = array(); // Phải kèm plugin và themes

foreach ($_api_url_list as $_api_url) {
    $_opt_key = str_replace(array('/', '-'), '_', $_api_url['url']);
    $_otp_get_value = esc_attr(get_option($_opt_key));
    $_otp_value = !empty($_otp_get_value) ? $_otp_get_value : $_api_url['url'];

    $_API_URL[$_opt_key] = get_option('api_url') . $_otp_value;
}