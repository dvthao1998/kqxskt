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
    global $_API_URL;
    global $_SLUG_TINH;
    global $_SLUG;

    $api = api_kqxs_make_api_call($_API_URL['api_list_all_tinh']);
    ?>

    <div class="widget">
      <div class="widget-title widget_bg">
        <h3>
          <?php echo $instance['title']; ?>
        </h3>
      </div>
      <div class="widget-container">
        <ul>
          <li><a title="Xổ số miền Bắc" class="link-item2 widget-title"
              href="<?php echo site_url() . $_SLUG['xsmb']; ?>">MIỀN BẮC</a>
            <ul class="link-item2-sub">
              <?php
              foreach ($api['results']['mien-bac'] as $tinh) {
                echo '<li><a title="Xổ số ' . $tinh['label'] . '" href="' . $_SLUG_TINH . $tinh['key'] . '/">' . $tinh['label'] . '</a></li>';
              }
              ?>
            </ul>
          </li>
          <li><a class="link-item2 widget-title" href="<?php echo site_url() . $_SLUG['xsmn']; ?>">MIỀN NAM</a>
            <ul class="link-item2-sub">
              <?php
              foreach ($api['results']['mien-nam'] as $tinh) {
                echo '<li><a title="Xổ số ' . $tinh['label'] . '" href="' . $_SLUG_TINH . $tinh['key'] . '/">' . $tinh['label'] . '</a></li>';
              }
              ?>
            </ul>
          </li>
          <li><a class="link-item2 widget-title" href="<?php echo site_url() . $_SLUG['xsmt']; ?>">MIỀN TRUNG</a>
            <ul class="link-item2-sub">
              <?php
              foreach ($api['results']['mien-trung'] as $tinh) {
                echo '<li><a title="Xổ số ' . $tinh['label'] . '" href="' . $_SLUG_TINH . $tinh['key'] . '/">' . $tinh['label'] . '</a></li>';
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
}

add_action('widgets_init', function () {
  register_widget('ProvinceList_Widget');
});