<?php
$_get_kq = (isset($_GET['kq']) && !empty($_GET['kq'])) ? $_GET['kq'] : 'xsmb';
// print_r($_GET);
?>



<div id="kqxs-load">
	<?php
	$_kqxs_html = @file_get_contents(get_theme_file_uri() . '/live/' . $_get_kq . '.html');
	$_kqxs_html = str_replace(array('w_30', 'number_item1'), array('prize-col3', 'xs_prize1'), $_kqxs_html);
	$_kqxs_html = preg_replace("'onclick=\"show_kq_modal([^>]*?)\"'si", '', $_kqxs_html);


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
</div>

<script type="text/javascript">
	var auto_refresh = setInterval(
		function () {
			$('#kqxs-load').load('<?php echo get_theme_file_uri(); ?>/kqxs-live.php?kq=<?= $_get_kq; ?>').fadeIn("slow");
			console.log('loaded');
		}, 5000); /*refresh every 10000 milliseconds*/
</script>