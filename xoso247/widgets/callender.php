<?php
class Callender_Widget extends WP_Widget
{

  /**
   * Sets up the widgets name etc
   */
  public function __construct()
  {
    $widget_ops = array(
      'classname' => 'callender',
      'description' => 'Tra cứu xổ số theo ngày trên lịch',
    );
    parent::__construct('my_widget_callender', 'Dò Kết Quả', $widget_ops);
  }

  /**
   * Outputs the content of the widget
   *
   * @param array $args
   * @param array $instance
   */
  public function widget($args, $instance)
  {
    // outputs the content of the widget
    // echo $args['before_widget'];
    ?>

    <div class="widget">
      <div class="widget-title widget_bg">
        <h3>

          Dò kết quả -
          <?php echo $instance["title"]; ?>
        </h3>
      </div>
      <div class="widget-container">
        <div class="form-wg">
          <div class="form-group"><label class="label_gril">Bộ số:</label>
            <div class="input_gril"><input id="number_l4681z">
              <div class="text-danger">Nhập bộ số để dò kết quả</div>
            </div>
          </div>
          <div class="form-group"><label class="label_gril">Từ ngày:</label>
            <div class="input_gril"><input id="dateRangeForm_g09f8w" type="date" min="2005-01-01"
                max="<?php echo genSlug(fewDaysAgo(1)); ?>" data-date="" data-date-format="DD MMMM YYYY" value="2023-08-21">
            </div>
          </div>
          <div class="form-group"><label class="label_gril">Đến ngày:</label>
            <div class="input_gril"><input id="dateRangeTo_k98pru" type="date" min="2005-01-01"
                max="<?php echo genSlug(fewDaysAgo(1)); ?>" data-date="" data-date-format="DD MMMM YYYY" value="2023-09-21">
            </div>
          </div>
          <div class="form-group"><label class="label_gril">Tỉnh TP:</label>
            <div class="input_gril"><select id="province_w0c38u">
                <option value="0" selected="">Miền Bắc</option>
                <?php
                global $danh_sach_tinh;
                $i = 1;
                foreach ($danh_sach_tinh as $tinh) {
                  echo '<option value="' . $i . '">' . $tinh . '</option>';
                  $i++;
                }
                ?>
              </select></div>
          </div>
          <div class="form-group">
            <div class="btn-right"><button id="number_detector_24f606" class="btn">Dò kết quả</button></div>
          </div>
          <div class="form-group">
            <p class="tutorial-loto">Bạn có thể thống kê một hoặc nhiều số: <br>Ví dụ: 36 hoặc 68, 86</p>
          </div>
        </div>
      </div>
    </div>

    <?php
    // echo $args['after_widget'];
  }

  /**
   * Outputs the options form on admin
   *
   * @param array $instance The widget options
   */
  public function form($instance)
  {
    // outputs the options form on admin
    $title = !empty($instance['title']) ? $instance['title'] : esc_html__('New title', 'text_domain');
    ?>
    <p>
      <label for="<?php echo esc_attr($this->get_field_id('title')); ?>">
        <?php esc_attr_e('Tên Website:', 'xoso247'); ?>
      </label>
      <input class="widefat" id="<?php echo esc_attr($this->get_field_id('title')); ?>"
        name="<?php echo esc_attr($this->get_field_name('title')); ?>" type="text" value="<?php echo esc_attr($title); ?>">
    </p>
    <?php
  }

  /**
   * Processing widget options on save
   *
   * @param array $new_instance The new options
   * @param array $old_instance The previous options
   *
   * @return array
   */
  public function update($new_instance, $old_instance)
  {
    // processes widget options to be saved
    $instance = array();
    $instance['title'] = (!empty($new_instance['title'])) ? sanitize_text_field($new_instance['title']) : '';

    return $instance;
  }
}

add_action('widgets_init', function () {
  register_widget('Callender_Widget');
});