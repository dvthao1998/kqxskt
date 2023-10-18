<?php
// api_kqxs_make_api_call('http://kqxs.local/api/test.json);
// get_template_part('inc/patterns/DEBUG');
// echo "<pre>";
// print_r(get_queried_object());
// echo get_post_type_archive_link('phantich');
// echo "</pre>";
// 
// =========================================
// 'https://ketquaday.vn/thong-ke-lo-gan';
$terms = get_terms([
  'taxonomy' => 'vietlott',
  'hide_empty' => false,
]);

// get_posts_block_phan_tich('hihihi', get_queried_object()->term_id , );




echo "<pre>";
print_r(gio_call_API('xsmb', '20', '20'));
echo "</pre>";