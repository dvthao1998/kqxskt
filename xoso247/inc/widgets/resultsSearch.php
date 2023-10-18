<?php
class Results_Search_Widget extends WP_Widget
{

  /**
   * Sets up the widgets name etc
   */
  public function __construct()
  {
    $widget_ops = array(
      'classname' => 'resultsSearch',
      'description' => 'Dò kết quả các đài trong các khoảng ngày tùy chỉnh',
    );
    parent::__construct('my_widget_resultsSearch', 'Dò Kết Quả', $widget_ops);
  }

  /**
   * Outputs the content of the widget
   *
   * @param array $args
   * @param array $instance
   */
  public function widget($args, $instance)
  {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      if (isset($_POST["select"]) && isset($_POST["from"]) && isset($_POST["to"])) {
        $fromDate = $_POST["from"];
        $toDate = $_POST["to"];
        $selected = $_POST["select"];
      }
    } else {
      $fromDate = '';
      $toDate = '';
      $selected = '';
    }
    $this->enqueue_custom_script();
    ?>
    <form method="POST" action="/kqxs/">
      <div class="widget">
        <div class="widget-title widget_bg">
          <h3>
            <?php echo $instance['title']; ?>
          </h3>
        </div>
        <div class="widget-container">
          <div class="form-wg">
            <div class="form-group"><label class="label_gril" for="dateRangeForm_g09f8w">Từ ngày:</label>
              <div class="input_gril">
                <input name="from" id="dateRangeTo_k98pru0" type="date" min="2007-08-18"
                  max="<?= genSlug(fewDaysAgo(1)); ?>" data-date="" date-format="DD MM YYYY"
                  value="<?= $fromDate ? $fromDate : genSlug(fewDaysAgo(1)); ?>">
                <span id="showDate">
                  <?= $fromDate ? formatDate($fromDate) : formatDate(fewDaysAgo(1)); ?>
                </span>
              </div>
            </div>
            <div class="form-group"><label class="label_gril">Đến ngày:</label>
              <div class="input_gril"><input name="to" id="dateRangeTo_k98pru" class="dateRange2" type="date"
                  min="2007-08-18" max="<?= genSlug(fewDaysAgo(0)); ?>" data-date="" date-format="DD MM YYYY"
                  value="<?= $toDate ? $toDate : genSlug(fewDaysAgo(0)); ?>">
                <span id="showDate " class="showDate2">
                  <?= $toDate ? formatDate($toDate) : formatDate(fewDaysAgo(0)); ?>
                </span>
              </div>
            </div>
            <div class="form-group"><label class="label_gril">Tỉnh TP:</label>
              <div class="input_gril">
                <select id="province_w0c38u" name="select">
                  <option value="xo-so-ha-noi" selected>Miền Bắc</option>
                  <?php
                  global $lichQuay;
                  foreach ($lichQuay['mien-trung'] as $tinh) {
                    $select = $selected == $tinh['key'] ? 'selected' : '';
                    echo '<option value="' . $tinh['key'] . '" ' . $select . ' >' . $tinh['label'] . '</option>';
                  }
                  foreach ($lichQuay['mien-nam'] as $tinh) {
                    $select = $selected == $tinh['key'] ? 'selected' : '';
                    echo '<option value="' . $tinh['key'] . '" ' . $select . ' >' . $tinh['label'] . '</option>';
                  }
                  ?>
                </select>
              </div>
            </div>
            <div class="form-group">
              <input type="submit" value="Dò kết quả" style="cursor: pointer;">
            </div>
          </div>
        </div>
      </div>

    </form>

    <?php
  }

  /**
   * Outputs the options form on admin
   *
   * @param array $instance The widget options
   */
  public function form($instance)
  {
    // outputs the options form on admin
    $title = !empty($instance['title']) ? $instance['title'] : esc_html__('Dò Kết Quả', 'text_domain');
    ?>
    <p>
      <label for="<?php echo esc_attr($this->get_field_id('title')); ?>">
        <?php esc_attr_e('Tiêu đề widget', 'xoso247'); ?>
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
    wp_enqueue_script('search_result_widget-script', get_template_directory_uri() . '/assets/js/resultsSearch.js', array('jquery'), '1.0', true);
  }

}

add_action('widgets_init', function () {
  register_widget('Results_Search_Widget');
});