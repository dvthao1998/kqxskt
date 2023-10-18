$(document).ready(function () {
  $(".widget-title-link").click(function () {
    var content = $(this).next(".link-item2-sub");
    content.toggleClass("show");
  });
});
