<?php


// ==========
function get_related_sodauduoi_term()
{
  $taxonomy = get_taxonomy('sodauduoi');
  $tax_slug = $taxonomy->rewrite['slug'];
  $terms = get_terms([
    'taxonomy' => 'sodauduoi',
    'hide_empty' => false,
  ]);
  if ($terms && !is_wp_error($terms)) {
    foreach ($terms as $term) {
      $term_url = site_url() . '/' . $tax_slug . '/' . $term->slug;
      if (get_queried_object()->term_id !== $term->term_id) {
        echo '<p>+ <a title="' . $term->name . '" href="' . $term_url . '/">' . $term->name . '</a></p>';
      }
    }
  }
}
function rule_so_dau_duoi_mb()
{
  $web_name = web_name();
  echo '
  <section class="section">
  <div class="lottery-info">
    <h2>Sổ đầu đuôi miền Bắc là gì?</h2>
    <p>Sổ đầu đuôi miền Bắc – Sổ đầu đuôi MB trên website <strong>' . $web_name . ' </strong> là bảng tổng hợp nhanh 2 số cuối kết quả ';
  menu_item_link('xsmb', 'xsmb-theo-ngay', 'xổ số miền Bắc');
  echo 'ở các giải Đặc Biệt và giải 7 về trong ngày và nhiều kỳ liên tiếp.</p><br>
    <p>Người chơi dễ dàng theo dõi sổ đầu đuôi MB (Miền Bắc) từ Thứ 2, Thứ 3, Thứ 4, Thứ 5, Thứ 6, Thứ 7 và Chủ Nhật của
      các tuần một cách đơn giản và thuận tiện nhất.</p><br>
    <p>Tham khảo thêm sổ đầu đuôi Miền Nam và Miền Trung tại:</p>
    ';
  get_related_sodauduoi_term();
  echo '</div>
</section>
 ';
}

function rule_so_dau_duoi_mt()
{
  $web_name = web_name();
  echo '
 <section class="section">
 <div class="lottery-info">
   <h2>Sổ đầu đuôi miền Trung là gì</h2>
   <p>Sổ đầu đuôi miền Trung - Sổ đầu đuôi MT,';
  menu_item_link('xsmt', 'xsmt-theo-ngay', 'XSMT');
  echo 'trên website <strong>' . $web_name . ' </strong>là bảng tổng hợp nhanh 2 số cuối kết quả xổ số miền Trung ở các
     giải Đặc Biệt và giải 8 tất cả các ngày trong tuần chính xác và hoàn toàn miễn phí.</p>
   <p>Người chơi cũng dễ dàng theo dõi sổ đầu đuôi Miền Trung từ Thứ 2, Thứ 3, Thứ 4, Thứ 5, Thứ 6, Thứ 7 và Chủ Nhật
     của các tuần một cách đơn giản và thuận tiện nhất.</p>
   <p>Tham khảo thêm Sổ đầu đuôi Miền Bắc và Miền Nam tại:</p>
   ';
  get_related_sodauduoi_term();
  echo '</div>
</section>
 ';
}

function rule_so_dau_duoi_mn()
{
  $web_name = web_name();
  echo '
  <section class="section">
  <div class="lottery-info">
    <h2>Sổ đầu đuôi miền Nam là gì</h2>
    <p>Sổ đầu đuôi miền Nam - Sổ đầu đuôi MN,';
  menu_item_link('xsmn', 'xsmn-theo-ngay', 'XSMN');
  echo 'trên website <strong>' . $web_name . ' </strong>là bảng tổng hợp nhanh 2 số cuối kết quả xổ số miền Nam ở các giải Đặc Biệt và giải 8 tất cả các ngày trong tuần chính xác và hoàn toàn miễn phí.</p>
    <p>Người chơi cũng dễ dàng theo dõi sổ đầu đuôi Miền Nam từ Thứ 2, Thứ 3, Thứ 4, Thứ 5, Thứ 6, Thứ 7 và Chủ Nhật của
      các tuần một cách đơn giản và thuận tiện nhất.</p>
    <p>Tham khảo thêm sổ đầu đuôi Miền Bắc và Miền Trung tại:</p>
    ';
  get_related_sodauduoi_term();
  echo '</div>
</section>
 ';
}
?>