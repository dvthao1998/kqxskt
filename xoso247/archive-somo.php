<?php

get_header(); ?>
<main class="main">
  <div class="main-content">
    <?php
    renderBreadcrumb('Sổ Mơ'); ?>

    <div class="content-left">
      <div class="section-content" id="kqngay_21092023_kq" style="margin-bottom: 20px;">
        <table class="table-result">
          <thead>
            <tr>
              <th style="width: 10%;">STT</th>
              <th>Chiêm bao - mơ thấy</th>
              <th>Con số giải mã</th>
            </tr>
          </thead>
          <tbody>

            <?php
            $args = array(
              'post_type' => 'somo',
              'posts_per_page' => -1,
            );

            $query = new WP_Query($args);
            $i = 1;
            if ($query->have_posts()) {
              while ($query->have_posts()) {
                $query->the_post();
                $post_id = get_the_ID();
                $custom_keyword = get_post_meta($post_id, 'tu_khoa_so_mo', true);
                $custom_number = get_post_meta($post_id, 'con_so_so_mo', true); ?>
                <tr>
                  <th>
                    <?php echo $i; ?>
                  </th>
                  <td>
                    <?php echo '<a href="' . get_the_permalink() . '">' . $custom_keyword . '</a>' ?>
                  </td>
                  <td>
                    <?php echo $custom_number; ?>
                  </td>
                </tr>

                <?php
                ++$i;
              }
              wp_reset_postdata(); // Reset the post data
            } else { ?>
              <tr>
                <th>ĐB</th>
                <td>-----</td>
                <td>-----</td>
              </tr>
            <?php }

            ?>

            <!--             
            <tr>
              <th>ĐB</th>
              <td><span class="special-prize">-</span></td>
              <td><span class="special-prize">-</span></td>
            </tr> -->


          </tbody>
        </table>
      </div>
    </div>
    <?php

    get_sidebar('left');
    get_sidebar('right'); ?>
  </div>
</main>

<?php
get_footer(); ?>