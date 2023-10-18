<?php
// =====
function menu_item_link($tax, $tax_term_slug, $anchor)
{
  // return a <a></a> has link of main menu item
  $taxonomy = get_taxonomy($tax);
  $tax_slug = $taxonomy->rewrite['slug'];
  $terms = get_terms([
    'taxonomy' => $tax,
    'hide_empty' => false,
  ]);
  if ($terms && !is_wp_error($terms)) {
    $term_slug = '';
    foreach ($terms as $term) {
      $term->slug == $tax_term_slug ? $term_slug = $term->slug : '';
    }
    $term_url = site_url() . '/' . $tax_slug . '/' . $term_slug . '/';
    echo '<a href="' . $term_url . '" title="' . $anchor . '">' . ' ' . $anchor . ' ' . '</a>';
  }
}

function get_menu_item_link($tax, $tax_term_slug)
{
  $taxonomy = get_taxonomy($tax);
  $tax_slug = $taxonomy->rewrite['slug'];
  $terms = get_terms([
    'taxonomy' => $tax,
    'hide_empty' => false,
  ]);
  if ($terms && !is_wp_error($terms)) {
    $term_slug = '';
    foreach ($terms as $term) {
      $term->slug == $tax_term_slug ? $term_slug = $term->slug : '';
    }
    $term_url = site_url() . '/' . $tax_slug . '/' . $term_slug . '/';
    return $term_url;
  }
}