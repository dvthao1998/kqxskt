<?php get_header();

?>

<div class="container404">
  <div class="block404">
    <h1>404 - Không tìm thấy trang bạn yêu cầu</h1>
    <p>Địa chỉ không tồn tại, thành thật xin lỗi Quý khách vì sự bất tiện này</p>
    <p>Vui lòng quay trở lại <a href="/">trang chủ</a> để xem các trang khác</p>
  </div>
  <div class="block404">
    <div class="form-inline">
      <h2 style="text-align:center; font-weight:bold; font-size:20px">Có thể bạn quan tâm đến các nội dung sau</h2>
    </div>
    <!-- tiêu đề chính -->
    <div class="block-main-heading">
      <h3>Kết quả xổ số theo tỉnh</h3>
    </div>
    <!-- nội dung block -->
    <div class="kqxstinh">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th class="w10">Thứ</th>
            <th><a href="<?php echo site_url('xo-so-mien-bac/'); ?>">XS miền Bắc</a></th>
            <th><a href="<?php echo site_url('xo-so-mien-trung/'); ?>">XS miền Trung</a></th>
            <th><a href="<?php echo site_url('xo-so-mien-nam/'); ?>">XS miền Nam</a></th>
          </tr>
        </thead>
        <tbody>
          <?php
          bang_lich_quay();
          ?>
        </tbody>
      </table>
    </div>
  </div>
</div>