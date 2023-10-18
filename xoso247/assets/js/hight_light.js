$(document).ready(function () {
  function refreshHighlightLoto() {
    var t, n;
    if ($("section .section-content").length) {
      setNumber();
      initHighLightDauDuoi();
      t = $("section .section-content");
      n = $(t[0]);
      n.closest("section").is(":hidden") && (n = $(t[1]));
      var u = n.find(".config-item.active"),
        f = n.find(".number-config.active"),
        i = u.attr("value"),
        r = f.attr("data-number");
      $(".config-item").removeClass("active");
      $('.config-item[value="' + i + '"]').addClass("active");
      $('.number-config[data-number="' + r + '"]').addClass("active");
      highlinghtLoto(i, r);
    }
  }
  function setNumber() {
    $(".config-item").on("click", function () {
      var t, n;
      $(this).parents().children(".config-item").removeClass("active");
      t = $(this).attr("value");
      $(this).addClass("active");
      n = $(this)
        .parent()
        .parent()
        .find(".number-config.active")
        .attr("data-number");
      typeof n == "undefined" && (n = -1);
      highlinghtLoto(t, n, $(this));
    });
  }

  function initHighLightDauDuoi() {
    $(".number-config").on("click", function () {
      var n = -1,
        t;
      $(this).hasClass("active")
        ? $(this).removeClass("active")
        : ($(this)
            .parent()
            .parent()
            .find(".number-config.active")
            .removeClass("active"),
          $(this).addClass("active"),
          (n = $(this).attr("data-number")));
      t = $(this).parent().parent().find(".config-item.active").attr("value");
      highlinghtLoto(t, n, $(this));
    });
  }

  function highlinghtLoto(n, t, i) {
    var r = $(".number-config.active"),
      u;
    typeof i != "undefined" && (r = i);
    u = r.parent().parent().find(".table-kqxs");
    u.find("span").each(function (i, r) {
      var u = $(r).attr("data-loto"),
        f,
        e;
      typeof u != "undefined" &&
        u != "..." &&
        (t != -1
          ? ((n == 2 || n == 3) && u.length > n && (u = u.substr(u.length - n)),
            (f = u.substring(u.length - 2)),
            (e = u.substring(0, u.length - 2)),
            f.includes(t)
              ? $(r).html(e + '<b class="xs-bong">' + f + "</b>")
              : $(r).text(u))
          : ((n == 2 || n == 3) && u.length > n && (u = u.substr(u.length - n)),
            $(r).text(u)));
    });
  }

  initHighLightDauDuoi();
  setNumber();
});
