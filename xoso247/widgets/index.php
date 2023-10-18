<?php
require_once get_template_directory() . "/widgets/callender.php";
require_once get_template_directory() . "/widgets/provinceList.php";

function register_custom_widget()
{
  register_sidebar([
    'name' => 'Sidebar bên phải',
    'id' => 'right_sidebar'
  ]);

  register_sidebar([
    "name" => "Footer Area 1",
    'id' => 'footer1'
  ]);
}
add_action('widgets_init', 'register_custom_widget');