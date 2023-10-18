<footer class="footer" id="e_c" p="p-top-10 p-bo-10" h="P90ybwbbDGvSuxYOVzDkHA==">
  <section class="main-content">
    <div class="nav-bottom">

      <a href="/" class="nav-bottom-item" title="Trang chủ">TRANG CHỦ</a>
      <?php
      global $menu_items;
      foreach ($menu_items as $item) {
        echo
          "<a href='" . site_url() . '/' . $item["slug"] . '/' . "' class='nav-bottom-item' title='" . $item["title"] . "'>" . $item["label"] . "</a>";
      }
      ?>
    </div>
    <div class="footer-content">
      <div class="footer-add">
        <div class="copyright">
          <p><strong>Copyright ©
              <?php echo date('Y') == 2023 ? 2023 : date('Y');
              echo ' by ';
              echo web_name(true); ?> , All Rights Reserved
            </strong></p>
        </div>
      </div>
    </div>
  </section>
</footer>
<a href="#" class="backtotop show_backtotop"><img alt="len dau" class="top-arrow"
    src="<?php echo get_theme_file_uri('assets/img/top-arrow.svg'); ?>"></a>

<div class="pushbar_overlay"></div>
<container id="my-app-container">
  <div style="position: absolute; top: 0px; z-index: 2147483647;">
    <div id="squareDiv" style="display: none;"></div>
    <div></div>
  </div>
</container>

<?php wp_footer(); ?>
<script>
  $(document).ready(function () {
    var from = 8; // Lấy 8 ngày từ ngày hôm nay
    var to = 15;  // Lấy 15 ngày từ ngày hôm nay
    var i = 2;
    $('#loadmore').click(function (event) {
      $.ajax({ // Hàm ajax
        type: "post", //Phương thức truyền post hoặc get
        dataType: "html", //Dạng dữ liệu trả về xml, json, script, or html
        async: true,
        url: '<?php echo admin_url('admin-ajax.php'); ?>', // Nơi xử lý dữ liệu
        data: {
          action: "loadmore",
          from: from,
          to: to,
          multi_days: i,
          post_type: <?php echo '"' . get_queried_object()->taxonomy . '"' . ', '; ?>
          <?php echo get_queried_object()->slug ? 'term : "' . get_queried_object()->slug . '"' : ''; ?>
        },
        beforeSend: function () {
          $('#ajax').append('<div class="loading-wrapper"><div class="loading"></div></div>');
        },
        success: function (response) {
          $('.loading-wrapper').remove();
          $('#ajax').append(response);
          from = from + 8;
          to = to + 8;
          i = i + 1;
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log('The following error occured: ' + textStatus, errorThrown);
        }
      });
    });
  });
</script>
</body>

</html>