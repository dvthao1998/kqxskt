jQuery(document).ready(function ($) {
  // Ngăn chặn user xóa mất bài "mẫu vé số trúng thưởng"

  let text = $("#editable-post-name-full").text();
  if (text === "mau-ve-trung-thuong-xo-so-kien-thiet-moi-nhat") {
    let previousSibling = $("#editable-post-name-full").prevAll().first();
    previousSibling.remove();
  }

  let titles = $(".row-title");

  titles.each((index, title) => {
    if ($(title).text() === "MẪU VÉ TRÚNG THƯỞNG xổ số kiến thiết mới nhất") {
      $($(title).parent().nextAll()[1]).children()[1].remove();
    }
  });

  let input = $('input[value="mau-ve-trung-thuong-xo-so-kien-thiet-moi-nhat"]');
  input.remove();

  let titleInput = $(
    'input[value="MẪU VÉ TRÚNG THƯỞNG xổ số kiến thiết mới nhất"]'
  );
  titleInput.remove();
});
