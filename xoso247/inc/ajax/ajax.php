<?php
function ajax_loadmore()
{
  function get_post_loadmore()
  {
    $from = isset($_POST['from']) ? (int) $_POST['from'] : 8;
    $to = isset($_POST['to']) ? (int) $_POST['to'] : 15;
    $post_type = isset($_POST['post_type']) ? sanitize_text_field($_POST['post_type']) : '';
    $term = isset($_POST['term']) ? sanitize_text_field($_POST['term']) : '';
    $multi_days = isset($_POST['multi_days']) ? sanitize_text_field($_POST['multi_days']) : '';

    if ($post_type === 'xsmn') {
      if ($term === "xsmn-theo-ngay") {
        childDataXsmnRender($from, $to);
      } else {
        $thu = explode("-", $term)[1] . '-' . explode("-", $term)[2];
        thuDataXsmnRender($thu, $multi_days);
      }
    } else if ($post_type === 'xsmb') {
      if ($term === "xsmb-theo-ngay") {
        childDataXsmbRender($from, $to);
      } else {
        $thu = explode("-", $term)[1] . '-' . explode("-", $term)[2];
        thuDataXsmbRender($thu, $multi_days);
      }
    } else if ($post_type === 'xsmt') {
      if ($term === "xsmt-theo-ngay") {
        childDataXsmtRender($from, $to);
      } else {
        $thu = explode("-", $term)[1] . '-' . explode("-", $term)[2];
        thuDataXsmtRender($thu, $multi_days);
      }
    }
    die();
  }

  add_action('wp_ajax_loadmore', 'get_post_loadmore');
  add_action('wp_ajax_nopriv_loadmore', 'get_post_loadmore');
}