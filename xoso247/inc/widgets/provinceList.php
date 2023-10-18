<?php
class ProvinceList_Widget extends WP_Widget
{

  /**
   * Sets up the widgets name etc
   */
  public function __construct()
  {
    $widget_ops = array(
      'classname' => 'provinceList',
      'description' => 'Danh sách các tỉnh xổ số của 3 miền',
    );
    parent::__construct('my_widget_provinceList', 'Danh sách tỉnh ', $widget_ops);
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
    $this->enqueue_custom_script();
    global $_SLUG_TINH_short, $lichQuay, $_SLUG, $_API_URL;

    // $api = api_kqxs_make_api_call($_API_URL['api_list_all_tinh']);
    $api = $lichQuay;
    ?>

    <div class="widget">
      <div class="widget-title widget_bg">
        <h3>
          <?php echo $instance['title']; ?>
        </h3>
      </div>
      <div class="widget-container">
        <ul>
          <!-- <li class="link-item2 widget-title"> MIỀN BẮC </li>
         -->
          <li><span class="link-item2 widget-title-link">MIỀN BẮC</span>
            <ul class="link-item2-sub">
              <li><a href="<?php echo $_SLUG['xsmb']; ?>">Xổ Số Miền Bắc</a></li>
            </ul>
          </li>
          <li><span class="link-item2 widget-title-link">MIỀN NAM</span>
            <ul class="link-item2-sub">
              <?php
              foreach ($api['mien-nam'] as $tinh) {
                echo '<li><a title="Xổ số ' . $tinh['label'] . '" href="' . $_SLUG_TINH_short . $tinh['key'] . '/">' . $tinh['label'] . '</a></li>';
              }
              ?>
            </ul>
          </li>
          <li><span class="link-item2 widget-title-link">MIỀN TRUNG</span>
            <ul class="link-item2-sub">
              <?php
              foreach ($api['mien-trung'] as $tinh) {
                echo '<li><a title="Xổ số ' . $tinh['label'] . '" href="' . $_SLUG_TINH_short . $tinh['key'] . '/">' . $tinh['label'] . '</a></li>';
              }
              ?>
            </ul>
          </li>
        </ul>
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
        <?php esc_attr_e('Tiêu đề danh sách', 'xoso247'); ?>
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

  public function enqueue_custom_script()
  {
    wp_enqueue_script('custom-widget-script', get_template_directory_uri() . '/assets/js/accordion.js', array('jquery'), '1.0', true);
  }

}

add_action('widgets_init', function () {
  register_widget('ProvinceList_Widget');
});