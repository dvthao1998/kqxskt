<!DOCTYPE html>
<html lang=vi>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"
    integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <title>
    <?php the_title(); ?>
  </title>
  <?php wp_head(); ?>
</head>

<body>
  <?php
  get_template_part('inc/patterns/DEBUG'); ?>
  <!-- ============================================== delete when done -->
  <header class="header">
    <div class="header-content headermobi">
      <div class="main-content">
        <span class="btn-pushbar-3" data-pushbar-target="left">
          <img alt="menu xo so" class="icon-menu" src="<?php echo get_theme_file_uri('assets/img/ic_menu.svg'); ?>" />
        </span>
        <div class="header-logo">
          <a href="/">
            XOSO247
          </a>
        </div>
        <div class="header-right">
          <div class="header-time">
            <?php
            $today = date_i18n('l');
            $date = date_i18n('j/m/Y');
            echo 'Hôm nay: ' . $today . ' ngày ' . $date;
            ?>
          </div>


        </div>
      </div>
    </div>

    <div class=headpn>
      <nav class=nav_header> <span class=nav-scrol-link-ic data-pushbar-target=left><img alt="menu xo so"
            class="icon-menu2 lazy" src="<?php echo get_theme_file_uri('assets/img/ic_menu.svg'); ?>" />
        </span>
        <ul class=menu_ul>
          <li class="menu_li hide"><a href="/" class=menu_a title="Trang chủ"> <img alt="trang chu xo so"
                class=icon-home src="<?php echo get_theme_file_uri('assets/img/home.png'); ?>"></a>
            <?php
            renderMenuNavigation();
            ?>
      </nav>
    </div>
  </header>
  <!-- MObile menu -->

  <aside data-pushbar-id="left" class="pushbar from_left pushbar-hide"><span data-pushbar-close=""
      class="btn-pushbar-close"><img alt="dong menu" class="icon-back lazy"
        src="<?php echo get_theme_file_uri('assets/img/list2.png'); ?>" />
      <div class="user-sidebar"><a href="/">XOSO247</a></div>

      <div class=ac-menu>
        <div class=ac_item><a href="/" class=ac_title_2><img alt="trang chu xo so" class="ic-m lazy"
              src="<?php echo get_theme_file_uri('assets/img/icon_home.svg'); ?>">Trang chủ</a></div>
        <?php renderMenuNavigation(false); ?>
  </aside>