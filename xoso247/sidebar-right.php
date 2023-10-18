<?php

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
?>

<aside class="aside-300">
  <?php

  if (is_active_sidebar('right_sidebar')) {
    dynamic_sidebar('right_sidebar');
  } else { ?>
    Vui lòng chọn widget
  <?php }

  ?>
</aside>