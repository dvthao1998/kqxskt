<?php
$_SLUG = array();
function renderMenuNavigation($desktop = true)
{
  global $menu_items, $_SLUG, $menu_items_post_type;

  if ($desktop) {
    // Desktop menu
    foreach ($menu_items as $item) { //menu of taxonomy 
      $main_slug = array_keys($item['sub'])[0];

      echo "<li class='menu_li'><a href='" . site_url() . '/' . $item["slug"] . '/' . $main_slug . "/' class='menu_a' title='" . $item["title"] . "'>" . $item["label"] . "</a>";

      echo "<ul class='menu_down'>";
      if (!empty($item['sub'])) {
        foreach ($item['sub'] as $sub_slug => $sub_label) {

          echo '<li>
          <a href="' . site_url() . '/' . $item['slug'] . '/' . $sub_slug . '/' . '">
             ' . $sub_label . '
          </a>
        </li>';
        }

        echo "</ul>";
      }
      ;
      echo "</li>";
      $_SLUG[$item['type']] = site_url() . '/' . $item['slug'] . '/' . $main_slug . '/';
    }
    // Menu of post_type
    foreach ($menu_items_post_type as $item) {

      echo "<li class='menu_li'><a href='" . site_url() . '/' . $item["slug"] . '/' . "' class='menu_a' title='" . $item["title"] . "'>" . $item["label"] . "</a>";

      echo "<ul class='menu_down'>";
      if (!empty($item['sub'])) {
        foreach ($item['sub'] as $sub_slug => $sub_label) {

          echo '<li>
          <a href="' . site_url() . '/' . $item['slug'] . '-kqxs/' . $sub_slug . '/' . '">
             ' . $sub_label . '
          </a>
        </li>';
        }

        echo "</ul>";
      }
      ;
      echo "</li>";
      $_SLUG[$item['type']] = site_url() . '/' . $item['slug'] . '/' . $main_slug . '/';
    }
  } else {
    //Mobile menu
    foreach ($menu_items as $item) {
      $main_slug = array_keys($item['sub'])[0];

      echo "<div class='ac_item border_top'>
              <a href='" . site_url() . '/' . $item["slug"] . '/' . $main_slug . "/' class='ac_title_2' title='" . $item["title"] . "'>" ?>
      <img class="ic-m lazy" src="<?php echo get_theme_file_uri('assets/img/icon_xsmb.svg'); ?>"
        alt="<?php echo $item['title']; ?>">
      <?php echo $item["label"] . "
              </a>
              <span class='ac_icon'></span>\n";

      echo "<div class='ac_content'>
              <div class='ac_ul2' >";
      if (!empty($item['sub'])) {
        foreach ($item['sub'] as $sub_slug => $sub_label) {
          echo '
          <a href="' . site_url() . '/' . $item['slug'] . '/' . $sub_slug . '/' . '">
             ' . $sub_label . '
          </a>';
        }

      }
      echo "</div></div></div>";
    }
    // menu of post_type
    foreach ($menu_items as $item) {

      echo "<div class='ac_item border_top'>
              <a href='" . site_url() . '/' . $item["slug"] . '/' . "' class='ac_title_2' title='" . $item["title"] . "'>" ?>
      <img class="ic-m lazy" src="<?php echo get_theme_file_uri('assets/img/icon_xsmb.svg'); ?>"
        alt="<?php echo $item['title']; ?>">
      <?php echo $item["label"] . "
              </a>
              <span class='ac_icon'></span>\n";

      echo "<div class='ac_content'>
              <div class='ac_ul2' >";
      if (!empty($item['sub'])) {
        foreach ($item['sub'] as $sub_slug => $sub_label) {
          echo '
          <a href="' . site_url() . '/' . $item['slug'] . '-kqxs/' . $sub_slug . '/' . '">
             ' . $sub_label . '
          </a>';
        }

      }
      echo "</div></div></div>";
    }
  }
}