<?php
// if(is_active_sidebar('left-sidebar' )){
//   dynamic_sidebar( 'left-sidebar' );
// }   -> Cách gọi ra nè
function block_widget_position()
{

  // Left sidebar
  register_sidebar([
    'name' => 'Sidebar bên trái',
    'id' => 'left_sidebar'
  ]);

  // Right Sidebar
  register_sidebar([
    'name' => 'Sidebar bên phải',
    'id' => 'right_sidebar'
  ]);



}
add_action('widgets_init', 'block_widget_position');