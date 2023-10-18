/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
function touchMove() {
  headercroll();
}
function onScroll() {
  headercroll();
}
function headercroll() {
  var n = $(window).scrollTop();
  n - lastPosition &&
    ((nav_header >= n
      ? ($(".nav_header").removeClass("nav_hidden"), $(".nav_header"))
      : n > lastPosition
      ? n > nav_header + 50 &&
        n > menuOffsetTop &&
        ($(".nav_header").removeClass("nav_show").addClass("nav_hidden"),
        $(".nav_header"))
      : lastPosition > n + 5 &&
        n > nav_header &&
        $(".nav_header").removeClass("nav_show").removeClass("nav_hidden")) &&
      (n > lastPosition ||
        (n > menuOffsetTop
          ? ($("#opennav").removeClass("ic-none"),
            $(".nav_header").removeClass("nav_hidden").addClass("nav_show"))
          : ($("#opennav").addClass("ic-none"),
            $(".nav_header")
              .removeClass("nav_hidden")
              .removeClass("nav_show")))),
    (lastPosition = n));
}
function validateDate(n) {
  var t = /^(\d{4})[-\/](\d{2})[-\/](\d{2})$/.exec(n);
  if (t == null) return !1;
  var r = t[3],
    u = t[2] - 1,
    f = t[1],
    i = new Date(f, u, r),
    e = i.getDate() == r && i.getMonth() == u && i.getFullYear() == f;
  return { Date: i, IsValid: e };
}
function validateNumberDetector(n, t, i, r) {
  if (/^[0-9,]+$/.test(n))
    if (/\d/.test(n)) {
      var u = validateDate(t),
        f = validateDate(i);
      u.IsValid && f.IsValid && u.Date < f.Date
        ? r(u, f)
        : u.IsValid && f.IsValid
        ? u.Date >= f.Date &&
          alert(
            "NgĂ y chá»n khĂ´ng há»£p lá»‡ (Vui lĂ²ng nháº­p ngĂ y káº¿t thĂºc lá»›n hÆ¡n ngĂ y báº¯t Ä‘áº§u)."
          )
        : alert("NgĂ y chá»n khĂ´ng há»£p lá»‡ (ngĂ y/thĂ¡ng/nÄƒm).");
    } else
      alert(
        "Báº¡n cĂ³ thá»ƒ thá»‘ng kĂª má»™t hoáº·c nhiá»u sá»‘: VĂ­ dá»¥: 36 hoáº·c 68,86"
      );
  else
    n.trim().length > 0
      ? alert(
          "Báº¡n cĂ³ thá»ƒ thá»‘ng kĂª má»™t hoáº·c nhiá»u sá»‘: VĂ­ dá»¥: 36 hoáº·c 68,86"
        )
      : alert(
          "Má»i báº¡n nháº­p Ä‘áº§y Ä‘á»§ cĂ¡c thĂ´ng tin Ä‘á»ƒ xem thá»‘ng kĂª. \r\n Báº¡n cĂ³ thá»ƒ thá»‘ng kĂª má»™t hoáº·c nhiá»u sá»‘: VĂ­ dá»¥: 36 hoáº·c 68,86"
        );
  return !1;
}
function formatDate(n, t) {
  var u = n.getFullYear(),
    i = n.getMonth() + 1,
    r = n.getDate();
  return (r < 10 ? "0" + r : r) + t + (i < 10 ? "0" + i : i) + t + u;
}
function getLinkDayOfWeek(n) {
  var i = "",
    r,
    t;
  n == 2
    ? ((r = "XSMN"), (t = "xsmn"))
    : n == 3
    ? ((r = "XSMT"), (t = "xsmt"))
    : ((r = "XSMB"), (t = "xsmb"));
  switch (new Date().getDay()) {
    case 0:
      i = "/" + t + "-chu-nhat-cn.html";
      break;
    case 1:
      i += "/" + t + "-thu-2.html";
      break;
    case 2:
      i += "/" + t + "-thu-3.html";
      break;
    case 3:
      i += "/" + t + "-thu-4.html";
      break;
    case 4:
      i += "/" + t + "-thu-5.html";
      break;
    case 5:
      i += "/" + t + "-thu-6.html";
      break;
    case 6:
      i += "/" + t + "-thu-7.html";
  }
  return i;
}
function changCurrentLotteryLive() {
  var u = new Date(),
    f = u.getHours(),
    t = u.getMinutes(),
    i = u.getDate(),
    r = u.getMonth() + 1,
    s = u.getFullYear(),
    h =
      "kqngay_" + (i < 10 ? "0" + i : "" + i) + (r < 10 ? "0" + r : "" + r) + s,
    e =
      (i < 10 ? "0" + i : "" + i) + "-" + (r < 10 ? "0" + r : "" + r) + "-" + s,
    n = window.location.href,
    o = window.location.origin;
  n.indexOf("#") >= 0 && (n = n.split("#")[0]);
  n.indexOf("?") >= 0 && (n = n.split("?")[0]);
  f == 17 && t >= 10 && t <= 40
    ? ($("#lottery_living_name").text("miền Trung"),
      n == o + "/" ||
      n.indexOf("/xo-so-mien-trung/xsmt-p1.html") >= 0 ||
      n.indexOf("/tuong-thuat-mien-trung/xsmt-tructiep.html") >= 0
        ? $("#curr_living_btn").attr("href", "#mt_" + h)
        : $("#curr_living_btn").attr("href", "/xo-so-mien-trung/xsmt-p1.html"),
      n.indexOf("/xo-so-mien-trung/xsmt-p1.html") < 0 &&
      n.indexOf("/tuong-thuat-mien-trung/xsmt-tructiep.html") < 0 &&
      n.indexOf(getLinkDayOfWeek(3)) < 0 &&
      n.indexOf(e) < 0
        ? $("#curr_living_neo").show()
        : $("#curr_living_neo").hide())
    : f == 16 && t >= 10 && t <= 40
    ? ($("#lottery_living_name").text("miền Nam"),
      n == o + "/" ||
      n.indexOf("/xo-so-mien-nam/xsmn-p1.html") >= 0 ||
      n.indexOf("/tuong-thuat-mien-nam/xsmn-tructiep.html") >= 0
        ? $("#curr_living_btn").attr("href", "#mn_" + h)
        : $("#curr_living_btn").attr("href", "/xo-so-mien-nam/xsmn-p1.html"),
      n.indexOf("/xo-so-mien-nam/xsmn-p1.html") < 0 &&
      n.indexOf("/tuong-thuat-mien-nam/xsmn-tructiep.html") < 0 &&
      n.indexOf(getLinkDayOfWeek(2)) < 0 &&
      n.indexOf(e) < 0
        ? $("#curr_living_neo").show()
        : $("#curr_living_neo").hide())
    : f == 18 && t >= 10 && t <= 40
    ? ($("#lottery_living_name").text("miá»n Báº¯c"),
      $("#curr_living_btn").attr("href", "/xo-so-mien-bac/xsmb-p1.html"),
      n != o + "/" &&
      n.indexOf("/xo-so-mien-bac/xsmb-p1.html") < 0 &&
      n.indexOf("/tuong-thuat-mien-bac/xsmb-tructiep.html") < 0 &&
      n.indexOf(getLinkDayOfWeek(1)) < 0 &&
      n.indexOf(e) < 0
        ? $("#curr_living_neo").show()
        : $("#curr_living_neo").hide())
    : $("#curr_living_neo").hide();
}
function loadLotteryMore(n) {
  var t = { pageIndex: pageIndex };
  $.xosoAjax(n, "Get", t, function (n) {
    n.length > 0
      ? (pageIndex++, $("#ajaxContentContainer").append(n))
      : $(".xem-them-page").hide();
  });
}
function loadLotteryMoreSo(n) {
  var t = parseInt($("#loadmore").attr("data-page")),
    i;
  t = t + 1;
  i = { pageIndex: t };
  $.xosoAjax(n, "Get", i, function (n) {
    var r, u, f, i, e;
    if (n.length > 0) {
      r = n;
      try {
        $(".content-left .section>.table-result.result-xs").length &&
          ((u = $(".content-left .section>.table-result.result-xs").last()),
          $(u).find("tr").length < 7 &&
            ((f = $("<div></div>").append(n)),
            (i = f.find(".section>.table-result.result-xs").first()),
            $(i).find("tr").length < 7 &&
              ((e = $(i).find("tbody").html()),
              u.find("tbody").append(e),
              i.remove(),
              (r = f.html()))));
      } catch (o) {
        console.log(o);
      }
      $("#ajaxContentContainer").append(r);
      $("#loadmore").attr("data-page", t);
    } else $(".xem-them-page").hide();
  });
}
function loadLotteryMoreByDayOfWeek(n, t) {
  var i = { pageIndex: pageIndex, dayOfWeek: t };
  $.xosoAjax(n, "Get", i, function (n) {
    n.length > 0
      ? (pageIndex++, $("#ajaxContentContainer").append(n))
      : $(".load-more").hide();
  });
}
function loadMega645More(n) {
  var t = { pageIndex: pageIndex };
  $.xosoAjax(n, "Get", t, function (n) {
    n.length > 0
      ? (pageIndex++, $("#ajaxContentContainer").append(n))
      : $(".xem-them-page").hide();
  });
}
function loadNewsMore(n, t) {
  var i = { pageIndex: pageIndex, cateId: t };
  $.xosoAjax(n, "Get", i, function (n) {
    n.length > 0
      ? (pageIndex++, $("#ajaxContentContainer").append(n))
      : $(".load-more").hide();
  });
}
function loadLotteryMoreV2(n) {
  var t = { pageIndex: pageIndex };
  $.xosoAjax(n, "Get", t, function (n) {
    n.length > 0
      ? (pageIndex++,
        $("#ajaxContentContainer").append(n),
        refreshHighlightLoto())
      : $(".xem-them-page").hide();
  });
}
function loadLotteryMoreByDayOfWeekV2(n, t) {
  var i = { pageIndex: pageIndex, dayOfWeek: t };
  $.xosoAjax(n, "Get", i, function (n) {
    n.length > 0
      ? (pageIndex++,
        $("#ajaxContentContainer").append(n),
        refreshHighlightLoto())
      : $(".load-more").hide();
  });
}
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
  u = r.parent().parent().find(".table-xsmn");
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
var pageIndex;
!(function (n, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = n.document
        ? t(n, !0)
        : function (n) {
            if (!n.document)
              throw new Error("jQuery requires a window with a document");
            return t(n);
          })
    : t(n);
})("undefined" != typeof window ? window : this, function (n, t) {
  "use strict";
  function br(n, t, i) {
    var r,
      e,
      u = (i = i || f).createElement("script");
    if (((u.text = n), t))
      for (r in oe)
        (e = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          u.setAttribute(r, e);
    i.head.appendChild(u).parentNode.removeChild(u);
  }
  function ut(n) {
    return null == n
      ? n + ""
      : "object" == typeof n || "function" == typeof n
      ? ri[pr.call(n)] || "object"
      : typeof n;
  }
  function pi(n) {
    var t = !!n && "length" in n && n.length,
      i = ut(n);
    return (
      !u(n) &&
      !rt(n) &&
      ("array" === i ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in n))
    );
  }
  function c(n, t) {
    return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase();
  }
  function bi(n, t, r) {
    return u(t)
      ? i.grep(n, function (n, i) {
          return !!t.call(n, i, n) !== r;
        })
      : t.nodeType
      ? i.grep(n, function (n) {
          return (n === t) !== r;
        })
      : "string" != typeof t
      ? i.grep(n, function (n) {
          return -1 < ii.call(t, n) !== r;
        })
      : i.filter(t, n, r);
  }
  function uu(n, t) {
    while ((n = n[t]) && 1 !== n.nodeType);
    return n;
  }
  function et(n) {
    return n;
  }
  function fi(n) {
    throw n;
  }
  function fu(n, t, i, r) {
    var f;
    try {
      n && u((f = n.promise))
        ? f.call(n).done(t).fail(i)
        : n && u((f = n.then))
        ? f.call(n, t, i)
        : t.apply(void 0, [n].slice(r));
    } catch (n) {
      i.apply(void 0, [n]);
    }
  }
  function oi() {
    f.removeEventListener("DOMContentLoaded", oi);
    n.removeEventListener("load", oi);
    i.ready();
  }
  function ce(n, t) {
    return t.toUpperCase();
  }
  function y(n) {
    return n.replace(se, "ms-").replace(he, ce);
  }
  function bt() {
    this.expando = i.expando + bt.uid++;
  }
  function ou(n, t, i) {
    var u, r;
    if (void 0 === i && 1 === n.nodeType)
      if (
        ((u = "data-" + t.replace(ae, "-$&").toLowerCase()),
        "string" == typeof (i = n.getAttribute(u)))
      ) {
        try {
          i =
            "true" === (r = i) ||
            ("false" !== r &&
              ("null" === r
                ? null
                : r === +r + ""
                ? +r
                : le.test(r)
                ? JSON.parse(r)
                : r));
        } catch (n) {}
        o.set(n, t, i);
      } else i = void 0;
    return i;
  }
  function hu(n, t, r, u) {
    var s,
      h,
      c = 20,
      l = u
        ? function () {
            return u.cur();
          }
        : function () {
            return i.css(n, t, "");
          },
      o = l(),
      e = (r && r[3]) || (i.cssNumber[t] ? "" : "px"),
      f =
        n.nodeType &&
        (i.cssNumber[t] || ("px" !== e && +o)) &&
        kt.exec(i.css(n, t));
    if (f && f[3] !== e) {
      for (o /= 2, e = e || f[3], f = +o || 1; c--; )
        i.style(n, t, f + e),
          (1 - h) * (1 - (h = l() / o || 0.5)) <= 0 && (c = 0),
          (f /= h);
      f *= 2;
      i.style(n, t, f + e);
      r = r || [];
    }
    return (
      r &&
        ((f = +f || +o || 0),
        (s = r[1] ? f + (r[1] + 1) * r[2] : +r[2]),
        u && ((u.unit = e), (u.start = f), (u.end = s))),
      s
    );
  }
  function ht(n, t) {
    for (var h, f, a, s, c, l, e, o = [], u = 0, v = n.length; u < v; u++)
      (f = n[u]).style &&
        ((h = f.style.display),
        t
          ? ("none" === h &&
              ((o[u] = r.get(f, "display") || null),
              o[u] || (f.style.display = "")),
            "" === f.style.display &&
              dt(f) &&
              (o[u] =
                ((e = c = s = void 0),
                (c = (a = f).ownerDocument),
                (l = a.nodeName),
                (e = ki[l]) ||
                  ((s = c.body.appendChild(c.createElement(l))),
                  (e = i.css(s, "display")),
                  s.parentNode.removeChild(s),
                  "none" === e && (e = "block"),
                  (ki[l] = e)))))
          : "none" !== h && ((o[u] = "none"), r.set(f, "display", h)));
    for (u = 0; u < v; u++) null != o[u] && (n[u].style.display = o[u]);
    return n;
  }
  function s(n, t) {
    var r;
    return (
      (r =
        "undefined" != typeof n.getElementsByTagName
          ? n.getElementsByTagName(t || "*")
          : "undefined" != typeof n.querySelectorAll
          ? n.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && c(n, t)) ? i.merge([n], r) : r
    );
  }
  function di(n, t) {
    for (var i = 0, u = n.length; i < u; i++)
      r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"));
  }
  function vu(n, t, r, u, f) {
    for (
      var e,
        o,
        p,
        a,
        w,
        v,
        c = t.createDocumentFragment(),
        y = [],
        l = 0,
        b = n.length;
      l < b;
      l++
    )
      if ((e = n[l]) || 0 === e)
        if ("object" === ut(e)) i.merge(y, e.nodeType ? [e] : e);
        else if (au.test(e)) {
          for (
            o = o || c.appendChild(t.createElement("div")),
              p = (cu.exec(e) || ["", ""])[1].toLowerCase(),
              a = h[p] || h._default,
              o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2],
              v = a[0];
            v--;

          )
            o = o.lastChild;
          i.merge(y, o.childNodes);
          (o = c.firstChild).textContent = "";
        } else y.push(t.createTextNode(e));
    for (c.textContent = "", l = 0; (e = y[l++]); )
      if (u && -1 < i.inArray(e, u)) f && f.push(e);
      else if (
        ((w = st(e)), (o = s(c.appendChild(e), "script")), w && di(o), r)
      )
        for (v = 0; (e = o[v++]); ) lu.test(e.type || "") && r.push(e);
    return c;
  }
  function ct() {
    return !0;
  }
  function lt() {
    return !1;
  }
  function we(n, t) {
    return (
      (n ===
        (function () {
          try {
            return f.activeElement;
          } catch (n) {}
        })()) ==
      ("focus" === t)
    );
  }
  function gi(n, t, r, u, f, e) {
    var o, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof r && ((u = u || r), (r = void 0)), t))
        gi(n, s, r, u, t[s], e);
      return n;
    }
    if (
      (null == u && null == f
        ? ((f = r), (u = r = void 0))
        : null == f &&
          ("string" == typeof r
            ? ((f = u), (u = void 0))
            : ((f = u), (u = r), (r = void 0))),
      !1 === f)
    )
      f = lt;
    else if (!f) return n;
    return (
      1 === e &&
        ((o = f),
        ((f = function (n) {
          return i().off(n), o.apply(this, arguments);
        }).guid = o.guid || (o.guid = i.guid++))),
      n.each(function () {
        i.event.add(this, t, f, u, r);
      })
    );
  }
  function hi(n, t, u) {
    u
      ? (r.set(n, t, !1),
        i.event.add(n, t, {
          namespace: !1,
          handler: function (n) {
            var o,
              e,
              f = r.get(this, t);
            if (1 & n.isTrigger && this[t]) {
              if (f.length)
                (i.event.special[t] || {}).delegateType && n.stopPropagation();
              else if (
                ((f = k.call(arguments)),
                r.set(this, t, f),
                (o = u(this, t)),
                this[t](),
                f !== (e = r.get(this, t)) || o ? r.set(this, t, !1) : (e = {}),
                f !== e)
              )
                return (
                  n.stopImmediatePropagation(), n.preventDefault(), e.value
                );
            } else
              f.length &&
                (r.set(this, t, {
                  value: i.event.trigger(
                    i.extend(f[0], i.Event.prototype),
                    f.slice(1),
                    this
                  ),
                }),
                n.stopImmediatePropagation());
          },
        }))
      : void 0 === r.get(n, t) && i.event.add(n, t, ct);
  }
  function pu(n, t) {
    return (
      (c(n, "table") &&
        c(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        i(n).children("tbody")[0]) ||
      n
    );
  }
  function ge(n) {
    return (n.type = (null !== n.getAttribute("type")) + "/" + n.type), n;
  }
  function no(n) {
    return (
      "true/" === (n.type || "").slice(0, 5)
        ? (n.type = n.type.slice(5))
        : n.removeAttribute("type"),
      n
    );
  }
  function wu(n, t) {
    var u, s, f, h, c, e;
    if (1 === t.nodeType) {
      if (r.hasData(n) && (e = r.get(n).events))
        for (f in (r.remove(t, "handle events"), e))
          for (u = 0, s = e[f].length; u < s; u++) i.event.add(t, f, e[f][u]);
      o.hasData(n) && ((h = o.access(n)), (c = i.extend({}, h)), o.set(t, c));
    }
  }
  function at(n, t, f, o) {
    t = yr(t);
    var a,
      b,
      l,
      v,
      h,
      y,
      c = 0,
      p = n.length,
      d = p - 1,
      w = t[0],
      k = u(w);
    if (k || (1 < p && "string" == typeof w && !e.checkClone && ke.test(w)))
      return n.each(function (i) {
        var r = n.eq(i);
        k && (t[0] = w.call(this, i, r.html()));
        at(r, t, f, o);
      });
    if (
      p &&
      ((b = (a = vu(t, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === a.childNodes.length && (a = b),
      b || o)
    ) {
      for (v = (l = i.map(s(a, "script"), ge)).length; c < p; c++)
        (h = a),
          c !== d &&
            ((h = i.clone(h, !0, !0)), v && i.merge(l, s(h, "script"))),
          f.call(n[c], h, c);
      if (v)
        for (y = l[l.length - 1].ownerDocument, i.map(l, no), c = 0; c < v; c++)
          (h = l[c]),
            lu.test(h.type || "") &&
              !r.access(h, "globalEval") &&
              i.contains(y, h) &&
              (h.src && "module" !== (h.type || "").toLowerCase()
                ? i._evalUrl &&
                  !h.noModule &&
                  i._evalUrl(
                    h.src,
                    { nonce: h.nonce || h.getAttribute("nonce") },
                    y
                  )
                : br(h.textContent.replace(de, ""), h, y));
    }
    return n;
  }
  function bu(n, t, r) {
    for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++)
      r || 1 !== u.nodeType || i.cleanData(s(u)),
        u.parentNode &&
          (r && st(u) && di(s(u, "script")), u.parentNode.removeChild(u));
    return n;
  }
  function ni(n, t, r) {
    var o,
      s,
      h,
      f,
      u = n.style;
    return (
      (r = r || ci(n)) &&
        ("" !== (f = r.getPropertyValue(t) || r[t]) ||
          st(n) ||
          (f = i.style(n, t)),
        !e.pixelBoxStyles() &&
          nr.test(f) &&
          to.test(t) &&
          ((o = u.width),
          (s = u.minWidth),
          (h = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = f),
          (f = r.width),
          (u.width = o),
          (u.minWidth = s),
          (u.maxWidth = h))),
      void 0 !== f ? f + "" : f
    );
  }
  function du(n, t) {
    return {
      get: function () {
        if (!n()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function tr(n) {
    var t = i.cssProps[n] || tf[n];
    return (
      t ||
      (n in nf
        ? n
        : (tf[n] =
            (function (n) {
              for (
                var i = n[0].toUpperCase() + n.slice(1), t = gu.length;
                t--;

              )
                if ((n = gu[t] + i) in nf) return n;
            })(n) || n))
    );
  }
  function ff(n, t, i) {
    var r = kt.exec(t);
    return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t;
  }
  function ir(n, t, r, u, f, e) {
    var o = "width" === t ? 1 : 0,
      h = 0,
      s = 0;
    if (r === (u ? "border" : "content")) return 0;
    for (; o < 4; o += 2)
      "margin" === r && (s += i.css(n, r + b[o], !0, f)),
        u
          ? ("content" === r && (s -= i.css(n, "padding" + b[o], !0, f)),
            "margin" !== r && (s -= i.css(n, "border" + b[o] + "Width", !0, f)))
          : ((s += i.css(n, "padding" + b[o], !0, f)),
            "padding" !== r
              ? (s += i.css(n, "border" + b[o] + "Width", !0, f))
              : (h += i.css(n, "border" + b[o] + "Width", !0, f)));
    return (
      !u &&
        0 <= e &&
        (s +=
          Math.max(
            0,
            Math.ceil(
              n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - 0.5
            )
          ) || 0),
      s
    );
  }
  function ef(n, t, r) {
    var f = ci(n),
      o =
        (!e.boxSizingReliable() || r) &&
        "border-box" === i.css(n, "boxSizing", !1, f),
      s = o,
      u = ni(n, t, f),
      h = "offset" + t[0].toUpperCase() + t.slice(1);
    if (nr.test(u)) {
      if (!r) return u;
      u = "auto";
    }
    return (
      ((!e.boxSizingReliable() && o) ||
        (!e.reliableTrDimensions() && c(n, "tr")) ||
        "auto" === u ||
        (!parseFloat(u) && "inline" === i.css(n, "display", !1, f))) &&
        n.getClientRects().length &&
        ((o = "border-box" === i.css(n, "boxSizing", !1, f)),
        (s = h in n) && (u = n[h])),
      (u = parseFloat(u) || 0) +
        ir(n, t, r || (o ? "border" : "content"), s, f, u) +
        "px"
    );
  }
  function a(n, t, i, r, u) {
    return new a.prototype.init(n, t, i, r, u);
  }
  function rr() {
    li &&
      (!1 === f.hidden && n.requestAnimationFrame
        ? n.requestAnimationFrame(rr)
        : n.setTimeout(rr, i.fx.interval),
      i.fx.tick());
  }
  function cf() {
    return (
      n.setTimeout(function () {
        vt = void 0;
      }),
      (vt = Date.now())
    );
  }
  function ai(n, t) {
    var u,
      r = 0,
      i = { height: n };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (u = b[r])] = i["padding" + u] = n;
    return t && (i.opacity = i.width = n), i;
  }
  function lf(n, t, i) {
    for (
      var u,
        f = (v.tweeners[t] || []).concat(v.tweeners["*"]),
        r = 0,
        e = f.length;
      r < e;
      r++
    )
      if ((u = f[r].call(i, t, n))) return u;
  }
  function v(n, t, r) {
    var o,
      s,
      h = 0,
      a = v.prefilters.length,
      e = i.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (s) return !1;
        for (
          var o = vt || cf(),
            t = Math.max(0, f.startTime + f.duration - o),
            i = 1 - (t / f.duration || 0),
            r = 0,
            u = f.tweens.length;
          r < u;
          r++
        )
          f.tweens[r].run(i);
        return (
          e.notifyWith(n, [f, i, t]),
          i < 1 && u
            ? t
            : (u || e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f]), !1)
        );
      },
      f = e.promise({
        elem: n,
        props: i.extend({}, t),
        opts: i.extend(!0, { specialEasing: {}, easing: i.easing._default }, r),
        originalProperties: t,
        originalOptions: r,
        startTime: vt || cf(),
        duration: r.duration,
        tweens: [],
        createTween: function (t, r) {
          var u = i.Tween(
            n,
            f.opts,
            t,
            r,
            f.opts.specialEasing[t] || f.opts.easing
          );
          return f.tweens.push(u), u;
        },
        stop: function (t) {
          var i = 0,
            r = t ? f.tweens.length : 0;
          if (s) return this;
          for (s = !0; i < r; i++) f.tweens[i].run(1);
          return (
            t
              ? (e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f, t]))
              : e.rejectWith(n, [f, t]),
            this
          );
        },
      }),
      c = f.props;
    for (
      !(function (n, t) {
        var r, f, e, u, o;
        for (r in n)
          if (
            ((e = t[(f = y(r))]),
            (u = n[r]),
            Array.isArray(u) && ((e = u[1]), (u = n[r] = u[0])),
            r !== f && ((n[f] = u), delete n[r]),
            (o = i.cssHooks[f]) && ("expand" in o))
          )
            for (r in ((u = o.expand(u)), delete n[f], u))
              (r in n) || ((n[r] = u[r]), (t[r] = e));
          else t[f] = e;
      })(c, f.opts.specialEasing);
      h < a;
      h++
    )
      if ((o = v.prefilters[h].call(f, n, c, f.opts)))
        return (
          u(o.stop) &&
            (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)),
          o
        );
    return (
      i.map(c, lf, f),
      u(f.opts.start) && f.opts.start.call(n, f),
      f
        .progress(f.opts.progress)
        .done(f.opts.done, f.opts.complete)
        .fail(f.opts.fail)
        .always(f.opts.always),
      i.fx.timer(i.extend(l, { elem: n, anim: f, queue: f.opts.queue })),
      f
    );
  }
  function tt(n) {
    return (n.match(l) || []).join(" ");
  }
  function it(n) {
    return (n.getAttribute && n.getAttribute("class")) || "";
  }
  function ur(n) {
    return Array.isArray(n) ? n : ("string" == typeof n && n.match(l)) || [];
  }
  function sr(n, t, r, u) {
    var f;
    if (Array.isArray(t))
      i.each(t, function (t, i) {
        r || uo.test(n)
          ? u(n, i)
          : sr(
              n + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              r,
              u
            );
      });
    else if (r || "object" !== ut(t)) u(n, t);
    else for (f in t) sr(n + "[" + f + "]", t[f], r, u);
  }
  function gf(n) {
    return function (t, i) {
      "string" != typeof t && ((i = t), (t = "*"));
      var r,
        f = 0,
        e = t.toLowerCase().match(l) || [];
      if (u(i))
        while ((r = e[f++]))
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (n[r] = n[r] || []).unshift(i))
            : (n[r] = n[r] || []).push(i);
    };
  }
  function ne(n, t, r, u) {
    function e(s) {
      var h;
      return (
        (f[s] = !0),
        i.each(n[s] || [], function (n, i) {
          var s = i(t, r, u);
          return "string" != typeof s || o || f[s]
            ? o
              ? !(h = s)
              : void 0
            : (t.dataTypes.unshift(s), e(s), !1);
        }),
        h
      );
    }
    var f = {},
      o = n === hr;
    return e(t.dataTypes[0]) || (!f["*"] && e("*"));
  }
  function lr(n, t) {
    var r,
      u,
      f = i.ajaxSettings.flatOptions || {};
    for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
    return u && i.extend(!0, n, u), n;
  }
  var p = [],
    vr = Object.getPrototypeOf,
    k = p.slice,
    yr = p.flat
      ? function (n) {
          return p.flat.call(n);
        }
      : function (n) {
          return p.concat.apply([], n);
        },
    yi = p.push,
    ii = p.indexOf,
    ri = {},
    pr = ri.toString,
    ui = ri.hasOwnProperty,
    wr = ui.toString,
    ee = wr.call(Object),
    e = {},
    u = function (n) {
      return "function" == typeof n && "number" != typeof n.nodeType;
    },
    rt = function (n) {
      return null != n && n === n.window;
    },
    f = n.document,
    oe = { type: !0, src: !0, nonce: !0, noModule: !0 },
    kr = "3.5.1",
    i = function (n, t) {
      return new i.fn.init(n, t);
    },
    d,
    wi,
    nu,
    tu,
    iu,
    ru,
    l,
    eu,
    ei,
    ot,
    dt,
    ki,
    h,
    au,
    vt,
    li,
    yt,
    of,
    sf,
    hf,
    af,
    pt,
    vf,
    yf,
    pf,
    fr,
    er,
    te,
    wt,
    ie,
    ar,
    vi,
    re,
    ue,
    fe;
  i.fn = i.prototype = {
    jquery: kr,
    constructor: i,
    length: 0,
    toArray: function () {
      return k.call(this);
    },
    get: function (n) {
      return null == n ? k.call(this) : n < 0 ? this[n + this.length] : this[n];
    },
    pushStack: function (n) {
      var t = i.merge(this.constructor(), n);
      return (t.prevObject = this), t;
    },
    each: function (n) {
      return i.each(this, n);
    },
    map: function (n) {
      return this.pushStack(
        i.map(this, function (t, i) {
          return n.call(t, i, t);
        })
      );
    },
    slice: function () {
      return this.pushStack(k.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(
        i.grep(this, function (n, t) {
          return (t + 1) % 2;
        })
      );
    },
    odd: function () {
      return this.pushStack(
        i.grep(this, function (n, t) {
          return t % 2;
        })
      );
    },
    eq: function (n) {
      var i = this.length,
        t = +n + (n < 0 ? i : 0);
      return this.pushStack(0 <= t && t < i ? [this[t]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: yi,
    sort: p.sort,
    splice: p.splice,
  };
  i.extend = i.fn.extend = function () {
    var s,
      f,
      e,
      t,
      o,
      c,
      n = arguments[0] || {},
      r = 1,
      l = arguments.length,
      h = !1;
    for (
      "boolean" == typeof n && ((h = n), (n = arguments[r] || {}), r++),
        "object" == typeof n || u(n) || (n = {}),
        r === l && ((n = this), r--);
      r < l;
      r++
    )
      if (null != (s = arguments[r]))
        for (f in s)
          (t = s[f]),
            "__proto__" !== f &&
              n !== t &&
              (h && t && (i.isPlainObject(t) || (o = Array.isArray(t)))
                ? ((e = n[f]),
                  (c =
                    o && !Array.isArray(e)
                      ? []
                      : o || i.isPlainObject(e)
                      ? e
                      : {}),
                  (o = !1),
                  (n[f] = i.extend(h, c, t)))
                : void 0 !== t && (n[f] = t));
    return n;
  };
  i.extend({
    expando: "jQuery" + (kr + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (n) {
      throw new Error(n);
    },
    noop: function () {},
    isPlainObject: function (n) {
      var t, i;
      return (
        !(!n || "[object Object]" !== pr.call(n)) &&
        (!(t = vr(n)) ||
          ("function" ==
            typeof (i = ui.call(t, "constructor") && t.constructor) &&
            wr.call(i) === ee))
      );
    },
    isEmptyObject: function (n) {
      for (var t in n) return !1;
      return !0;
    },
    globalEval: function (n, t, i) {
      br(n, { nonce: t && t.nonce }, i);
    },
    each: function (n, t) {
      var r,
        i = 0;
      if (pi(n)) {
        for (r = n.length; i < r; i++) if (!1 === t.call(n[i], i, n[i])) break;
      } else for (i in n) if (!1 === t.call(n[i], i, n[i])) break;
      return n;
    },
    makeArray: function (n, t) {
      var r = t || [];
      return (
        null != n &&
          (pi(Object(n))
            ? i.merge(r, "string" == typeof n ? [n] : n)
            : yi.call(r, n)),
        r
      );
    },
    inArray: function (n, t, i) {
      return null == t ? -1 : ii.call(t, n, i);
    },
    merge: function (n, t) {
      for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
      return (n.length = r), n;
    },
    grep: function (n, t, i) {
      for (var u = [], r = 0, f = n.length, e = !i; r < f; r++)
        !t(n[r], r) !== e && u.push(n[r]);
      return u;
    },
    map: function (n, t, i) {
      var e,
        u,
        r = 0,
        f = [];
      if (pi(n))
        for (e = n.length; r < e; r++) null != (u = t(n[r], r, i)) && f.push(u);
      else for (r in n) null != (u = t(n[r], r, i)) && f.push(u);
      return yr(f);
    },
    guid: 1,
    support: e,
  });
  "function" == typeof Symbol && (i.fn[Symbol.iterator] = p[Symbol.iterator]);
  i.each(
    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
      " "
    ),
    function (n, t) {
      ri["[object " + t + "]"] = t.toLowerCase();
    }
  );
  d = (function (n) {
    function u(n, t, r, u) {
      var s,
        y,
        c,
        l,
        p,
        w,
        d,
        v = t && t.ownerDocument,
        a = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        "string" != typeof n || !n || (1 !== a && 9 !== a && 11 !== a))
      )
        return r;
      if (!u && (b(t), (t = t || i), h)) {
        if (11 !== a && (p = ar.exec(n)))
          if ((s = p[1])) {
            if (9 === a) {
              if (!(c = t.getElementById(s))) return r;
              if (c.id === s) return r.push(c), r;
            } else if (v && (c = v.getElementById(s)) && et(t, c) && c.id === s)
              return r.push(c), r;
          } else {
            if (p[2]) return k.apply(r, t.getElementsByTagName(n)), r;
            if (
              (s = p[3]) &&
              f.getElementsByClassName &&
              t.getElementsByClassName
            )
              return k.apply(r, t.getElementsByClassName(s)), r;
          }
        if (
          f.qsa &&
          !lt[n + " "] &&
          (!o || !o.test(n)) &&
          (1 !== a || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((d = n), (v = t), 1 === a && (er.test(n) || yi.test(n)))) {
            for (
              ((v = (ti.test(n) && ri(t.parentNode)) || t) === t && f.scope) ||
                ((l = t.getAttribute("id"))
                  ? (l = l.replace(pi, wi))
                  : t.setAttribute("id", (l = e))),
                y = (w = ft(n)).length;
              y--;

            )
              w[y] = (l ? "#" + l : ":scope") + " " + pt(w[y]);
            d = w.join(",");
          }
          try {
            return k.apply(r, v.querySelectorAll(d)), r;
          } catch (t) {
            lt(n, !0);
          } finally {
            l === e && t.removeAttribute("id");
          }
        }
      }
      return si(n.replace(at, "$1"), t, r, u);
    }
    function yt() {
      var n = [];
      return function i(r, u) {
        return (
          n.push(r + " ") > t.cacheLength && delete i[n.shift()],
          (i[r + " "] = u)
        );
      };
    }
    function l(n) {
      return (n[e] = !0), n;
    }
    function a(n) {
      var t = i.createElement("fieldset");
      try {
        return !!n(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t);
        t = null;
      }
    }
    function ii(n, i) {
      for (var r = n.split("|"), u = r.length; u--; ) t.attrHandle[r[u]] = i;
    }
    function ki(n, t) {
      var i = t && n,
        r =
          i &&
          1 === n.nodeType &&
          1 === t.nodeType &&
          n.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (i) while ((i = i.nextSibling)) if (i === t) return -1;
      return n ? 1 : -1;
    }
    function yr(n) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === n;
      };
    }
    function pr(n) {
      return function (t) {
        var i = t.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && t.type === n;
      };
    }
    function di(n) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === n
                : t.disabled === n
              : t.isDisabled === n || (t.isDisabled !== !n && vr(t) === n)
            : t.disabled === n
          : "label" in t && t.disabled === n;
      };
    }
    function it(n) {
      return l(function (t) {
        return (
          (t = +t),
          l(function (i, r) {
            for (var u, f = n([], i.length, t), e = f.length; e--; )
              i[(u = f[e])] && (i[u] = !(r[u] = i[u]));
          })
        );
      });
    }
    function ri(n) {
      return n && "undefined" != typeof n.getElementsByTagName && n;
    }
    function gi() {}
    function pt(n) {
      for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
      return i;
    }
    function wt(n, t, i) {
      var r = t.dir,
        u = t.next,
        f = u || r,
        o = i && "parentNode" === f,
        s = nr++;
      return t.first
        ? function (t, i, u) {
            while ((t = t[r])) if (1 === t.nodeType || o) return n(t, i, u);
            return !1;
          }
        : function (t, i, h) {
            var c,
              l,
              a,
              y = [v, s];
            if (h) {
              while ((t = t[r]))
                if ((1 === t.nodeType || o) && n(t, i, h)) return !0;
            } else
              while ((t = t[r]))
                if (1 === t.nodeType || o)
                  if (
                    ((l =
                      (a = t[e] || (t[e] = {}))[t.uniqueID] ||
                      (a[t.uniqueID] = {})),
                    u && u === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((c = l[f]) && c[0] === v && c[1] === s)
                      return (y[2] = c[2]);
                    if (((l[f] = y)[2] = n(t, i, h))) return !0;
                  }
            return !1;
          };
    }
    function ui(n) {
      return 1 < n.length
        ? function (t, i, r) {
            for (var u = n.length; u--; ) if (!n[u](t, i, r)) return !1;
            return !0;
          }
        : n[0];
    }
    function bt(n, t, i, r, u) {
      for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)
        (e = n[f]) && ((i && !i(e, r, u)) || (o.push(e), h && t.push(f)));
      return o;
    }
    function fi(n, t, i, r, f, o) {
      return (
        r && !r[e] && (r = fi(r)),
        f && !f[e] && (f = fi(f, o)),
        l(function (e, o, s, h) {
          var a,
            l,
            v,
            w = [],
            p = [],
            b = o.length,
            d =
              e ||
              (function (n, t, i) {
                for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
                return i;
              })(t || "*", s.nodeType ? [s] : s, []),
            y = !n || (!e && t) ? d : bt(d, w, n, s, h),
            c = i ? (f || (e ? n : b || r) ? [] : o) : y;
          if ((i && i(y, c, s, h), r))
            for (a = bt(c, p), r(a, [], s, h), l = a.length; l--; )
              (v = a[l]) && (c[p[l]] = !(y[p[l]] = v));
          if (e) {
            if (f || n) {
              if (f) {
                for (a = [], l = c.length; l--; )
                  (v = c[l]) && a.push((y[l] = v));
                f(null, (c = []), a, h);
              }
              for (l = c.length; l--; )
                (v = c[l]) &&
                  -1 < (a = f ? nt(e, v) : w[l]) &&
                  (e[a] = !(o[a] = v));
            }
          } else (c = bt(c === o ? c.splice(b, c.length) : c)), f ? f(null, o, c, h) : k.apply(o, c);
        })
      );
    }
    function ei(n) {
      for (
        var o,
          u,
          r,
          s = n.length,
          h = t.relative[n[0].type],
          c = h || t.relative[" "],
          i = h ? 1 : 0,
          l = wt(
            function (n) {
              return n === o;
            },
            c,
            !0
          ),
          a = wt(
            function (n) {
              return -1 < nt(o, n);
            },
            c,
            !0
          ),
          f = [
            function (n, t, i) {
              var r =
                (!h && (i || t !== ht)) ||
                ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
              return (o = null), r;
            },
          ];
        i < s;
        i++
      )
        if ((u = t.relative[n[i].type])) f = [wt(ui(f), u)];
        else {
          if ((u = t.filter[n[i].type].apply(null, n[i].matches))[e]) {
            for (r = ++i; r < s; r++) if (t.relative[n[r].type]) break;
            return fi(
              1 < i && ui(f),
              1 < i &&
                pt(
                  n
                    .slice(0, i - 1)
                    .concat({ value: " " === n[i - 2].type ? "*" : "" })
                ).replace(at, "$1"),
              u,
              i < r && ei(n.slice(i, r)),
              r < s && ei((n = n.slice(r))),
              r < s && pt(n)
            );
          }
          f.push(u);
        }
      return ui(f);
    }
    var rt,
      f,
      t,
      st,
      oi,
      ft,
      kt,
      si,
      ht,
      w,
      ut,
      b,
      i,
      s,
      h,
      o,
      d,
      ct,
      et,
      e = "sizzle" + 1 * new Date(),
      c = n.document,
      v = 0,
      nr = 0,
      hi = yt(),
      ci = yt(),
      li = yt(),
      lt = yt(),
      dt = function (n, t) {
        return n === t && (ut = !0), 0;
      },
      tr = {}.hasOwnProperty,
      g = [],
      ir = g.pop,
      rr = g.push,
      k = g.push,
      ai = g.slice,
      nt = function (n, t) {
        for (var i = 0, r = n.length; i < r; i++) if (n[i] === t) return i;
        return -1;
      },
      gt =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      r = "[\\x20\\t\\r\\n\\f]",
      tt =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        r +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      vi =
        "\\[" +
        r +
        "*(" +
        tt +
        ")(?:" +
        r +
        "*([*^$|!~]?=)" +
        r +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        tt +
        "))|)" +
        r +
        "*\\]",
      ni =
        ":(" +
        tt +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        vi +
        ")*)|.*)\\)|)",
      ur = new RegExp(r + "+", "g"),
      at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
      fr = new RegExp("^" + r + "*," + r + "*"),
      yi = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
      er = new RegExp(r + "|>"),
      or = new RegExp(ni),
      sr = new RegExp("^" + tt + "$"),
      vt = {
        ID: new RegExp("^#(" + tt + ")"),
        CLASS: new RegExp("^\\.(" + tt + ")"),
        TAG: new RegExp("^(" + tt + "|[*])"),
        ATTR: new RegExp("^" + vi),
        PSEUDO: new RegExp("^" + ni),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            r +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            r +
            "*(?:([+-]|)" +
            r +
            "*(\\d+)|))" +
            r +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + gt + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            r +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            r +
            "*((?:-\\d)?\\d*)" +
            r +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      hr = /HTML$/i,
      cr = /^(?:input|select|textarea|button)$/i,
      lr = /^h\d$/i,
      ot = /^[^{]+\{\s*\[native \w/,
      ar = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ti = /[+~]/,
      y = new RegExp("\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\([^\\r\\n\\f])", "g"),
      p = function (n, t) {
        var i = "0x" + n.slice(1) - 65536;
        return (
          t ||
          (i < 0
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320))
        );
      },
      pi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      wi = function (n, t) {
        return t
          ? "\0" === n
            ? "ï¿½"
            : n.slice(0, -1) +
              "\\" +
              n.charCodeAt(n.length - 1).toString(16) +
              " "
          : "\\" + n;
      },
      bi = function () {
        b();
      },
      vr = wt(
        function (n) {
          return !0 === n.disabled && "fieldset" === n.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      k.apply((g = ai.call(c.childNodes)), c.childNodes);
      g[c.childNodes.length].nodeType;
    } catch (rt) {
      k = {
        apply: g.length
          ? function (n, t) {
              rr.apply(n, ai.call(t));
            }
          : function (n, t) {
              for (var i = n.length, r = 0; (n[i++] = t[r++]); );
              n.length = i - 1;
            },
      };
    }
    for (rt in ((f = u.support = {}),
    (oi = u.isXML =
      function (n) {
        var i = n.namespaceURI,
          t = (n.ownerDocument || n).documentElement;
        return !hr.test(i || (t && t.nodeName) || "HTML");
      }),
    (b = u.setDocument =
      function (n) {
        var v,
          u,
          l = n ? n.ownerDocument || n : c;
        return (
          l != i &&
            9 === l.nodeType &&
            l.documentElement &&
            ((s = (i = l).documentElement),
            (h = !oi(i)),
            c != i &&
              (u = i.defaultView) &&
              u.top !== u &&
              (u.addEventListener
                ? u.addEventListener("unload", bi, !1)
                : u.attachEvent && u.attachEvent("onunload", bi)),
            (f.scope = a(function (n) {
              return (
                s.appendChild(n).appendChild(i.createElement("div")),
                "undefined" != typeof n.querySelectorAll &&
                  !n.querySelectorAll(":scope fieldset div").length
              );
            })),
            (f.attributes = a(function (n) {
              return (n.className = "i"), !n.getAttribute("className");
            })),
            (f.getElementsByTagName = a(function (n) {
              return (
                n.appendChild(i.createComment("")),
                !n.getElementsByTagName("*").length
              );
            })),
            (f.getElementsByClassName = ot.test(i.getElementsByClassName)),
            (f.getById = a(function (n) {
              return (
                (s.appendChild(n).id = e),
                !i.getElementsByName || !i.getElementsByName(e).length
              );
            })),
            f.getById
              ? ((t.filter.ID = function (n) {
                  var t = n.replace(y, p);
                  return function (n) {
                    return n.getAttribute("id") === t;
                  };
                }),
                (t.find.ID = function (n, t) {
                  if ("undefined" != typeof t.getElementById && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : [];
                  }
                }))
              : ((t.filter.ID = function (n) {
                  var t = n.replace(y, p);
                  return function (n) {
                    var i =
                      "undefined" != typeof n.getAttributeNode &&
                      n.getAttributeNode("id");
                    return i && i.value === t;
                  };
                }),
                (t.find.ID = function (n, t) {
                  if ("undefined" != typeof t.getElementById && h) {
                    var r,
                      u,
                      f,
                      i = t.getElementById(n);
                    if (i) {
                      if ((r = i.getAttributeNode("id")) && r.value === n)
                        return [i];
                      for (f = t.getElementsByName(n), u = 0; (i = f[u++]); )
                        if ((r = i.getAttributeNode("id")) && r.value === n)
                          return [i];
                    }
                    return [];
                  }
                })),
            (t.find.TAG = f.getElementsByTagName
              ? function (n, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(n)
                    : f.qsa
                    ? t.querySelectorAll(n)
                    : void 0;
                }
              : function (n, t) {
                  var i,
                    r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                  if ("*" === n) {
                    while ((i = u[f++])) 1 === i.nodeType && r.push(i);
                    return r;
                  }
                  return u;
                }),
            (t.find.CLASS =
              f.getElementsByClassName &&
              function (n, t) {
                if ("undefined" != typeof t.getElementsByClassName && h)
                  return t.getElementsByClassName(n);
              }),
            (d = []),
            (o = []),
            (f.qsa = ot.test(i.querySelectorAll)) &&
              (a(function (n) {
                var t;
                s.appendChild(n).innerHTML =
                  "<a id='" +
                  e +
                  "'></a><select id='" +
                  e +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>";
                n.querySelectorAll("[msallowcapture^='']").length &&
                  o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length ||
                  o.push("\\[" + r + "*(?:value|" + gt + ")");
                n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                (t = i.createElement("input")).setAttribute("name", "");
                n.appendChild(t);
                n.querySelectorAll("[name='']").length ||
                  o.push("\\[" + r + "*name" + r + "*=" + r + "*(?:''|\"\")");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + e + "+*").length ||
                  o.push(".#.+[+~]");
                n.querySelectorAll("\\\f");
                o.push("[\\r\\n\\f]");
              }),
              a(function (n) {
                n.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length &&
                  o.push("name" + r + "*[*^$|!~]?=");
                2 !== n.querySelectorAll(":enabled").length &&
                  o.push(":enabled", ":disabled");
                s.appendChild(n).disabled = !0;
                2 !== n.querySelectorAll(":disabled").length &&
                  o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:");
              })),
            (f.matchesSelector = ot.test(
              (ct =
                s.matches ||
                s.webkitMatchesSelector ||
                s.mozMatchesSelector ||
                s.oMatchesSelector ||
                s.msMatchesSelector)
            )) &&
              a(function (n) {
                f.disconnectedMatch = ct.call(n, "*");
                ct.call(n, "[s!='']:x");
                d.push("!=", ni);
              }),
            (o = o.length && new RegExp(o.join("|"))),
            (d = d.length && new RegExp(d.join("|"))),
            (v = ot.test(s.compareDocumentPosition)),
            (et =
              v || ot.test(s.contains)
                ? function (n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                      i = t && t.parentNode;
                    return (
                      n === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(r.contains
                          ? r.contains(i)
                          : n.compareDocumentPosition &&
                            16 & n.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (n, t) {
                    if (t) while ((t = t.parentNode)) if (t === n) return !0;
                    return !1;
                  }),
            (dt = v
              ? function (n, t) {
                  if (n === t) return (ut = !0), 0;
                  var r =
                    !n.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    r ||
                    (1 &
                      (r =
                        (n.ownerDocument || n) == (t.ownerDocument || t)
                          ? n.compareDocumentPosition(t)
                          : 1) ||
                    (!f.sortDetached && t.compareDocumentPosition(n) === r)
                      ? n == i || (n.ownerDocument == c && et(c, n))
                        ? -1
                        : t == i || (t.ownerDocument == c && et(c, t))
                        ? 1
                        : w
                        ? nt(w, n) - nt(w, t)
                        : 0
                      : 4 & r
                      ? -1
                      : 1)
                  );
                }
              : function (n, t) {
                  if (n === t) return (ut = !0), 0;
                  var r,
                    u = 0,
                    o = n.parentNode,
                    s = t.parentNode,
                    f = [n],
                    e = [t];
                  if (!o || !s)
                    return n == i
                      ? -1
                      : t == i
                      ? 1
                      : o
                      ? -1
                      : s
                      ? 1
                      : w
                      ? nt(w, n) - nt(w, t)
                      : 0;
                  if (o === s) return ki(n, t);
                  for (r = n; (r = r.parentNode); ) f.unshift(r);
                  for (r = t; (r = r.parentNode); ) e.unshift(r);
                  while (f[u] === e[u]) u++;
                  return u
                    ? ki(f[u], e[u])
                    : f[u] == c
                    ? -1
                    : e[u] == c
                    ? 1
                    : 0;
                })),
          i
        );
      }),
    (u.matches = function (n, t) {
      return u(n, null, null, t);
    }),
    (u.matchesSelector = function (n, t) {
      if (
        (b(n),
        f.matchesSelector &&
          h &&
          !lt[t + " "] &&
          (!d || !d.test(t)) &&
          (!o || !o.test(t)))
      )
        try {
          var r = ct.call(n, t);
          if (
            r ||
            f.disconnectedMatch ||
            (n.document && 11 !== n.document.nodeType)
          )
            return r;
        } catch (n) {
          lt(t, !0);
        }
      return 0 < u(t, i, null, [n]).length;
    }),
    (u.contains = function (n, t) {
      return (n.ownerDocument || n) != i && b(n), et(n, t);
    }),
    (u.attr = function (n, r) {
      (n.ownerDocument || n) != i && b(n);
      var e = t.attrHandle[r.toLowerCase()],
        u = e && tr.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : void 0;
      return void 0 !== u
        ? u
        : f.attributes || !h
        ? n.getAttribute(r)
        : (u = n.getAttributeNode(r)) && u.specified
        ? u.value
        : null;
    }),
    (u.escape = function (n) {
      return (n + "").replace(pi, wi);
    }),
    (u.error = function (n) {
      throw new Error("Syntax error, unrecognized expression: " + n);
    }),
    (u.uniqueSort = function (n) {
      var r,
        u = [],
        t = 0,
        i = 0;
      if (
        ((ut = !f.detectDuplicates),
        (w = !f.sortStable && n.slice(0)),
        n.sort(dt),
        ut)
      ) {
        while ((r = n[i++])) r === n[i] && (t = u.push(i));
        while (t--) n.splice(u[t], 1);
      }
      return (w = null), n;
    }),
    (st = u.getText =
      function (n) {
        var r,
          i = "",
          u = 0,
          t = n.nodeType;
        if (t) {
          if (1 === t || 9 === t || 11 === t) {
            if ("string" == typeof n.textContent) return n.textContent;
            for (n = n.firstChild; n; n = n.nextSibling) i += st(n);
          } else if (3 === t || 4 === t) return n.nodeValue;
        } else while ((r = n[u++])) i += st(r);
        return i;
      }),
    ((t = u.selectors =
      {
        cacheLength: 50,
        createPseudo: l,
        match: vt,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (n) {
            return (
              (n[1] = n[1].replace(y, p)),
              (n[3] = (n[3] || n[4] || n[5] || "").replace(y, p)),
              "~=" === n[2] && (n[3] = " " + n[3] + " "),
              n.slice(0, 4)
            );
          },
          CHILD: function (n) {
            return (
              (n[1] = n[1].toLowerCase()),
              "nth" === n[1].slice(0, 3)
                ? (n[3] || u.error(n[0]),
                  (n[4] = +(n[4]
                    ? n[5] + (n[6] || 1)
                    : 2 * ("even" === n[3] || "odd" === n[3]))),
                  (n[5] = +(n[7] + n[8] || "odd" === n[3])))
                : n[3] && u.error(n[0]),
              n
            );
          },
          PSEUDO: function (n) {
            var i,
              t = !n[6] && n[2];
            return vt.CHILD.test(n[0])
              ? null
              : (n[3]
                  ? (n[2] = n[4] || n[5] || "")
                  : t &&
                    or.test(t) &&
                    (i = ft(t, !0)) &&
                    (i = t.indexOf(")", t.length - i) - t.length) &&
                    ((n[0] = n[0].slice(0, i)), (n[2] = t.slice(0, i))),
                n.slice(0, 3));
          },
        },
        filter: {
          TAG: function (n) {
            var t = n.replace(y, p).toLowerCase();
            return "*" === n
              ? function () {
                  return !0;
                }
              : function (n) {
                  return n.nodeName && n.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (n) {
            var t = hi[n + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) &&
                hi(n, function (n) {
                  return t.test(
                    ("string" == typeof n.className && n.className) ||
                      ("undefined" != typeof n.getAttribute &&
                        n.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, t, i) {
            return function (r) {
              var f = u.attr(r, n);
              return null == f
                ? "!=" === t
                : !t ||
                    ((f += ""),
                    "=" === t
                      ? f === i
                      : "!=" === t
                      ? f !== i
                      : "^=" === t
                      ? i && 0 === f.indexOf(i)
                      : "*=" === t
                      ? i && -1 < f.indexOf(i)
                      : "$=" === t
                      ? i && f.slice(-i.length) === i
                      : "~=" === t
                      ? -1 < (" " + f.replace(ur, " ") + " ").indexOf(i)
                      : "|=" === t &&
                        (f === i || f.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (n, t, i, r, u) {
            var s = "nth" !== n.slice(0, 3),
              o = "last" !== n.slice(-4),
              f = "of-type" === t;
            return 1 === r && 0 === u
              ? function (n) {
                  return !!n.parentNode;
                }
              : function (t, i, h) {
                  var p,
                    d,
                    y,
                    c,
                    a,
                    w,
                    b = s !== o ? "nextSibling" : "previousSibling",
                    k = t.parentNode,
                    nt = f && t.nodeName.toLowerCase(),
                    g = !h && !f,
                    l = !1;
                  if (k) {
                    if (s) {
                      while (b) {
                        for (c = t; (c = c[b]); )
                          if (
                            f
                              ? c.nodeName.toLowerCase() === nt
                              : 1 === c.nodeType
                          )
                            return !1;
                        w = b = "only" === n && !w && "nextSibling";
                      }
                      return !0;
                    }
                    if (((w = [o ? k.firstChild : k.lastChild]), o && g)) {
                      for (
                        l =
                          (a =
                            (p =
                              (d =
                                (y = (c = k)[e] || (c[e] = {}))[c.uniqueID] ||
                                (y[c.uniqueID] = {}))[n] || [])[0] === v &&
                            p[1]) && p[2],
                          c = a && k.childNodes[a];
                        (c = (++a && c && c[b]) || (l = a = 0) || w.pop());

                      )
                        if (1 === c.nodeType && ++l && c === t) {
                          d[n] = [v, a, l];
                          break;
                        }
                    } else if (
                      (g &&
                        (l = a =
                          (p =
                            (d =
                              (y = (c = t)[e] || (c[e] = {}))[c.uniqueID] ||
                              (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]),
                      !1 === l)
                    )
                      while ((c = (++a && c && c[b]) || (l = a = 0) || w.pop()))
                        if (
                          (f
                            ? c.nodeName.toLowerCase() === nt
                            : 1 === c.nodeType) &&
                          ++l &&
                          (g &&
                            ((d =
                              (y = c[e] || (c[e] = {}))[c.uniqueID] ||
                              (y[c.uniqueID] = {}))[n] = [v, l]),
                          c === t)
                        )
                          break;
                    return (l -= u) === r || (l % r == 0 && 0 <= l / r);
                  }
                };
          },
          PSEUDO: function (n, i) {
            var f,
              r =
                t.pseudos[n] ||
                t.setFilters[n.toLowerCase()] ||
                u.error("unsupported pseudo: " + n);
            return r[e]
              ? r(i)
              : 1 < r.length
              ? ((f = [n, n, "", i]),
                t.setFilters.hasOwnProperty(n.toLowerCase())
                  ? l(function (n, t) {
                      for (var e, u = r(n, i), f = u.length; f--; )
                        n[(e = nt(n, u[f]))] = !(t[e] = u[f]);
                    })
                  : function (n) {
                      return r(n, 0, f);
                    })
              : r;
          },
        },
        pseudos: {
          not: l(function (n) {
            var t = [],
              r = [],
              i = kt(n.replace(at, "$1"));
            return i[e]
              ? l(function (n, t, r, u) {
                  for (var e, o = i(n, null, u, []), f = n.length; f--; )
                    (e = o[f]) && (n[f] = !(t[f] = e));
                })
              : function (n, u, f) {
                  return (t[0] = n), i(t, null, f, r), (t[0] = null), !r.pop();
                };
          }),
          has: l(function (n) {
            return function (t) {
              return 0 < u(n, t).length;
            };
          }),
          contains: l(function (n) {
            return (
              (n = n.replace(y, p)),
              function (t) {
                return -1 < (t.textContent || st(t)).indexOf(n);
              }
            );
          }),
          lang: l(function (n) {
            return (
              sr.test(n || "") || u.error("unsupported lang: " + n),
              (n = n.replace(y, p).toLowerCase()),
              function (t) {
                var i;
                do
                  if (
                    (i = h
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-")
                    );
                while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var i = n.location && n.location.hash;
            return i && i.slice(1) === t.id;
          },
          root: function (n) {
            return n === s;
          },
          focus: function (n) {
            return (
              n === i.activeElement &&
              (!i.hasFocus || i.hasFocus()) &&
              !!(n.type || n.href || ~n.tabIndex)
            );
          },
          enabled: di(!1),
          disabled: di(!0),
          checked: function (n) {
            var t = n.nodeName.toLowerCase();
            return (
              ("input" === t && !!n.checked) || ("option" === t && !!n.selected)
            );
          },
          selected: function (n) {
            return (
              n.parentNode && n.parentNode.selectedIndex, !0 === n.selected
            );
          },
          empty: function (n) {
            for (n = n.firstChild; n; n = n.nextSibling)
              if (n.nodeType < 6) return !1;
            return !0;
          },
          parent: function (n) {
            return !t.pseudos.empty(n);
          },
          header: function (n) {
            return lr.test(n.nodeName);
          },
          input: function (n) {
            return cr.test(n.nodeName);
          },
          button: function (n) {
            var t = n.nodeName.toLowerCase();
            return ("input" === t && "button" === n.type) || "button" === t;
          },
          text: function (n) {
            var t;
            return (
              "input" === n.nodeName.toLowerCase() &&
              "text" === n.type &&
              (null == (t = n.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: it(function () {
            return [0];
          }),
          last: it(function (n, t) {
            return [t - 1];
          }),
          eq: it(function (n, t, i) {
            return [i < 0 ? i + t : i];
          }),
          even: it(function (n, t) {
            for (var i = 0; i < t; i += 2) n.push(i);
            return n;
          }),
          odd: it(function (n, t) {
            for (var i = 1; i < t; i += 2) n.push(i);
            return n;
          }),
          lt: it(function (n, t, i) {
            for (var r = i < 0 ? i + t : t < i ? t : i; 0 <= --r; ) n.push(r);
            return n;
          }),
          gt: it(function (n, t, i) {
            for (var r = i < 0 ? i + t : i; ++r < t; ) n.push(r);
            return n;
          }),
        },
      }).pseudos.nth = t.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      t.pseudos[rt] = yr(rt);
    for (rt in { submit: !0, reset: !0 }) t.pseudos[rt] = pr(rt);
    return (
      (gi.prototype = t.filters = t.pseudos),
      (t.setFilters = new gi()),
      (ft = u.tokenize =
        function (n, i) {
          var e,
            f,
            s,
            o,
            r,
            h,
            c,
            l = ci[n + " "];
          if (l) return i ? 0 : l.slice(0);
          for (r = n, h = [], c = t.preFilter; r; ) {
            for (o in ((e && !(f = fr.exec(r))) ||
              (f && (r = r.slice(f[0].length) || r), h.push((s = []))),
            (e = !1),
            (f = yi.exec(r)) &&
              ((e = f.shift()),
              s.push({ value: e, type: f[0].replace(at, " ") }),
              (r = r.slice(e.length))),
            t.filter))
              (f = vt[o].exec(r)) &&
                (!c[o] || (f = c[o](f))) &&
                ((e = f.shift()),
                s.push({ value: e, type: o, matches: f }),
                (r = r.slice(e.length)));
            if (!e) break;
          }
          return i ? r.length : r ? u.error(n) : ci(n, h).slice(0);
        }),
      (kt = u.compile =
        function (n, r) {
          var s,
            c,
            a,
            o,
            y,
            p,
            w = [],
            d = [],
            f = li[n + " "];
          if (!f) {
            for (r || (r = ft(n)), s = r.length; s--; )
              (f = ei(r[s]))[e] ? w.push(f) : d.push(f);
            (f = li(
              n,
              ((c = d),
              (o = 0 < (a = w).length),
              (y = 0 < c.length),
              (p = function (n, r, f, e, s) {
                var l,
                  nt,
                  d,
                  g = 0,
                  p = "0",
                  tt = n && [],
                  w = [],
                  it = ht,
                  rt = n || (y && t.find.TAG("*", s)),
                  ut = (v += null == it ? 1 : Math.random() || 0.1),
                  ft = rt.length;
                for (
                  s && (ht = r == i || r || s);
                  p !== ft && null != (l = rt[p]);
                  p++
                ) {
                  if (y && l) {
                    for (
                      nt = 0, r || l.ownerDocument == i || (b(l), (f = !h));
                      (d = c[nt++]);

                    )
                      if (d(l, r || i, f)) {
                        e.push(l);
                        break;
                      }
                    s && (v = ut);
                  }
                  o && ((l = !d && l) && g--, n && tt.push(l));
                }
                if (((g += p), o && p !== g)) {
                  for (nt = 0; (d = a[nt++]); ) d(tt, w, r, f);
                  if (n) {
                    if (0 < g) while (p--) tt[p] || w[p] || (w[p] = ir.call(e));
                    w = bt(w);
                  }
                  k.apply(e, w);
                  s &&
                    !n &&
                    0 < w.length &&
                    1 < g + a.length &&
                    u.uniqueSort(e);
                }
                return s && ((v = ut), (ht = it)), tt;
              }),
              o ? l(p) : p)
            )).selector = n;
          }
          return f;
        }),
      (si = u.select =
        function (n, i, r, u) {
          var o,
            f,
            e,
            l,
            a,
            c = "function" == typeof n && n,
            s = !u && ft((n = c.selector || n));
          if (((r = r || []), 1 === s.length)) {
            if (
              2 < (f = s[0] = s[0].slice(0)).length &&
              "ID" === (e = f[0]).type &&
              9 === i.nodeType &&
              h &&
              t.relative[f[1].type]
            ) {
              if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0]))
                return r;
              c && (i = i.parentNode);
              n = n.slice(f.shift().value.length);
            }
            for (o = vt.needsContext.test(n) ? 0 : f.length; o--; ) {
              if (((e = f[o]), t.relative[(l = e.type)])) break;
              if (
                (a = t.find[l]) &&
                (u = a(
                  e.matches[0].replace(y, p),
                  (ti.test(f[0].type) && ri(i.parentNode)) || i
                ))
              ) {
                if ((f.splice(o, 1), !(n = u.length && pt(f))))
                  return k.apply(r, u), r;
                break;
              }
            }
          }
          return (
            (c || kt(n, s))(
              u,
              i,
              !h,
              r,
              !i || (ti.test(n) && ri(i.parentNode)) || i
            ),
            r
          );
        }),
      (f.sortStable = e.split("").sort(dt).join("") === e),
      (f.detectDuplicates = !!ut),
      b(),
      (f.sortDetached = a(function (n) {
        return 1 & n.compareDocumentPosition(i.createElement("fieldset"));
      })),
      a(function (n) {
        return (
          (n.innerHTML = "<a href='#'></a>"),
          "#" === n.firstChild.getAttribute("href")
        );
      }) ||
        ii("type|href|height|width", function (n, t, i) {
          if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (f.attributes &&
        a(function (n) {
          return (
            (n.innerHTML = "<input/>"),
            n.firstChild.setAttribute("value", ""),
            "" === n.firstChild.getAttribute("value")
          );
        })) ||
        ii("value", function (n, t, i) {
          if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue;
        }),
      a(function (n) {
        return null == n.getAttribute("disabled");
      }) ||
        ii(gt, function (n, t, i) {
          var r;
          if (!i)
            return !0 === n[t]
              ? t.toLowerCase()
              : (r = n.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      u
    );
  })(n);
  i.find = d;
  i.expr = d.selectors;
  i.expr[":"] = i.expr.pseudos;
  i.uniqueSort = i.unique = d.uniqueSort;
  i.text = d.getText;
  i.isXMLDoc = d.isXML;
  i.contains = d.contains;
  i.escapeSelector = d.escape;
  var ft = function (n, t, r) {
      for (var u = [], f = void 0 !== r; (n = n[t]) && 9 !== n.nodeType; )
        if (1 === n.nodeType) {
          if (f && i(n).is(r)) break;
          u.push(n);
        }
      return u;
    },
    dr = function (n, t) {
      for (var i = []; n; n = n.nextSibling)
        1 === n.nodeType && n !== t && i.push(n);
      return i;
    },
    gr = i.expr.match.needsContext;
  wi = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  i.filter = function (n, t, r) {
    var u = t[0];
    return (
      r && (n = ":not(" + n + ")"),
      1 === t.length && 1 === u.nodeType
        ? i.find.matchesSelector(u, n)
          ? [u]
          : []
        : i.find.matches(
            n,
            i.grep(t, function (n) {
              return 1 === n.nodeType;
            })
          )
    );
  };
  i.fn.extend({
    find: function (n) {
      var t,
        r,
        u = this.length,
        f = this;
      if ("string" != typeof n)
        return this.pushStack(
          i(n).filter(function () {
            for (t = 0; t < u; t++) if (i.contains(f[t], this)) return !0;
          })
        );
      for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
      return 1 < u ? i.uniqueSort(r) : r;
    },
    filter: function (n) {
      return this.pushStack(bi(this, n || [], !1));
    },
    not: function (n) {
      return this.pushStack(bi(this, n || [], !0));
    },
    is: function (n) {
      return !!bi(this, "string" == typeof n && gr.test(n) ? i(n) : n || [], !1)
        .length;
    },
  });
  tu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (i.fn.init = function (n, t, r) {
    var e, o;
    if (!n) return this;
    if (((r = r || nu), "string" == typeof n)) {
      if (
        !(e =
          "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length
            ? [null, n, null]
            : tu.exec(n)) ||
        (!e[1] && t)
      )
        return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
      if (e[1]) {
        if (
          ((t = t instanceof i ? t[0] : t),
          i.merge(
            this,
            i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)
          ),
          wi.test(e[1]) && i.isPlainObject(t))
        )
          for (e in t) u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
        return this;
      }
      return (
        (o = f.getElementById(e[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return n.nodeType
      ? ((this[0] = n), (this.length = 1), this)
      : u(n)
      ? void 0 !== r.ready
        ? r.ready(n)
        : n(i)
      : i.makeArray(n, this);
  }).prototype = i.fn;
  nu = i(f);
  iu = /^(?:parents|prev(?:Until|All))/;
  ru = { children: !0, contents: !0, next: !0, prev: !0 };
  i.fn.extend({
    has: function (n) {
      var t = i(n, this),
        r = t.length;
      return this.filter(function () {
        for (var n = 0; n < r; n++) if (i.contains(this, t[n])) return !0;
      });
    },
    closest: function (n, t) {
      var r,
        f = 0,
        o = this.length,
        u = [],
        e = "string" != typeof n && i(n);
      if (!gr.test(n))
        for (; f < o; f++)
          for (r = this[f]; r && r !== t; r = r.parentNode)
            if (
              r.nodeType < 11 &&
              (e
                ? -1 < e.index(r)
                : 1 === r.nodeType && i.find.matchesSelector(r, n))
            ) {
              u.push(r);
              break;
            }
      return this.pushStack(1 < u.length ? i.uniqueSort(u) : u);
    },
    index: function (n) {
      return n
        ? "string" == typeof n
          ? ii.call(i(n), this[0])
          : ii.call(this, n.jquery ? n[0] : n)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (n, t) {
      return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))));
    },
    addBack: function (n) {
      return this.add(null == n ? this.prevObject : this.prevObject.filter(n));
    },
  });
  i.each(
    {
      parent: function (n) {
        var t = n.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function (n) {
        return ft(n, "parentNode");
      },
      parentsUntil: function (n, t, i) {
        return ft(n, "parentNode", i);
      },
      next: function (n) {
        return uu(n, "nextSibling");
      },
      prev: function (n) {
        return uu(n, "previousSibling");
      },
      nextAll: function (n) {
        return ft(n, "nextSibling");
      },
      prevAll: function (n) {
        return ft(n, "previousSibling");
      },
      nextUntil: function (n, t, i) {
        return ft(n, "nextSibling", i);
      },
      prevUntil: function (n, t, i) {
        return ft(n, "previousSibling", i);
      },
      siblings: function (n) {
        return dr((n.parentNode || {}).firstChild, n);
      },
      children: function (n) {
        return dr(n.firstChild);
      },
      contents: function (n) {
        return null != n.contentDocument && vr(n.contentDocument)
          ? n.contentDocument
          : (c(n, "template") && (n = n.content || n),
            i.merge([], n.childNodes));
      },
    },
    function (n, t) {
      i.fn[n] = function (r, u) {
        var f = i.map(this, t, r);
        return (
          "Until" !== n.slice(-5) && (u = r),
          u && "string" == typeof u && (f = i.filter(u, f)),
          1 < this.length &&
            (ru[n] || i.uniqueSort(f), iu.test(n) && f.reverse()),
          this.pushStack(f)
        );
      };
    }
  );
  l = /[^\x20\t\r\n\f]+/g;
  i.Callbacks = function (n) {
    var a, h;
    n =
      "string" == typeof n
        ? ((a = n),
          (h = {}),
          i.each(a.match(l) || [], function (n, t) {
            h[t] = !0;
          }),
          h)
        : i.extend({}, n);
    var o,
      r,
      v,
      f,
      t = [],
      s = [],
      e = -1,
      y = function () {
        for (f = f || n.once, v = o = !0; s.length; e = -1)
          for (r = s.shift(); ++e < t.length; )
            !1 === t[e].apply(r[0], r[1]) &&
              n.stopOnFalse &&
              ((e = t.length), (r = !1));
        n.memory || (r = !1);
        o = !1;
        f && (t = r ? [] : "");
      },
      c = {
        add: function () {
          return (
            t &&
              (r && !o && ((e = t.length - 1), s.push(r)),
              (function f(r) {
                i.each(r, function (i, r) {
                  u(r)
                    ? (n.unique && c.has(r)) || t.push(r)
                    : r && r.length && "string" !== ut(r) && f(r);
                });
              })(arguments),
              r && !o && y()),
            this
          );
        },
        remove: function () {
          return (
            i.each(arguments, function (n, r) {
              for (var u; -1 < (u = i.inArray(r, t, u)); )
                t.splice(u, 1), u <= e && e--;
            }),
            this
          );
        },
        has: function (n) {
          return n ? -1 < i.inArray(n, t) : 0 < t.length;
        },
        empty: function () {
          return t && (t = []), this;
        },
        disable: function () {
          return (f = s = []), (t = r = ""), this;
        },
        disabled: function () {
          return !t;
        },
        lock: function () {
          return (f = s = []), r || o || (t = r = ""), this;
        },
        locked: function () {
          return !!f;
        },
        fireWith: function (n, t) {
          return (
            f ||
              ((t = [n, (t = t || []).slice ? t.slice() : t]),
              s.push(t),
              o || y()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!v;
        },
      };
    return c;
  };
  i.extend({
    Deferred: function (t) {
      var f = [
          [
            "notify",
            "progress",
            i.Callbacks("memory"),
            i.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            i.Callbacks("once memory"),
            i.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            i.Callbacks("once memory"),
            i.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        o = "pending",
        e = {
          state: function () {
            return o;
          },
          always: function () {
            return r.done(arguments).fail(arguments), this;
          },
          catch: function (n) {
            return e.then(null, n);
          },
          pipe: function () {
            var n = arguments;
            return i
              .Deferred(function (t) {
                i.each(f, function (i, f) {
                  var e = u(n[f[4]]) && n[f[4]];
                  r[f[1]](function () {
                    var n = e && e.apply(this, arguments);
                    n && u(n.promise)
                      ? n
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[f[0] + "With"](this, e ? [n] : arguments);
                  });
                });
                n = null;
              })
              .promise();
          },
          then: function (t, r, e) {
            function s(t, r, f, e) {
              return function () {
                var h = this,
                  c = arguments,
                  l = function () {
                    var n, i;
                    if (!(t < o)) {
                      if ((n = f.apply(h, c)) === r.promise())
                        throw new TypeError("Thenable self-resolution");
                      i =
                        n &&
                        ("object" == typeof n || "function" == typeof n) &&
                        n.then;
                      u(i)
                        ? e
                          ? i.call(n, s(o, r, et, e), s(o, r, fi, e))
                          : (o++,
                            i.call(
                              n,
                              s(o, r, et, e),
                              s(o, r, fi, e),
                              s(o, r, et, r.notifyWith)
                            ))
                        : (f !== et && ((h = void 0), (c = [n])),
                          (e || r.resolveWith)(h, c));
                    }
                  },
                  a = e
                    ? l
                    : function () {
                        try {
                          l();
                        } catch (l) {
                          i.Deferred.exceptionHook &&
                            i.Deferred.exceptionHook(l, a.stackTrace);
                          o <= t + 1 &&
                            (f !== fi && ((h = void 0), (c = [l])),
                            r.rejectWith(h, c));
                        }
                      };
                t
                  ? a()
                  : (i.Deferred.getStackHook &&
                      (a.stackTrace = i.Deferred.getStackHook()),
                    n.setTimeout(a));
              };
            }
            var o = 0;
            return i
              .Deferred(function (n) {
                f[0][3].add(s(0, n, u(e) ? e : et, n.notifyWith));
                f[1][3].add(s(0, n, u(t) ? t : et));
                f[2][3].add(s(0, n, u(r) ? r : fi));
              })
              .promise();
          },
          promise: function (n) {
            return null != n ? i.extend(n, e) : e;
          },
        },
        r = {};
      return (
        i.each(f, function (n, t) {
          var i = t[2],
            u = t[5];
          e[t[1]] = i.add;
          u &&
            i.add(
              function () {
                o = u;
              },
              f[3 - n][2].disable,
              f[3 - n][3].disable,
              f[0][2].lock,
              f[0][3].lock
            );
          i.add(t[3].fire);
          r[t[0]] = function () {
            return (
              r[t[0] + "With"](this === r ? void 0 : this, arguments), this
            );
          };
          r[t[0] + "With"] = i.fireWith;
        }),
        e.promise(r),
        t && t.call(r, r),
        r
      );
    },
    when: function (n) {
      var e = arguments.length,
        t = e,
        o = Array(t),
        f = k.call(arguments),
        r = i.Deferred(),
        s = function (n) {
          return function (t) {
            o[n] = this;
            f[n] = 1 < arguments.length ? k.call(arguments) : t;
            --e || r.resolveWith(o, f);
          };
        };
      if (
        e <= 1 &&
        (fu(n, r.done(s(t)).resolve, r.reject, !e),
        "pending" === r.state() || u(f[t] && f[t].then))
      )
        return r.then();
      while (t--) fu(f[t], s(t), r.reject);
      return r.promise();
    },
  });
  eu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  i.Deferred.exceptionHook = function (t, i) {
    n.console &&
      n.console.warn &&
      t &&
      eu.test(t.name) &&
      n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i);
  };
  i.readyException = function (t) {
    n.setTimeout(function () {
      throw t;
    });
  };
  ei = i.Deferred();
  i.fn.ready = function (n) {
    return (
      ei.then(n)["catch"](function (n) {
        i.readyException(n);
      }),
      this
    );
  };
  i.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (n) {
      (!0 === n ? --i.readyWait : i.isReady) ||
        ((i.isReady = !0) !== n && 0 < --i.readyWait) ||
        ei.resolveWith(f, [i]);
    },
  });
  i.ready.then = ei.then;
  "complete" === f.readyState ||
  ("loading" !== f.readyState && !f.documentElement.doScroll)
    ? n.setTimeout(i.ready)
    : (f.addEventListener("DOMContentLoaded", oi),
      n.addEventListener("load", oi));
  var w = function (n, t, r, f, e, o, s) {
      var h = 0,
        l = n.length,
        c = null == r;
      if ("object" === ut(r))
        for (h in ((e = !0), r)) w(n, t, h, r[h], !0, o, s);
      else if (
        void 0 !== f &&
        ((e = !0),
        u(f) || (s = !0),
        c &&
          (s
            ? (t.call(n, f), (t = null))
            : ((c = t),
              (t = function (n, t, r) {
                return c.call(i(n), r);
              }))),
        t)
      )
        for (; h < l; h++) t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
      return e ? n : c ? t.call(n) : l ? t(n[0], r) : o;
    },
    se = /^-ms-/,
    he = /-([a-z])/g;
  ot = function (n) {
    return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType;
  };
  bt.uid = 1;
  bt.prototype = {
    cache: function (n) {
      var t = n[this.expando];
      return (
        t ||
          ((t = {}),
          ot(n) &&
            (n.nodeType
              ? (n[this.expando] = t)
              : Object.defineProperty(n, this.expando, {
                  value: t,
                  configurable: !0,
                }))),
        t
      );
    },
    set: function (n, t, i) {
      var r,
        u = this.cache(n);
      if ("string" == typeof t) u[y(t)] = i;
      else for (r in t) u[y(r)] = t[r];
      return u;
    },
    get: function (n, t) {
      return void 0 === t
        ? this.cache(n)
        : n[this.expando] && n[this.expando][y(t)];
    },
    access: function (n, t, i) {
      return void 0 === t || (t && "string" == typeof t && void 0 === i)
        ? this.get(n, t)
        : (this.set(n, t, i), void 0 !== i ? i : t);
    },
    remove: function (n, t) {
      var u,
        r = n[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t)
          for (
            u = (t = Array.isArray(t)
              ? t.map(y)
              : ((t = y(t)) in r)
              ? [t]
              : t.match(l) || []).length;
            u--;

          )
            delete r[t[u]];
        (void 0 === t || i.isEmptyObject(r)) &&
          (n.nodeType ? (n[this.expando] = void 0) : delete n[this.expando]);
      }
    },
    hasData: function (n) {
      var t = n[this.expando];
      return void 0 !== t && !i.isEmptyObject(t);
    },
  };
  var r = new bt(),
    o = new bt(),
    le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ae = /[A-Z]/g;
  i.extend({
    hasData: function (n) {
      return o.hasData(n) || r.hasData(n);
    },
    data: function (n, t, i) {
      return o.access(n, t, i);
    },
    removeData: function (n, t) {
      o.remove(n, t);
    },
    _data: function (n, t, i) {
      return r.access(n, t, i);
    },
    _removeData: function (n, t) {
      r.remove(n, t);
    },
  });
  i.fn.extend({
    data: function (n, t) {
      var f,
        u,
        e,
        i = this[0],
        s = i && i.attributes;
      if (void 0 === n) {
        if (
          this.length &&
          ((e = o.get(i)), 1 === i.nodeType && !r.get(i, "hasDataAttrs"))
        ) {
          for (f = s.length; f--; )
            s[f] &&
              0 === (u = s[f].name).indexOf("data-") &&
              ((u = y(u.slice(5))), ou(i, u, e[u]));
          r.set(i, "hasDataAttrs", !0);
        }
        return e;
      }
      return "object" == typeof n
        ? this.each(function () {
            o.set(this, n);
          })
        : w(
            this,
            function (t) {
              var r;
              if (i && void 0 === t)
                return void 0 !== (r = o.get(i, n))
                  ? r
                  : void 0 !== (r = ou(i, n))
                  ? r
                  : void 0;
              this.each(function () {
                o.set(this, n, t);
              });
            },
            null,
            t,
            1 < arguments.length,
            null,
            !0
          );
    },
    removeData: function (n) {
      return this.each(function () {
        o.remove(this, n);
      });
    },
  });
  i.extend({
    queue: function (n, t, u) {
      var f;
      if (n)
        return (
          (t = (t || "fx") + "queue"),
          (f = r.get(n, t)),
          u &&
            (!f || Array.isArray(u)
              ? (f = r.access(n, t, i.makeArray(u)))
              : f.push(u)),
          f || []
        );
    },
    dequeue: function (n, t) {
      t = t || "fx";
      var r = i.queue(n, t),
        e = r.length,
        u = r.shift(),
        f = i._queueHooks(n, t);
      "inprogress" === u && ((u = r.shift()), e--);
      u &&
        ("fx" === t && r.unshift("inprogress"),
        delete f.stop,
        u.call(
          n,
          function () {
            i.dequeue(n, t);
          },
          f
        ));
      !e && f && f.empty.fire();
    },
    _queueHooks: function (n, t) {
      var u = t + "queueHooks";
      return (
        r.get(n, u) ||
        r.access(n, u, {
          empty: i.Callbacks("once memory").add(function () {
            r.remove(n, [t + "queue", u]);
          }),
        })
      );
    },
  });
  i.fn.extend({
    queue: function (n, t) {
      var r = 2;
      return (
        "string" != typeof n && ((t = n), (n = "fx"), r--),
        arguments.length < r
          ? i.queue(this[0], n)
          : void 0 === t
          ? this
          : this.each(function () {
              var r = i.queue(this, n, t);
              i._queueHooks(this, n);
              "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n);
            })
      );
    },
    dequeue: function (n) {
      return this.each(function () {
        i.dequeue(this, n);
      });
    },
    clearQueue: function (n) {
      return this.queue(n || "fx", []);
    },
    promise: function (n, t) {
      var u,
        e = 1,
        o = i.Deferred(),
        f = this,
        s = this.length,
        h = function () {
          --e || o.resolveWith(f, [f]);
        };
      for (
        "string" != typeof n && ((t = n), (n = void 0)), n = n || "fx";
        s--;

      )
        (u = r.get(f[s], n + "queueHooks")) && u.empty && (e++, u.empty.add(h));
      return h(), o.promise(t);
    },
  });
  var su = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    kt = new RegExp("^(?:([+-])=|)(" + su + ")([a-z%]*)$", "i"),
    b = ["Top", "Right", "Bottom", "Left"],
    g = f.documentElement,
    st = function (n) {
      return i.contains(n.ownerDocument, n);
    },
    ve = { composed: !0 };
  g.getRootNode &&
    (st = function (n) {
      return (
        i.contains(n.ownerDocument, n) || n.getRootNode(ve) === n.ownerDocument
      );
    });
  dt = function (n, t) {
    return (
      "none" === (n = t || n).style.display ||
      ("" === n.style.display && st(n) && "none" === i.css(n, "display"))
    );
  };
  ki = {};
  i.fn.extend({
    show: function () {
      return ht(this, !0);
    },
    hide: function () {
      return ht(this);
    },
    toggle: function (n) {
      return "boolean" == typeof n
        ? n
          ? this.show()
          : this.hide()
        : this.each(function () {
            dt(this) ? i(this).show() : i(this).hide();
          });
    },
  });
  var nt,
    si,
    gt = /^(?:checkbox|radio)$/i,
    cu = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    lu = /^$|^module$|\/(?:java|ecma)script/i;
  nt = f.createDocumentFragment().appendChild(f.createElement("div"));
  (si = f.createElement("input")).setAttribute("type", "radio");
  si.setAttribute("checked", "checked");
  si.setAttribute("name", "t");
  nt.appendChild(si);
  e.checkClone = nt.cloneNode(!0).cloneNode(!0).lastChild.checked;
  nt.innerHTML = "<textarea>x</textarea>";
  e.noCloneChecked = !!nt.cloneNode(!0).lastChild.defaultValue;
  nt.innerHTML = "<option></option>";
  e.option = !!nt.lastChild;
  h = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
  h.th = h.td;
  e.option ||
    (h.optgroup = h.option = [1, "<select multiple='multiple'>", "</select>"]);
  au = /<|&#?\w+;/;
  var ye = /^key/,
    pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    yu = /^([^.]*)(?:\.(.+)|)/;
  i.event = {
    global: {},
    add: function (n, t, u, f, e) {
      var p,
        a,
        k,
        v,
        w,
        h,
        s,
        c,
        o,
        b,
        d,
        y = r.get(n);
      if (ot(n))
        for (
          u.handler && ((u = (p = u).handler), (e = p.selector)),
            e && i.find.matchesSelector(g, e),
            u.guid || (u.guid = i.guid++),
            (v = y.events) || (v = y.events = Object.create(null)),
            (a = y.handle) ||
              (a = y.handle =
                function (t) {
                  if ("undefined" != typeof i && i.event.triggered !== t.type)
                    return i.event.dispatch.apply(n, arguments);
                }),
            w = (t = (t || "").match(l) || [""]).length;
          w--;

        )
          (o = d = (k = yu.exec(t[w]) || [])[1]),
            (b = (k[2] || "").split(".").sort()),
            o &&
              ((s = i.event.special[o] || {}),
              (o = (e ? s.delegateType : s.bindType) || o),
              (s = i.event.special[o] || {}),
              (h = i.extend(
                {
                  type: o,
                  origType: d,
                  data: f,
                  handler: u,
                  guid: u.guid,
                  selector: e,
                  needsContext: e && i.expr.match.needsContext.test(e),
                  namespace: b.join("."),
                },
                p
              )),
              (c = v[o]) ||
                (((c = v[o] = []).delegateCount = 0),
                (s.setup && !1 !== s.setup.call(n, f, b, a)) ||
                  (n.addEventListener && n.addEventListener(o, a))),
              s.add &&
                (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)),
              e ? c.splice(c.delegateCount++, 0, h) : c.push(h),
              (i.event.global[o] = !0));
    },
    remove: function (n, t, u, f, e) {
      var y,
        k,
        c,
        v,
        p,
        s,
        h,
        a,
        o,
        b,
        d,
        w = r.hasData(n) && r.get(n);
      if (w && (v = w.events)) {
        for (p = (t = (t || "").match(l) || [""]).length; p--; )
          if (
            ((o = d = (c = yu.exec(t[p]) || [])[1]),
            (b = (c[2] || "").split(".").sort()),
            o)
          ) {
            for (
              h = i.event.special[o] || {},
                a = v[(o = (f ? h.delegateType : h.bindType) || o)] || [],
                c =
                  c[2] &&
                  new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                k = y = a.length;
              y--;

            )
              (s = a[y]),
                (!e && d !== s.origType) ||
                  (u && u.guid !== s.guid) ||
                  (c && !c.test(s.namespace)) ||
                  (f && f !== s.selector && ("**" !== f || !s.selector)) ||
                  (a.splice(y, 1),
                  s.selector && a.delegateCount--,
                  h.remove && h.remove.call(n, s));
            k &&
              !a.length &&
              ((h.teardown && !1 !== h.teardown.call(n, b, w.handle)) ||
                i.removeEvent(n, o, w.handle),
              delete v[o]);
          } else for (o in v) i.event.remove(n, o + t[p], u, f, !0);
        i.isEmptyObject(v) && r.remove(n, "handle events");
      }
    },
    dispatch: function (n) {
      var u,
        h,
        c,
        e,
        f,
        l,
        s = new Array(arguments.length),
        t = i.event.fix(n),
        a = (r.get(this, "events") || Object.create(null))[t.type] || [],
        o = i.event.special[t.type] || {};
      for (s[0] = t, u = 1; u < arguments.length; u++) s[u] = arguments[u];
      if (
        ((t.delegateTarget = this),
        !o.preDispatch || !1 !== o.preDispatch.call(this, t))
      ) {
        for (
          l = i.event.handlers.call(this, t, a), u = 0;
          (e = l[u++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = e.elem, h = 0;
            (f = e.handlers[h++]) && !t.isImmediatePropagationStopped();

          )
            (t.rnamespace &&
              !1 !== f.namespace &&
              !t.rnamespace.test(f.namespace)) ||
              ((t.handleObj = f),
              (t.data = f.data),
              void 0 !==
                (c = (
                  (i.event.special[f.origType] || {}).handle || f.handler
                ).apply(e.elem, s)) &&
                !1 === (t.result = c) &&
                (t.preventDefault(), t.stopPropagation()));
        return o.postDispatch && o.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (n, t) {
      var f,
        h,
        u,
        e,
        o,
        c = [],
        s = t.delegateCount,
        r = n.target;
      if (s && r.nodeType && !("click" === n.type && 1 <= n.button))
        for (; r !== this; r = r.parentNode || this)
          if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
            for (e = [], o = {}, f = 0; f < s; f++)
              void 0 === o[(u = (h = t[f]).selector + " ")] &&
                (o[u] = h.needsContext
                  ? -1 < i(u, this).index(r)
                  : i.find(u, this, null, [r]).length),
                o[u] && e.push(h);
            e.length && c.push({ elem: r, handlers: e });
          }
      return (
        (r = this), s < t.length && c.push({ elem: r, handlers: t.slice(s) }), c
      );
    },
    addProp: function (n, t) {
      Object.defineProperty(i.Event.prototype, n, {
        enumerable: !0,
        configurable: !0,
        get: u(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[n];
            },
        set: function (t) {
          Object.defineProperty(this, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (n) {
      return n[i.expando] ? n : new i.Event(n);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (n) {
          var t = this || n;
          return (
            gt.test(t.type) && t.click && c(t, "input") && hi(t, "click", ct),
            !1
          );
        },
        trigger: function (n) {
          var t = this || n;
          return (
            gt.test(t.type) && t.click && c(t, "input") && hi(t, "click"), !0
          );
        },
        _default: function (n) {
          var t = n.target;
          return (
            (gt.test(t.type) &&
              t.click &&
              c(t, "input") &&
              r.get(t, "click")) ||
            c(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (n) {
          void 0 !== n.result &&
            n.originalEvent &&
            (n.originalEvent.returnValue = n.result);
        },
      },
    },
  };
  i.removeEvent = function (n, t, i) {
    n.removeEventListener && n.removeEventListener(t, i);
  };
  i.Event = function (n, t) {
    if (!(this instanceof i.Event)) return new i.Event(n, t);
    n && n.type
      ? ((this.originalEvent = n),
        (this.type = n.type),
        (this.isDefaultPrevented =
          n.defaultPrevented ||
          (void 0 === n.defaultPrevented && !1 === n.returnValue)
            ? ct
            : lt),
        (this.target =
          n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target),
        (this.currentTarget = n.currentTarget),
        (this.relatedTarget = n.relatedTarget))
      : (this.type = n);
    t && i.extend(this, t);
    this.timeStamp = (n && n.timeStamp) || Date.now();
    this[i.expando] = !0;
  };
  i.Event.prototype = {
    constructor: i.Event,
    isDefaultPrevented: lt,
    isPropagationStopped: lt,
    isImmediatePropagationStopped: lt,
    isSimulated: !1,
    preventDefault: function () {
      var n = this.originalEvent;
      this.isDefaultPrevented = ct;
      n && !this.isSimulated && n.preventDefault();
    },
    stopPropagation: function () {
      var n = this.originalEvent;
      this.isPropagationStopped = ct;
      n && !this.isSimulated && n.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var n = this.originalEvent;
      this.isImmediatePropagationStopped = ct;
      n && !this.isSimulated && n.stopImmediatePropagation();
      this.stopPropagation();
    },
  };
  i.each(
    {
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function (n) {
        var t = n.button;
        return null == n.which && ye.test(n.type)
          ? null != n.charCode
            ? n.charCode
            : n.keyCode
          : !n.which && void 0 !== t && pe.test(n.type)
          ? 1 & t
            ? 1
            : 2 & t
            ? 3
            : 4 & t
            ? 2
            : 0
          : n.which;
      },
    },
    i.event.addProp
  );
  i.each({ focus: "focusin", blur: "focusout" }, function (n, t) {
    i.event.special[n] = {
      setup: function () {
        return hi(this, n, we), !1;
      },
      trigger: function () {
        return hi(this, n), !0;
      },
      delegateType: t,
    };
  });
  i.each(
    {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout",
    },
    function (n, t) {
      i.event.special[n] = {
        delegateType: t,
        bindType: t,
        handle: function (n) {
          var u,
            r = n.relatedTarget,
            f = n.handleObj;
          return (
            (r && (r === this || i.contains(this, r))) ||
              ((n.type = f.origType),
              (u = f.handler.apply(this, arguments)),
              (n.type = t)),
            u
          );
        },
      };
    }
  );
  i.fn.extend({
    on: function (n, t, i, r) {
      return gi(this, n, t, i, r);
    },
    one: function (n, t, i, r) {
      return gi(this, n, t, i, r, 1);
    },
    off: function (n, t, r) {
      var u, f;
      if (n && n.preventDefault && n.handleObj)
        return (
          (u = n.handleObj),
          i(n.delegateTarget).off(
            u.namespace ? u.origType + "." + u.namespace : u.origType,
            u.selector,
            u.handler
          ),
          this
        );
      if ("object" == typeof n) {
        for (f in n) this.off(f, t, n[f]);
        return this;
      }
      return (
        (!1 !== t && "function" != typeof t) || ((r = t), (t = void 0)),
        !1 === r && (r = lt),
        this.each(function () {
          i.event.remove(this, n, r, t);
        })
      );
    },
  });
  var be = /<script|<style|<link/i,
    ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
    de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  i.extend({
    htmlPrefilter: function (n) {
      return n;
    },
    clone: function (n, t, r) {
      var u,
        c,
        o,
        f,
        l,
        a,
        v,
        h = n.cloneNode(!0),
        y = st(n);
      if (
        !(
          e.noCloneChecked ||
          (1 !== n.nodeType && 11 !== n.nodeType) ||
          i.isXMLDoc(n)
        )
      )
        for (f = s(h), u = 0, c = (o = s(n)).length; u < c; u++)
          (l = o[u]),
            (a = f[u]),
            void 0,
            "input" === (v = a.nodeName.toLowerCase()) && gt.test(l.type)
              ? (a.checked = l.checked)
              : ("input" !== v && "textarea" !== v) ||
                (a.defaultValue = l.defaultValue);
      if (t)
        if (r)
          for (o = o || s(n), f = f || s(h), u = 0, c = o.length; u < c; u++)
            wu(o[u], f[u]);
        else wu(n, h);
      return 0 < (f = s(h, "script")).length && di(f, !y && s(n, "script")), h;
    },
    cleanData: function (n) {
      for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
        if (ot(t)) {
          if ((u = t[r.expando])) {
            if (u.events)
              for (f in u.events)
                s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
            t[r.expando] = void 0;
          }
          t[o.expando] && (t[o.expando] = void 0);
        }
    },
  });
  i.fn.extend({
    detach: function (n) {
      return bu(this, n, !0);
    },
    remove: function (n) {
      return bu(this, n);
    },
    text: function (n) {
      return w(
        this,
        function (n) {
          return void 0 === n
            ? i.text(this)
            : this.empty().each(function () {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  (this.textContent = n);
              });
        },
        null,
        n,
        arguments.length
      );
    },
    append: function () {
      return at(this, arguments, function (n) {
        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
          pu(this, n).appendChild(n);
      });
    },
    prepend: function () {
      return at(this, arguments, function (n) {
        if (
          1 === this.nodeType ||
          11 === this.nodeType ||
          9 === this.nodeType
        ) {
          var t = pu(this, n);
          t.insertBefore(n, t.firstChild);
        }
      });
    },
    before: function () {
      return at(this, arguments, function (n) {
        this.parentNode && this.parentNode.insertBefore(n, this);
      });
    },
    after: function () {
      return at(this, arguments, function (n) {
        this.parentNode && this.parentNode.insertBefore(n, this.nextSibling);
      });
    },
    empty: function () {
      for (var n, t = 0; null != (n = this[t]); t++)
        1 === n.nodeType && (i.cleanData(s(n, !1)), (n.textContent = ""));
      return this;
    },
    clone: function (n, t) {
      return (
        (n = null != n && n),
        (t = null == t ? n : t),
        this.map(function () {
          return i.clone(this, n, t);
        })
      );
    },
    html: function (n) {
      return w(
        this,
        function (n) {
          var t = this[0] || {},
            r = 0,
            u = this.length;
          if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
          if (
            "string" == typeof n &&
            !be.test(n) &&
            !h[(cu.exec(n) || ["", ""])[1].toLowerCase()]
          ) {
            n = i.htmlPrefilter(n);
            try {
              for (; r < u; r++)
                1 === (t = this[r] || {}).nodeType &&
                  (i.cleanData(s(t, !1)), (t.innerHTML = n));
              t = 0;
            } catch (n) {}
          }
          t && this.empty().append(n);
        },
        null,
        n,
        arguments.length
      );
    },
    replaceWith: function () {
      var n = [];
      return at(
        this,
        arguments,
        function (t) {
          var r = this.parentNode;
          i.inArray(this, n) < 0 &&
            (i.cleanData(s(this)), r && r.replaceChild(t, this));
        },
        n
      );
    },
  });
  i.each(
    {
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith",
    },
    function (n, t) {
      i.fn[n] = function (n) {
        for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++)
          (u = r === o ? this : this.clone(!0)),
            i(e[r])[t](u),
            yi.apply(f, u.get());
        return this.pushStack(f);
      };
    }
  );
  var nr = new RegExp("^(" + su + ")(?!px)[a-z%]+$", "i"),
    ci = function (t) {
      var i = t.ownerDocument.defaultView;
      return (i && i.opener) || (i = n), i.getComputedStyle(t);
    },
    ku = function (n, t, i) {
      var u,
        r,
        f = {};
      for (r in t) (f[r] = n.style[r]), (n.style[r] = t[r]);
      for (r in ((u = i.call(n)), t)) n.style[r] = f[r];
      return u;
    },
    to = new RegExp(b.join("|"), "i");
  !(function () {
    function r() {
      if (t) {
        s.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
        t.style.cssText =
          "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
        g.appendChild(s).appendChild(t);
        var i = n.getComputedStyle(t);
        h = "1%" !== i.top;
        v = 12 === u(i.marginLeft);
        t.style.right = "60%";
        a = 36 === u(i.right);
        c = 36 === u(i.width);
        t.style.position = "absolute";
        l = 12 === u(t.offsetWidth / 3);
        g.removeChild(s);
        t = null;
      }
    }
    function u(n) {
      return Math.round(parseFloat(n));
    }
    var h,
      c,
      l,
      a,
      o,
      v,
      s = f.createElement("div"),
      t = f.createElement("div");
    t.style &&
      ((t.style.backgroundClip = "content-box"),
      (t.cloneNode(!0).style.backgroundClip = ""),
      (e.clearCloneStyle = "content-box" === t.style.backgroundClip),
      i.extend(e, {
        boxSizingReliable: function () {
          return r(), c;
        },
        pixelBoxStyles: function () {
          return r(), a;
        },
        pixelPosition: function () {
          return r(), h;
        },
        reliableMarginLeft: function () {
          return r(), v;
        },
        scrollboxSize: function () {
          return r(), l;
        },
        reliableTrDimensions: function () {
          var t, i, r, u;
          return (
            null == o &&
              ((t = f.createElement("table")),
              (i = f.createElement("tr")),
              (r = f.createElement("div")),
              (t.style.cssText = "position:absolute;left:-11111px"),
              (i.style.height = "1px"),
              (r.style.height = "9px"),
              g.appendChild(t).appendChild(i).appendChild(r),
              (u = n.getComputedStyle(i)),
              (o = 3 < parseInt(u.height)),
              g.removeChild(t)),
            o
          );
        },
      }));
  })();
  var gu = ["Webkit", "Moz", "ms"],
    nf = f.createElement("div").style,
    tf = {};
  var io = /^(none|table(?!-c[ea]).+)/,
    rf = /^--/,
    ro = { position: "absolute", visibility: "hidden", display: "block" },
    uf = { letterSpacing: "0", fontWeight: "400" };
  i.extend({
    cssHooks: {
      opacity: {
        get: function (n, t) {
          if (t) {
            var i = ni(n, "opacity");
            return "" === i ? "1" : i;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (n, t, r, u) {
      if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
        var f,
          h,
          o,
          c = y(t),
          l = rf.test(t),
          s = n.style;
        if (
          (l || (t = tr(c)), (o = i.cssHooks[t] || i.cssHooks[c]), void 0 === r)
        )
          return o && "get" in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
        "string" == (h = typeof r) &&
          (f = kt.exec(r)) &&
          f[1] &&
          ((r = hu(n, t, f)), (h = "number"));
        null != r &&
          r == r &&
          ("number" !== h ||
            l ||
            (r += (f && f[3]) || (i.cssNumber[c] ? "" : "px")),
          e.clearCloneStyle ||
            "" !== r ||
            0 !== t.indexOf("background") ||
            (s[t] = "inherit"),
          (o && "set" in o && void 0 === (r = o.set(n, r, u))) ||
            (l ? s.setProperty(t, r) : (s[t] = r)));
      }
    },
    css: function (n, t, r, u) {
      var f,
        e,
        o,
        s = y(t);
      return (
        rf.test(t) || (t = tr(s)),
        (o = i.cssHooks[t] || i.cssHooks[s]) &&
          "get" in o &&
          (f = o.get(n, !0, r)),
        void 0 === f && (f = ni(n, t, u)),
        "normal" === f && t in uf && (f = uf[t]),
        "" === r || r
          ? ((e = parseFloat(f)), !0 === r || isFinite(e) ? e || 0 : f)
          : f
      );
    },
  });
  i.each(["height", "width"], function (n, t) {
    i.cssHooks[t] = {
      get: function (n, r, u) {
        if (r)
          return !io.test(i.css(n, "display")) ||
            (n.getClientRects().length && n.getBoundingClientRect().width)
            ? ef(n, t, u)
            : ku(n, ro, function () {
                return ef(n, t, u);
              });
      },
      set: function (n, r, u) {
        var s,
          f = ci(n),
          h = !e.scrollboxSize() && "absolute" === f.position,
          c = (h || u) && "border-box" === i.css(n, "boxSizing", !1, f),
          o = u ? ir(n, t, u, c, f) : 0;
        return (
          c &&
            h &&
            (o -= Math.ceil(
              n["offset" + t[0].toUpperCase() + t.slice(1)] -
                parseFloat(f[t]) -
                ir(n, t, "border", !1, f) -
                0.5
            )),
          o &&
            (s = kt.exec(r)) &&
            "px" !== (s[3] || "px") &&
            ((n.style[t] = r), (r = i.css(n, t))),
          ff(0, r, o)
        );
      },
    };
  });
  i.cssHooks.marginLeft = du(e.reliableMarginLeft, function (n, t) {
    if (t)
      return (
        (parseFloat(ni(n, "marginLeft")) ||
          n.getBoundingClientRect().left -
            ku(n, { marginLeft: 0 }, function () {
              return n.getBoundingClientRect().left;
            })) + "px"
      );
  });
  i.each({ margin: "", padding: "", border: "Width" }, function (n, t) {
    i.cssHooks[n + t] = {
      expand: function (i) {
        for (
          var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i];
          r < 4;
          r++
        )
          f[n + b[r] + t] = u[r] || u[r - 2] || u[0];
        return f;
      },
    };
    "margin" !== n && (i.cssHooks[n + t].set = ff);
  });
  i.fn.extend({
    css: function (n, t) {
      return w(
        this,
        function (n, t, r) {
          var f,
            e,
            o = {},
            u = 0;
          if (Array.isArray(t)) {
            for (f = ci(n), e = t.length; u < e; u++)
              o[t[u]] = i.css(n, t[u], !1, f);
            return o;
          }
          return void 0 !== r ? i.style(n, t, r) : i.css(n, t);
        },
        n,
        t,
        1 < arguments.length
      );
    },
  });
  ((i.Tween = a).prototype = {
    constructor: a,
    init: function (n, t, r, u, f, e) {
      this.elem = n;
      this.prop = r;
      this.easing = f || i.easing._default;
      this.options = t;
      this.start = this.now = this.cur();
      this.end = u;
      this.unit = e || (i.cssNumber[r] ? "" : "px");
    },
    cur: function () {
      var n = a.propHooks[this.prop];
      return n && n.get ? n.get(this) : a.propHooks._default.get(this);
    },
    run: function (n) {
      var t,
        r = a.propHooks[this.prop];
      return (
        (this.pos = this.options.duration
          ? (t = i.easing[this.easing](
              n,
              this.options.duration * n,
              0,
              1,
              this.options.duration
            ))
          : (t = n)),
        (this.now = (this.end - this.start) * t + this.start),
        this.options.step && this.options.step.call(this.elem, this.now, this),
        r && r.set ? r.set(this) : a.propHooks._default.set(this),
        this
      );
    },
  }).init.prototype = a.prototype;
  (a.propHooks = {
    _default: {
      get: function (n) {
        var t;
        return 1 !== n.elem.nodeType ||
          (null != n.elem[n.prop] && null == n.elem.style[n.prop])
          ? n.elem[n.prop]
          : (t = i.css(n.elem, n.prop, "")) && "auto" !== t
          ? t
          : 0;
      },
      set: function (n) {
        i.fx.step[n.prop]
          ? i.fx.step[n.prop](n)
          : 1 !== n.elem.nodeType ||
            (!i.cssHooks[n.prop] && null == n.elem.style[tr(n.prop)])
          ? (n.elem[n.prop] = n.now)
          : i.style(n.elem, n.prop, n.now + n.unit);
      },
    },
  }).scrollTop = a.propHooks.scrollLeft = {
    set: function (n) {
      n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
    },
  };
  i.easing = {
    linear: function (n) {
      return n;
    },
    swing: function (n) {
      return 0.5 - Math.cos(n * Math.PI) / 2;
    },
    _default: "swing",
  };
  i.fx = a.prototype.init;
  i.fx.step = {};
  sf = /^(?:toggle|show|hide)$/;
  hf = /queueHooks$/;
  i.Animation = i.extend(v, {
    tweeners: {
      "*": [
        function (n, t) {
          var i = this.createTween(n, t);
          return hu(i.elem, n, kt.exec(t), i), i;
        },
      ],
    },
    tweener: function (n, t) {
      u(n) ? ((t = n), (n = ["*"])) : (n = n.match(l));
      for (var i, r = 0, f = n.length; r < f; r++)
        (i = n[r]),
          (v.tweeners[i] = v.tweeners[i] || []),
          v.tweeners[i].unshift(t);
    },
    prefilters: [
      function (n, t, u) {
        var f,
          y,
          w,
          c,
          b,
          h,
          o,
          l,
          k = "width" in t || "height" in t,
          v = this,
          p = {},
          s = n.style,
          a = n.nodeType && dt(n),
          e = r.get(n, "fxshow");
        for (f in (u.queue ||
          (null == (c = i._queueHooks(n, "fx")).unqueued &&
            ((c.unqueued = 0),
            (b = c.empty.fire),
            (c.empty.fire = function () {
              c.unqueued || b();
            })),
          c.unqueued++,
          v.always(function () {
            v.always(function () {
              c.unqueued--;
              i.queue(n, "fx").length || c.empty.fire();
            });
          })),
        t))
          if (((y = t[f]), sf.test(y))) {
            if (
              (delete t[f],
              (w = w || "toggle" === y),
              y === (a ? "hide" : "show"))
            ) {
              if ("show" !== y || !e || void 0 === e[f]) continue;
              a = !0;
            }
            p[f] = (e && e[f]) || i.style(n, f);
          }
        if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p))
          for (f in (k &&
            1 === n.nodeType &&
            ((u.overflow = [s.overflow, s.overflowX, s.overflowY]),
            null == (o = e && e.display) && (o = r.get(n, "display")),
            "none" === (l = i.css(n, "display")) &&
              (o
                ? (l = o)
                : (ht([n], !0),
                  (o = n.style.display || o),
                  (l = i.css(n, "display")),
                  ht([n]))),
            ("inline" === l || ("inline-block" === l && null != o)) &&
              "none" === i.css(n, "float") &&
              (h ||
                (v.done(function () {
                  s.display = o;
                }),
                null == o && ((l = s.display), (o = "none" === l ? "" : l))),
              (s.display = "inline-block"))),
          u.overflow &&
            ((s.overflow = "hidden"),
            v.always(function () {
              s.overflow = u.overflow[0];
              s.overflowX = u.overflow[1];
              s.overflowY = u.overflow[2];
            })),
          (h = !1),
          p))
            h ||
              (e
                ? "hidden" in e && (a = e.hidden)
                : (e = r.access(n, "fxshow", { display: o })),
              w && (e.hidden = !a),
              a && ht([n], !0),
              v.done(function () {
                for (f in (a || ht([n]), r.remove(n, "fxshow"), p))
                  i.style(n, f, p[f]);
              })),
              (h = lf(a ? e[f] : 0, f, v)),
              f in e ||
                ((e[f] = h.start), a && ((h.end = h.start), (h.start = 0)));
      },
    ],
    prefilter: function (n, t) {
      t ? v.prefilters.unshift(n) : v.prefilters.push(n);
    },
  });
  i.speed = function (n, t, r) {
    var f =
      n && "object" == typeof n
        ? i.extend({}, n)
        : {
            complete: r || (!r && t) || (u(n) && n),
            duration: n,
            easing: (r && t) || (t && !u(t) && t),
          };
    return (
      i.fx.off
        ? (f.duration = 0)
        : "number" != typeof f.duration &&
          (f.duration =
            f.duration in i.fx.speeds
              ? i.fx.speeds[f.duration]
              : i.fx.speeds._default),
      (null != f.queue && !0 !== f.queue) || (f.queue = "fx"),
      (f.old = f.complete),
      (f.complete = function () {
        u(f.old) && f.old.call(this);
        f.queue && i.dequeue(this, f.queue);
      }),
      f
    );
  };
  i.fn.extend({
    fadeTo: function (n, t, i, r) {
      return this.filter(dt)
        .css("opacity", 0)
        .show()
        .end()
        .animate({ opacity: t }, n, i, r);
    },
    animate: function (n, t, u, f) {
      var s = i.isEmptyObject(n),
        o = i.speed(t, u, f),
        e = function () {
          var t = v(this, i.extend({}, n), o);
          (s || r.get(this, "finish")) && t.stop(!0);
        };
      return (
        (e.finish = e),
        s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
      );
    },
    stop: function (n, t, u) {
      var f = function (n) {
        var t = n.stop;
        delete n.stop;
        t(u);
      };
      return (
        "string" != typeof n && ((u = t), (t = n), (n = void 0)),
        t && this.queue(n || "fx", []),
        this.each(function () {
          var s = !0,
            t = null != n && n + "queueHooks",
            o = i.timers,
            e = r.get(this);
          if (t) e[t] && e[t].stop && f(e[t]);
          else for (t in e) e[t] && e[t].stop && hf.test(t) && f(e[t]);
          for (t = o.length; t--; )
            o[t].elem !== this ||
              (null != n && o[t].queue !== n) ||
              (o[t].anim.stop(u), (s = !1), o.splice(t, 1));
          (!s && u) || i.dequeue(this, n);
        })
      );
    },
    finish: function (n) {
      return (
        !1 !== n && (n = n || "fx"),
        this.each(function () {
          var t,
            e = r.get(this),
            u = e[n + "queue"],
            o = e[n + "queueHooks"],
            f = i.timers,
            s = u ? u.length : 0;
          for (
            e.finish = !0,
              i.queue(this, n, []),
              o && o.stop && o.stop.call(this, !0),
              t = f.length;
            t--;

          )
            f[t].elem === this &&
              f[t].queue === n &&
              (f[t].anim.stop(!0), f.splice(t, 1));
          for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
          delete e.finish;
        })
      );
    },
  });
  i.each(["toggle", "show", "hide"], function (n, t) {
    var r = i.fn[t];
    i.fn[t] = function (n, i, u) {
      return null == n || "boolean" == typeof n
        ? r.apply(this, arguments)
        : this.animate(ai(t, !0), n, i, u);
    };
  });
  i.each(
    {
      slideDown: ai("show"),
      slideUp: ai("hide"),
      slideToggle: ai("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" },
    },
    function (n, t) {
      i.fn[n] = function (n, i, r) {
        return this.animate(t, n, i, r);
      };
    }
  );
  i.timers = [];
  i.fx.tick = function () {
    var r,
      n = 0,
      t = i.timers;
    for (vt = Date.now(); n < t.length; n++)
      (r = t[n])() || t[n] !== r || t.splice(n--, 1);
    t.length || i.fx.stop();
    vt = void 0;
  };
  i.fx.timer = function (n) {
    i.timers.push(n);
    i.fx.start();
  };
  i.fx.interval = 13;
  i.fx.start = function () {
    li || ((li = !0), rr());
  };
  i.fx.stop = function () {
    li = null;
  };
  i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
  i.fn.delay = function (t, r) {
    return (
      (t = (i.fx && i.fx.speeds[t]) || t),
      (r = r || "fx"),
      this.queue(r, function (i, r) {
        var u = n.setTimeout(i, t);
        r.stop = function () {
          n.clearTimeout(u);
        };
      })
    );
  };
  yt = f.createElement("input");
  of = f.createElement("select").appendChild(f.createElement("option"));
  yt.type = "checkbox";
  e.checkOn = "" !== yt.value;
  e.optSelected = of.selected;
  (yt = f.createElement("input")).value = "t";
  yt.type = "radio";
  e.radioValue = "t" === yt.value;
  pt = i.expr.attrHandle;
  i.fn.extend({
    attr: function (n, t) {
      return w(this, i.attr, n, t, 1 < arguments.length);
    },
    removeAttr: function (n) {
      return this.each(function () {
        i.removeAttr(this, n);
      });
    },
  });
  i.extend({
    attr: function (n, t, r) {
      var f,
        u,
        e = n.nodeType;
      if (3 !== e && 8 !== e && 2 !== e)
        return "undefined" == typeof n.getAttribute
          ? i.prop(n, t, r)
          : ((1 === e && i.isXMLDoc(n)) ||
              (u =
                i.attrHooks[t.toLowerCase()] ||
                (i.expr.match.bool.test(t) ? af : void 0)),
            void 0 !== r
              ? null === r
                ? void i.removeAttr(n, t)
                : u && "set" in u && void 0 !== (f = u.set(n, r, t))
                ? f
                : (n.setAttribute(t, r + ""), r)
              : u && "get" in u && null !== (f = u.get(n, t))
              ? f
              : null == (f = i.find.attr(n, t))
              ? void 0
              : f);
    },
    attrHooks: {
      type: {
        set: function (n, t) {
          if (!e.radioValue && "radio" === t && c(n, "input")) {
            var i = n.value;
            return n.setAttribute("type", t), i && (n.value = i), t;
          }
        },
      },
    },
    removeAttr: function (n, t) {
      var i,
        u = 0,
        r = t && t.match(l);
      if (r && 1 === n.nodeType) while ((i = r[u++])) n.removeAttribute(i);
    },
  });
  af = {
    set: function (n, t, r) {
      return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r), r;
    },
  };
  i.each(i.expr.match.bool.source.match(/\w+/g), function (n, t) {
    var r = pt[t] || i.find.attr;
    pt[t] = function (n, t, i) {
      var f,
        e,
        u = t.toLowerCase();
      return (
        i ||
          ((e = pt[u]),
          (pt[u] = f),
          (f = null != r(n, t, i) ? u : null),
          (pt[u] = e)),
        f
      );
    };
  });
  vf = /^(?:input|select|textarea|button)$/i;
  yf = /^(?:a|area)$/i;
  i.fn.extend({
    prop: function (n, t) {
      return w(this, i.prop, n, t, 1 < arguments.length);
    },
    removeProp: function (n) {
      return this.each(function () {
        delete this[i.propFix[n] || n];
      });
    },
  });
  i.extend({
    prop: function (n, t, r) {
      var f,
        u,
        e = n.nodeType;
      if (3 !== e && 8 !== e && 2 !== e)
        return (
          (1 === e && i.isXMLDoc(n)) ||
            ((t = i.propFix[t] || t), (u = i.propHooks[t])),
          void 0 !== r
            ? u && "set" in u && void 0 !== (f = u.set(n, r, t))
              ? f
              : (n[t] = r)
            : u && "get" in u && null !== (f = u.get(n, t))
            ? f
            : n[t]
        );
    },
    propHooks: {
      tabIndex: {
        get: function (n) {
          var t = i.find.attr(n, "tabindex");
          return t
            ? parseInt(t, 10)
            : vf.test(n.nodeName) || (yf.test(n.nodeName) && n.href)
            ? 0
            : -1;
        },
      },
    },
    propFix: { for: "htmlFor", class: "className" },
  });
  e.optSelected ||
    (i.propHooks.selected = {
      get: function (n) {
        var t = n.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function (n) {
        var t = n.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      },
    });
  i.each(
    [
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable",
    ],
    function () {
      i.propFix[this.toLowerCase()] = this;
    }
  );
  i.fn.extend({
    addClass: function (n) {
      var o,
        t,
        r,
        f,
        e,
        s,
        h,
        c = 0;
      if (u(n))
        return this.each(function (t) {
          i(this).addClass(n.call(this, t, it(this)));
        });
      if ((o = ur(n)).length)
        while ((t = this[c++]))
          if (((f = it(t)), (r = 1 === t.nodeType && " " + tt(f) + " "))) {
            for (s = 0; (e = o[s++]); )
              r.indexOf(" " + e + " ") < 0 && (r += e + " ");
            f !== (h = tt(r)) && t.setAttribute("class", h);
          }
      return this;
    },
    removeClass: function (n) {
      var o,
        r,
        t,
        f,
        e,
        s,
        h,
        c = 0;
      if (u(n))
        return this.each(function (t) {
          i(this).removeClass(n.call(this, t, it(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ((o = ur(n)).length)
        while ((r = this[c++]))
          if (((f = it(r)), (t = 1 === r.nodeType && " " + tt(f) + " "))) {
            for (s = 0; (e = o[s++]); )
              while (-1 < t.indexOf(" " + e + " "))
                t = t.replace(" " + e + " ", " ");
            f !== (h = tt(t)) && r.setAttribute("class", h);
          }
      return this;
    },
    toggleClass: function (n, t) {
      var f = typeof n,
        e = "string" === f || Array.isArray(n);
      return "boolean" == typeof t && e
        ? t
          ? this.addClass(n)
          : this.removeClass(n)
        : u(n)
        ? this.each(function (r) {
            i(this).toggleClass(n.call(this, r, it(this), t), t);
          })
        : this.each(function () {
            var t, o, u, s;
            if (e)
              for (o = 0, u = i(this), s = ur(n); (t = s[o++]); )
                u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
            else
              (void 0 !== n && "boolean" !== f) ||
                ((t = it(this)) && r.set(this, "__className__", t),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    t || !1 === n ? "" : r.get(this, "__className__") || ""
                  ));
          });
    },
    hasClass: function (n) {
      for (var t, r = 0, i = " " + n + " "; (t = this[r++]); )
        if (1 === t.nodeType && -1 < (" " + tt(it(t)) + " ").indexOf(i))
          return !0;
      return !1;
    },
  });
  pf = /\r/g;
  i.fn.extend({
    val: function (n) {
      var t,
        r,
        e,
        f = this[0];
      return arguments.length
        ? ((e = u(n)),
          this.each(function (r) {
            var u;
            1 === this.nodeType &&
              (null == (u = e ? n.call(this, r, i(this).val()) : n)
                ? (u = "")
                : "number" == typeof u
                ? (u += "")
                : Array.isArray(u) &&
                  (u = i.map(u, function (n) {
                    return null == n ? "" : n + "";
                  })),
              ((t =
                i.valHooks[this.type] ||
                i.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, u, "value")) ||
                (this.value = u));
          }))
        : f
        ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (r = t.get(f, "value"))
          ? r
          : "string" == typeof (r = f.value)
          ? r.replace(pf, "")
          : null == r
          ? ""
          : r
        : void 0;
    },
  });
  i.extend({
    valHooks: {
      option: {
        get: function (n) {
          var t = i.find.attr(n, "value");
          return null != t ? t : tt(i.text(n));
        },
      },
      select: {
        get: function (n) {
          for (
            var e,
              t,
              o = n.options,
              u = n.selectedIndex,
              f = "select-one" === n.type,
              s = f ? null : [],
              h = f ? u + 1 : o.length,
              r = u < 0 ? h : f ? u : 0;
            r < h;
            r++
          )
            if (
              ((t = o[r]).selected || r === u) &&
              !t.disabled &&
              (!t.parentNode.disabled || !c(t.parentNode, "optgroup"))
            ) {
              if (((e = i(t).val()), f)) return e;
              s.push(e);
            }
          return s;
        },
        set: function (n, t) {
          for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--; )
            ((u = f[o]).selected =
              -1 < i.inArray(i.valHooks.option.get(u), e)) && (r = !0);
          return r || (n.selectedIndex = -1), e;
        },
      },
    },
  });
  i.each(["radio", "checkbox"], function () {
    i.valHooks[this] = {
      set: function (n, t) {
        if (Array.isArray(t))
          return (n.checked = -1 < i.inArray(i(n).val(), t));
      },
    };
    e.checkOn ||
      (i.valHooks[this].get = function (n) {
        return null === n.getAttribute("value") ? "on" : n.value;
      });
  });
  e.focusin = "onfocusin" in n;
  fr = /^(?:focusinfocus|focusoutblur)$/;
  er = function (n) {
    n.stopPropagation();
  };
  i.extend(i.event, {
    trigger: function (t, e, o, s) {
      var k,
        c,
        l,
        d,
        v,
        y,
        a,
        p,
        w = [o || f],
        h = ui.call(t, "type") ? t.type : t,
        b = ui.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((c = p = l = o = o || f),
        3 !== o.nodeType &&
          8 !== o.nodeType &&
          !fr.test(h + i.event.triggered) &&
          (-1 < h.indexOf(".") && ((h = (b = h.split(".")).shift()), b.sort()),
          (v = h.indexOf(":") < 0 && "on" + h),
          ((t = t[i.expando]
            ? t
            : new i.Event(h, "object" == typeof t && t)).isTrigger = s ? 2 : 3),
          (t.namespace = b.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = o),
          (e = null == e ? [t] : i.makeArray(e, [t])),
          (a = i.event.special[h] || {}),
          s || !a.trigger || !1 !== a.trigger.apply(o, e)))
      ) {
        if (!s && !a.noBubble && !rt(o)) {
          for (
            d = a.delegateType || h, fr.test(d + h) || (c = c.parentNode);
            c;
            c = c.parentNode
          )
            w.push(c), (l = c);
          l === (o.ownerDocument || f) &&
            w.push(l.defaultView || l.parentWindow || n);
        }
        for (k = 0; (c = w[k++]) && !t.isPropagationStopped(); )
          (p = c),
            (t.type = 1 < k ? d : a.bindType || h),
            (y =
              (r.get(c, "events") || Object.create(null))[t.type] &&
              r.get(c, "handle")) && y.apply(c, e),
            (y = v && c[v]) &&
              y.apply &&
              ot(c) &&
              ((t.result = y.apply(c, e)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = h),
          s ||
            t.isDefaultPrevented() ||
            (a._default && !1 !== a._default.apply(w.pop(), e)) ||
            !ot(o) ||
            (v &&
              u(o[h]) &&
              !rt(o) &&
              ((l = o[v]) && (o[v] = null),
              (i.event.triggered = h),
              t.isPropagationStopped() && p.addEventListener(h, er),
              o[h](),
              t.isPropagationStopped() && p.removeEventListener(h, er),
              (i.event.triggered = void 0),
              l && (o[v] = l))),
          t.result
        );
      }
    },
    simulate: function (n, t, r) {
      var u = i.extend(new i.Event(), r, { type: n, isSimulated: !0 });
      i.event.trigger(u, null, t);
    },
  });
  i.fn.extend({
    trigger: function (n, t) {
      return this.each(function () {
        i.event.trigger(n, t, this);
      });
    },
    triggerHandler: function (n, t) {
      var r = this[0];
      if (r) return i.event.trigger(n, t, r, !0);
    },
  });
  e.focusin ||
    i.each({ focus: "focusin", blur: "focusout" }, function (n, t) {
      var u = function (n) {
        i.event.simulate(t, n.target, i.event.fix(n));
      };
      i.event.special[t] = {
        setup: function () {
          var i = this.ownerDocument || this.document || this,
            f = r.access(i, t);
          f || i.addEventListener(n, u, !0);
          r.access(i, t, (f || 0) + 1);
        },
        teardown: function () {
          var i = this.ownerDocument || this.document || this,
            f = r.access(i, t) - 1;
          f
            ? r.access(i, t, f)
            : (i.removeEventListener(n, u, !0), r.remove(i, t));
        },
      };
    });
  var ti = n.location,
    wf = { guid: Date.now() },
    or = /\?/;
  i.parseXML = function (t) {
    var r;
    if (!t || "string" != typeof t) return null;
    try {
      r = new n.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {
      r = void 0;
    }
    return (
      (r && !r.getElementsByTagName("parsererror").length) ||
        i.error("Invalid XML: " + t),
      r
    );
  };
  var uo = /\[\]$/,
    bf = /\r?\n/g,
    fo = /^(?:submit|button|image|reset|file)$/i,
    eo = /^(?:input|select|textarea|keygen)/i;
  i.param = function (n, t) {
    var r,
      f = [],
      e = function (n, t) {
        var i = u(t) ? t() : t;
        f[f.length] =
          encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i);
      };
    if (null == n) return "";
    if (Array.isArray(n) || (n.jquery && !i.isPlainObject(n)))
      i.each(n, function () {
        e(this.name, this.value);
      });
    else for (r in n) sr(r, n[r], t, e);
    return f.join("&");
  };
  i.fn.extend({
    serialize: function () {
      return i.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var n = i.prop(this, "elements");
        return n ? i.makeArray(n) : this;
      })
        .filter(function () {
          var n = this.type;
          return (
            this.name &&
            !i(this).is(":disabled") &&
            eo.test(this.nodeName) &&
            !fo.test(n) &&
            (this.checked || !gt.test(n))
          );
        })
        .map(function (n, t) {
          var r = i(this).val();
          return null == r
            ? null
            : Array.isArray(r)
            ? i.map(r, function (n) {
                return { name: t.name, value: n.replace(bf, "\r\n") };
              })
            : { name: t.name, value: r.replace(bf, "\r\n") };
        })
        .get();
    },
  });
  var oo = /%20/g,
    so = /#.*$/,
    ho = /([?&])_=[^&]*/,
    co = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    lo = /^(?:GET|HEAD)$/,
    ao = /^\/\//,
    kf = {},
    hr = {},
    df = "*/".concat("*"),
    cr = f.createElement("a");
  return (
    (cr.href = ti.href),
    i.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ti.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            ti.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": df,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": i.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (n, t) {
        return t ? lr(lr(n, i.ajaxSettings), t) : lr(i.ajaxSettings, n);
      },
      ajaxPrefilter: gf(kf),
      ajaxTransport: gf(hr),
      ajax: function (t, r) {
        function b(t, r, f, c) {
          var v,
            rt,
            b,
            p,
            g,
            l = r;
          s ||
            ((s = !0),
            d && n.clearTimeout(d),
            (a = void 0),
            (k = c || ""),
            (e.readyState = 0 < t ? 4 : 0),
            (v = (200 <= t && t < 300) || 304 === t),
            f &&
              (p = (function (n, t, i) {
                for (
                  var e, u, f, o, s = n.contents, r = n.dataTypes;
                  "*" === r[0];

                )
                  r.shift(),
                    void 0 === e &&
                      (e = n.mimeType || t.getResponseHeader("Content-Type"));
                if (e)
                  for (u in s)
                    if (s[u] && s[u].test(e)) {
                      r.unshift(u);
                      break;
                    }
                if (r[0] in i) f = r[0];
                else {
                  for (u in i) {
                    if (!r[0] || n.converters[u + " " + r[0]]) {
                      f = u;
                      break;
                    }
                    o || (o = u);
                  }
                  f = f || o;
                }
                if (f) return f !== r[0] && r.unshift(f), i[f];
              })(u, e, f)),
            !v &&
              -1 < i.inArray("script", u.dataTypes) &&
              (u.converters["text script"] = function () {}),
            (p = (function (n, t, i, r) {
              var h,
                u,
                f,
                s,
                e,
                o = {},
                c = n.dataTypes.slice();
              if (c[1])
                for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
              for (u = c.shift(); u; )
                if (
                  (n.responseFields[u] && (i[n.responseFields[u]] = t),
                  !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
                  (e = u),
                  (u = c.shift()))
                )
                  if ("*" === u) u = e;
                  else if ("*" !== e && e !== u) {
                    if (!(f = o[e + " " + u] || o["* " + u]))
                      for (h in o)
                        if (
                          (s = h.split(" "))[1] === u &&
                          (f = o[e + " " + s[0]] || o["* " + s[0]])
                        ) {
                          !0 === f
                            ? (f = o[h])
                            : !0 !== o[h] && ((u = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== f)
                      if (f && n.throws) t = f(t);
                      else
                        try {
                          t = f(t);
                        } catch (n) {
                          return {
                            state: "parsererror",
                            error: f
                              ? n
                              : "No conversion from " + e + " to " + u,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(u, p, e, v)),
            v
              ? (u.ifModified &&
                  ((g = e.getResponseHeader("Last-Modified")) &&
                    (i.lastModified[o] = g),
                  (g = e.getResponseHeader("etag")) && (i.etag[o] = g)),
                204 === t || "HEAD" === u.type
                  ? (l = "nocontent")
                  : 304 === t
                  ? (l = "notmodified")
                  : ((l = p.state), (rt = p.data), (v = !(b = p.error))))
              : ((b = l), (!t && l) || ((l = "error"), t < 0 && (t = 0))),
            (e.status = t),
            (e.statusText = (r || l) + ""),
            v ? tt.resolveWith(h, [rt, l, e]) : tt.rejectWith(h, [e, l, b]),
            e.statusCode(w),
            (w = void 0),
            y &&
              nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]),
            it.fireWith(h, [e, l]),
            y &&
              (nt.trigger("ajaxComplete", [e, u]),
              --i.active || i.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((r = t), (t = void 0));
        r = r || {};
        var a,
          o,
          k,
          v,
          d,
          c,
          s,
          y,
          g,
          p,
          u = i.ajaxSetup({}, r),
          h = u.context || u,
          nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
          tt = i.Deferred(),
          it = i.Callbacks("once memory"),
          w = u.statusCode || {},
          rt = {},
          ut = {},
          ft = "canceled",
          e = {
            readyState: 0,
            getResponseHeader: function (n) {
              var t;
              if (s) {
                if (!v)
                  for (v = {}; (t = co.exec(k)); )
                    v[t[1].toLowerCase() + " "] = (
                      v[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = v[n.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return s ? k : null;
            },
            setRequestHeader: function (n, t) {
              return (
                null == s &&
                  ((n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n),
                  (rt[n] = t)),
                this
              );
            },
            overrideMimeType: function (n) {
              return null == s && (u.mimeType = n), this;
            },
            statusCode: function (n) {
              var t;
              if (n)
                if (s) e.always(n[e.status]);
                else for (t in n) w[t] = [w[t], n[t]];
              return this;
            },
            abort: function (n) {
              var t = n || ft;
              return a && a.abort(t), b(0, t), this;
            },
          };
        if (
          (tt.promise(e),
          (u.url = ((t || u.url || ti.href) + "").replace(
            ao,
            ti.protocol + "//"
          )),
          (u.type = r.method || r.type || u.method || u.type),
          (u.dataTypes = (u.dataType || "*").toLowerCase().match(l) || [""]),
          null == u.crossDomain)
        ) {
          c = f.createElement("a");
          try {
            c.href = u.url;
            c.href = c.href;
            u.crossDomain =
              cr.protocol + "//" + cr.host != c.protocol + "//" + c.host;
          } catch (t) {
            u.crossDomain = !0;
          }
        }
        if (
          (u.data &&
            u.processData &&
            "string" != typeof u.data &&
            (u.data = i.param(u.data, u.traditional)),
          ne(kf, u, r, e),
          s)
        )
          return e;
        for (g in ((y = i.event && u.global) &&
          0 == i.active++ &&
          i.event.trigger("ajaxStart"),
        (u.type = u.type.toUpperCase()),
        (u.hasContent = !lo.test(u.type)),
        (o = u.url.replace(so, "")),
        u.hasContent
          ? u.data &&
            u.processData &&
            0 ===
              (u.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (u.data = u.data.replace(oo, "+"))
          : ((p = u.url.slice(o.length)),
            u.data &&
              (u.processData || "string" == typeof u.data) &&
              ((o += (or.test(o) ? "&" : "?") + u.data), delete u.data),
            !1 === u.cache &&
              ((o = o.replace(ho, "$1")),
              (p = (or.test(o) ? "&" : "?") + "_=" + wf.guid++ + p)),
            (u.url = o + p)),
        u.ifModified &&
          (i.lastModified[o] &&
            e.setRequestHeader("If-Modified-Since", i.lastModified[o]),
          i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o])),
        ((u.data && u.hasContent && !1 !== u.contentType) || r.contentType) &&
          e.setRequestHeader("Content-Type", u.contentType),
        e.setRequestHeader(
          "Accept",
          u.dataTypes[0] && u.accepts[u.dataTypes[0]]
            ? u.accepts[u.dataTypes[0]] +
                ("*" !== u.dataTypes[0] ? ", " + df + "; q=0.01" : "")
            : u.accepts["*"]
        ),
        u.headers))
          e.setRequestHeader(g, u.headers[g]);
        if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s))
          return e.abort();
        if (
          ((ft = "abort"),
          it.add(u.complete),
          e.done(u.success),
          e.fail(u.error),
          (a = ne(hr, u, r, e)))
        ) {
          if (((e.readyState = 1), y && nt.trigger("ajaxSend", [e, u]), s))
            return e;
          u.async &&
            0 < u.timeout &&
            (d = n.setTimeout(function () {
              e.abort("timeout");
            }, u.timeout));
          try {
            s = !1;
            a.send(rt, b);
          } catch (t) {
            if (s) throw t;
            b(-1, t);
          }
        } else b(-1, "No Transport");
        return e;
      },
      getJSON: function (n, t, r) {
        return i.get(n, t, r, "json");
      },
      getScript: function (n, t) {
        return i.get(n, void 0, t, "script");
      },
    }),
    i.each(["get", "post"], function (n, t) {
      i[t] = function (n, r, f, e) {
        return (
          u(r) && ((e = e || f), (f = r), (r = void 0)),
          i.ajax(
            i.extend(
              { url: n, type: t, dataType: e, data: r, success: f },
              i.isPlainObject(n) && n
            )
          )
        );
      };
    }),
    i.ajaxPrefilter(function (n) {
      for (var t in n.headers)
        "content-type" === t.toLowerCase() &&
          (n.contentType = n.headers[t] || "");
    }),
    (i._evalUrl = function (n, t, r) {
      return i.ajax({
        url: n,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (n) {
          i.globalEval(n, t, r);
        },
      });
    }),
    i.fn.extend({
      wrapAll: function (n) {
        var t;
        return (
          this[0] &&
            (u(n) && (n = n.call(this[0])),
            (t = i(n, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var n = this; n.firstElementChild; )
                  n = n.firstElementChild;
                return n;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return u(n)
          ? this.each(function (t) {
              i(this).wrapInner(n.call(this, t));
            })
          : this.each(function () {
              var t = i(this),
                r = t.contents();
              r.length ? r.wrapAll(n) : t.append(n);
            });
      },
      wrap: function (n) {
        var t = u(n);
        return this.each(function (r) {
          i(this).wrapAll(t ? n.call(this, r) : n);
        });
      },
      unwrap: function (n) {
        return (
          this.parent(n)
            .not("body")
            .each(function () {
              i(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (i.expr.pseudos.hidden = function (n) {
      return !i.expr.pseudos.visible(n);
    }),
    (i.expr.pseudos.visible = function (n) {
      return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length);
    }),
    (i.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (t) {}
    }),
    (te = { 0: 200, 1223: 204 }),
    (wt = i.ajaxSettings.xhr()),
    (e.cors = !!wt && "withCredentials" in wt),
    (e.ajax = wt = !!wt),
    i.ajaxTransport(function (t) {
      var i, r;
      if (e.cors || (wt && !t.crossDomain))
        return {
          send: function (u, f) {
            var o,
              e = t.xhr();
            if (
              (e.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (o in t.xhrFields) e[o] = t.xhrFields[o];
            for (o in (t.mimeType &&
              e.overrideMimeType &&
              e.overrideMimeType(t.mimeType),
            t.crossDomain ||
              u["X-Requested-With"] ||
              (u["X-Requested-With"] = "XMLHttpRequest"),
            u))
              e.setRequestHeader(o, u[o]);
            i = function (n) {
              return function () {
                i &&
                  ((i =
                    r =
                    e.onload =
                    e.onerror =
                    e.onabort =
                    e.ontimeout =
                    e.onreadystatechange =
                      null),
                  "abort" === n
                    ? e.abort()
                    : "error" === n
                    ? "number" != typeof e.status
                      ? f(0, "error")
                      : f(e.status, e.statusText)
                    : f(
                        te[e.status] || e.status,
                        e.statusText,
                        "text" !== (e.responseType || "text") ||
                          "string" != typeof e.responseText
                          ? { binary: e.response }
                          : { text: e.responseText },
                        e.getAllResponseHeaders()
                      ));
              };
            };
            e.onload = i();
            r = e.onerror = e.ontimeout = i("error");
            void 0 !== e.onabort
              ? (e.onabort = r)
              : (e.onreadystatechange = function () {
                  4 === e.readyState &&
                    n.setTimeout(function () {
                      i && r();
                    });
                });
            i = i("abort");
            try {
              e.send((t.hasContent && t.data) || null);
            } catch (u) {
              if (i) throw u;
            }
          },
          abort: function () {
            i && i();
          },
        };
    }),
    i.ajaxPrefilter(function (n) {
      n.crossDomain && (n.contents.script = !1);
    }),
    i.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (n) {
          return i.globalEval(n), n;
        },
      },
    }),
    i.ajaxPrefilter("script", function (n) {
      void 0 === n.cache && (n.cache = !1);
      n.crossDomain && (n.type = "GET");
    }),
    i.ajaxTransport("script", function (n) {
      var r, t;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (u, e) {
            r = i("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (t = function (n) {
                  r.remove();
                  t = null;
                  n && e("error" === n.type ? 404 : 200, n.type);
                })
              );
            f.head.appendChild(r[0]);
          },
          abort: function () {
            t && t();
          },
        };
    }),
    (ar = []),
    (vi = /(=)\?(?=&|$)|\?\?/),
    i.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var n = ar.pop() || i.expando + "_" + wf.guid++;
        return (this[n] = !0), n;
      },
    }),
    i.ajaxPrefilter("json jsonp", function (t, r, f) {
      var e,
        o,
        s,
        h =
          !1 !== t.jsonp &&
          (vi.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              vi.test(t.data) &&
              "data");
      if (h || "jsonp" === t.dataTypes[0])
        return (
          (e = t.jsonpCallback =
            u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          h
            ? (t[h] = t[h].replace(vi, "$1" + e))
            : !1 !== t.jsonp &&
              (t.url += (or.test(t.url) ? "&" : "?") + t.jsonp + "=" + e),
          (t.converters["script json"] = function () {
            return s || i.error(e + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = n[e]),
          (n[e] = function () {
            s = arguments;
          }),
          f.always(function () {
            void 0 === o ? i(n).removeProp(e) : (n[e] = o);
            t[e] && ((t.jsonpCallback = r.jsonpCallback), ar.push(e));
            s && u(o) && o(s[0]);
            s = o = void 0;
          }),
          "script"
        );
    }),
    (e.createHTMLDocument =
      (((ie = f.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === ie.childNodes.length)),
    (i.parseHTML = function (n, t, r) {
      return "string" != typeof n
        ? []
        : ("boolean" == typeof t && ((r = t), (t = !1)),
          t ||
            (e.createHTMLDocument
              ? (((s = (t =
                  f.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = f.location.href),
                t.head.appendChild(s))
              : (t = f)),
          (u = !r && []),
          (o = wi.exec(n))
            ? [t.createElement(o[1])]
            : ((o = vu([n], t, u)),
              u && u.length && i(u).remove(),
              i.merge([], o.childNodes)));
      var s, o, u;
    }),
    (i.fn.load = function (n, t, r) {
      var f,
        s,
        h,
        e = this,
        o = n.indexOf(" ");
      return (
        -1 < o && ((f = tt(n.slice(o))), (n = n.slice(0, o))),
        u(t)
          ? ((r = t), (t = void 0))
          : t && "object" == typeof t && (s = "POST"),
        0 < e.length &&
          i
            .ajax({ url: n, type: s || "GET", dataType: "html", data: t })
            .done(function (n) {
              h = arguments;
              e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n);
            })
            .always(
              r &&
                function (n, t) {
                  e.each(function () {
                    r.apply(this, h || [n.responseText, t, n]);
                  });
                }
            ),
        this
      );
    }),
    (i.expr.pseudos.animated = function (n) {
      return i.grep(i.timers, function (t) {
        return n === t.elem;
      }).length;
    }),
    (i.offset = {
      setOffset: function (n, t, r) {
        var v,
          o,
          s,
          h,
          e,
          c,
          l = i.css(n, "position"),
          a = i(n),
          f = {};
        "static" === l && (n.style.position = "relative");
        e = a.offset();
        s = i.css(n, "top");
        c = i.css(n, "left");
        ("absolute" === l || "fixed" === l) && -1 < (s + c).indexOf("auto")
          ? ((h = (v = a.position()).top), (o = v.left))
          : ((h = parseFloat(s) || 0), (o = parseFloat(c) || 0));
        u(t) && (t = t.call(n, r, i.extend({}, e)));
        null != t.top && (f.top = t.top - e.top + h);
        null != t.left && (f.left = t.left - e.left + o);
        "using" in t
          ? t.using.call(n, f)
          : ("number" == typeof f.top && (f.top += "px"),
            "number" == typeof f.left && (f.left += "px"),
            a.css(f));
      },
    }),
    i.fn.extend({
      offset: function (n) {
        if (arguments.length)
          return void 0 === n
            ? this
            : this.each(function (t) {
                i.offset.setOffset(this, n, t);
              });
        var r,
          u,
          t = this[0];
        if (t)
          return t.getClientRects().length
            ? ((r = t.getBoundingClientRect()),
              (u = t.ownerDocument.defaultView),
              { top: r.top + u.pageYOffset, left: r.left + u.pageXOffset })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var n,
            r,
            u,
            t = this[0],
            f = { top: 0, left: 0 };
          if ("fixed" === i.css(t, "position")) r = t.getBoundingClientRect();
          else {
            for (
              r = this.offset(),
                u = t.ownerDocument,
                n = t.offsetParent || u.documentElement;
              n &&
              (n === u.body || n === u.documentElement) &&
              "static" === i.css(n, "position");

            )
              n = n.parentNode;
            n &&
              n !== t &&
              1 === n.nodeType &&
              (((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0)),
              (f.left += i.css(n, "borderLeftWidth", !0)));
          }
          return {
            top: r.top - f.top - i.css(t, "marginTop", !0),
            left: r.left - f.left - i.css(t, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var n = this.offsetParent;
            n && "static" === i.css(n, "position");

          )
            n = n.offsetParent;
          return n || g;
        });
      },
    }),
    i.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function (i) {
          return w(
            this,
            function (n, i, u) {
              var f;
              if (
                (rt(n) ? (f = n) : 9 === n.nodeType && (f = n.defaultView),
                void 0 === u)
              )
                return f ? f[t] : n[i];
              f
                ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset)
                : (n[i] = u);
            },
            n,
            i,
            arguments.length
          );
        };
      }
    ),
    i.each(["top", "left"], function (n, t) {
      i.cssHooks[t] = du(e.pixelPosition, function (n, r) {
        if (r)
          return (r = ni(n, t)), nr.test(r) ? i(n).position()[t] + "px" : r;
      });
    }),
    i.each({ Height: "height", Width: "width" }, function (n, t) {
      i.each(
        { padding: "inner" + n, content: t, "": "outer" + n },
        function (r, u) {
          i.fn[u] = function (f, e) {
            var o = arguments.length && (r || "boolean" != typeof f),
              s = r || (!0 === f || !0 === e ? "margin" : "border");
            return w(
              this,
              function (t, r, f) {
                var e;
                return rt(t)
                  ? 0 === u.indexOf("outer")
                    ? t["inner" + n]
                    : t.document.documentElement["client" + n]
                  : 9 === t.nodeType
                  ? ((e = t.documentElement),
                    Math.max(
                      t.body["scroll" + n],
                      e["scroll" + n],
                      t.body["offset" + n],
                      e["offset" + n],
                      e["client" + n]
                    ))
                  : void 0 === f
                  ? i.css(t, r, s)
                  : i.style(t, r, f, s);
              },
              t,
              o ? f : void 0,
              o
            );
          };
        }
      );
    }),
    i.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (n, t) {
        i.fn[t] = function (n) {
          return this.on(t, n);
        };
      }
    ),
    i.fn.extend({
      bind: function (n, t, i) {
        return this.on(n, null, t, i);
      },
      unbind: function (n, t) {
        return this.off(n, null, t);
      },
      delegate: function (n, t, i, r) {
        return this.on(t, n, i, r);
      },
      undelegate: function (n, t, i) {
        return 1 === arguments.length
          ? this.off(n, "**")
          : this.off(t, n || "**", i);
      },
      hover: function (n, t) {
        return this.mouseenter(n).mouseleave(t || n);
      },
    }),
    i.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (n, t) {
        i.fn[t] = function (n, i) {
          return 0 < arguments.length
            ? this.on(t, null, n, i)
            : this.trigger(t);
        };
      }
    ),
    (re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
    (i.proxy = function (n, t) {
      var r, f, e;
      if (("string" == typeof t && ((r = n[t]), (t = n), (n = r)), u(n)))
        return (
          (f = k.call(arguments, 2)),
          ((e = function () {
            return n.apply(t || this, f.concat(k.call(arguments)));
          }).guid = n.guid =
            n.guid || i.guid++),
          e
        );
    }),
    (i.holdReady = function (n) {
      n ? i.readyWait++ : i.ready(!0);
    }),
    (i.isArray = Array.isArray),
    (i.parseJSON = JSON.parse),
    (i.nodeName = c),
    (i.isFunction = u),
    (i.isWindow = rt),
    (i.camelCase = y),
    (i.type = ut),
    (i.now = Date.now),
    (i.isNumeric = function (n) {
      var t = i.type(n);
      return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n));
    }),
    (i.trim = function (n) {
      return null == n ? "" : (n + "").replace(re, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return i;
      }),
    (ue = n.jQuery),
    (fe = n.$),
    (i.noConflict = function (t) {
      return n.$ === i && (n.$ = fe), t && n.jQuery === i && (n.jQuery = ue), i;
    }),
    "undefined" == typeof t && (n.jQuery = n.$ = i),
    i
  );
});
!(function (n, t) {
  "object" == typeof exports
    ? (module.exports = t(n))
    : "function" == typeof define && define.amd
    ? define([], t(n))
    : (n.LazyLoad = t(n));
})(
  "undefined" != typeof global ? global : this.window || this.global,
  function (n) {
    "use strict";
    function t(n, t) {
      this.settings = i(r, t || {});
      this.images = n || document.querySelectorAll(this.settings.selector);
      this.observer = null;
      this.init();
    }
    const r = { src: "data-src", srcset: "data-srcset", selector: ".lazyload" },
      i = function () {
        let n = {},
          r = !1,
          t = 0,
          u = arguments.length;
        for (
          "[object Boolean]" === Object.prototype.toString.call(arguments[0]) &&
          ((r = arguments[0]), t++);
          t < u;
          t++
        )
          !(function (t) {
            for (let u in t)
              Object.prototype.hasOwnProperty.call(t, u) &&
                (n[u] =
                  r &&
                  "[object Object]" === Object.prototype.toString.call(t[u])
                    ? i(!0, n[u], t[u])
                    : t[u]);
          })(arguments[t]);
        return n;
      };
    if (
      ((t.prototype = {
        init: function () {
          if (!n.IntersectionObserver) return void this.loadImages();
          let t = this;
          this.observer = new IntersectionObserver(
            function (n) {
              n.forEach(function (n) {
                if (n.intersectionRatio > 0) {
                  t.observer.unobserve(n.target);
                  let i = n.target.getAttribute(t.settings.src),
                    r = n.target.getAttribute(t.settings.srcset);
                  "img" === n.target.tagName.toLowerCase()
                    ? (i && (n.target.src = i), r && (n.target.srcset = r))
                    : (n.target.style.backgroundImage = "url(" + i + ")");
                }
              });
            },
            { root: null, rootMargin: "0px", threshold: [0] }
          );
          this.images.forEach(function (n) {
            t.observer.observe(n);
          });
        },
        loadAndDestroy: function () {
          this.settings && (this.loadImages(), this.destroy());
        },
        loadImages: function () {
          if (this.settings) {
            let n = this;
            this.images.forEach(function (t) {
              let i = t.getAttribute(n.settings.src),
                r = t.getAttribute(n.settings.srcset);
              "img" === t.tagName.toLowerCase()
                ? (i && (t.src = i), r && (t.srcset = r))
                : (t.style.backgroundImage = "url(" + i + ")");
            });
          }
        },
        destroy: function () {
          this.settings && (this.observer.disconnect(), (this.settings = null));
        },
      }),
      (n.lazyload = function (n, i) {
        return new t(n, i);
      }),
      n.jQuery)
    ) {
      const i = n.jQuery;
      i.fn.lazyload = function (n) {
        return (
          (n = n || {}),
          (n.attribute = n.attribute || "data-src"),
          new t(i.makeArray(this), n),
          this
        );
      };
    }
    return t;
  }
);
jQuery(document).ready(function (n) {
  var i;
  if (
    (n("img.lazy").lazyload(),
    (i = new Pushbar({ blur: !0, overlay: !0 })),
    n("#bottomMobileAdvs").html().length < 160 && n("#bottomMobileAdvs").hide(),
    document.getElementsByClassName("sticky-sidebar").length > 0)
  ) {
    var t = n(".sticky-sidebar"),
      r = t.offset().top,
      u = t.outerHeight(!0),
      f = 0,
      e = 0;
    n(window).scroll(function () {
      var o = n(".footer").offset().top - u - 10,
        i = n(window).scrollTop(),
        s;
      r < i
        ? (t.css({ position: "fixed", top: e + 45 }), t.addClass("show-fix"))
        : (t.removeClass("show-fix"), t.css({ position: "relative", top: 45 }));
      o < i && ((s = o - i), t.css({ top: s }), t.removeClass("show-fix"));
      f = i;
    });
  }
  initHighLightDauDuoi();
  setNumber();
});
class Pushbar {
  constructor(n = { overlay: true, blur: false }) {
    if (
      ((this.activeBar = null),
      (this.overlay = !1),
      n.overlay &&
        ((this.overlay = document.createElement("div")),
        this.overlay.classList.add("pushbar_overlay"),
        document.querySelector("body").appendChild(this.overlay)),
      n.blur)
    ) {
      const n = document.querySelector(".pushbar_main_content");
      n && n.classList.add("pushbar_blur");
    }
    this.bindEvents();
  }
  get opened() {
    const { activeBar: n } = this;
    return Boolean(n instanceof HTMLElement && n.classList.contains("opened"));
  }
  get activeBarId() {
    const { activeBar: n } = this;
    return n instanceof HTMLElement && n.getAttribute("data-pushbar-id");
  }
  static dispatchOpen(n) {
    const t = new CustomEvent("pushbar_opening", {
      bubbles: !0,
      detail: { pushbar: n },
    });
    n.dispatchEvent(t);
  }
  static dispatchClose(n) {
    const t = new CustomEvent("pushbar_closing", {
      bubbles: !0,
      detail: { pushbar: n },
    });
    n.dispatchEvent(t);
  }
  static findElementById(n) {
    return document.querySelector(`[data-pushbar-id="${n}"]`);
  }
  handleOpenEvent(n) {
    n.preventDefault();
    const t = n.currentTarget.getAttribute("data-pushbar-target");
    t && this.open(t);
  }
  handleCloseEvent(n) {
    n.preventDefault();
    this.close();
  }
  handleKeyEvent(n) {
    this.opened && n.keyCode === 27 && this.close();
  }
  bindEvents() {
    const n = document.querySelectorAll("[data-pushbar-target]"),
      t = document.querySelectorAll("[data-pushbar-close]");
    n.forEach((n) =>
      n.addEventListener("click", (n) => this.handleOpenEvent(n), !1)
    );
    t.forEach((n) =>
      n.addEventListener("click", (n) => this.handleCloseEvent(n), !1)
    );
    this.overlay &&
      this.overlay.addEventListener(
        "click",
        (n) => this.handleCloseEvent(n),
        !1
      );
    document.addEventListener("keyup", (n) => this.handleKeyEvent(n));
  }
  open(n) {
    if (String(n) !== this.activeBarId || !this.opened) {
      const t = Pushbar.findElementById(n);
      if (t) {
        this.opened && this.close();
        Pushbar.dispatchOpen(t);
        t.classList.add("opened");
        const i = document.querySelector("body");
        i.classList.add("pushbar_locked");
        i.setAttribute("pushbar", n);
        this.activeBar = t;
      }
    }
  }
  close() {
    const { activeBar: n } = this;
    if (n) {
      Pushbar.dispatchClose(n);
      n.classList.remove("opened");
      const t = document.querySelector("body");
      t.classList.remove("pushbar_locked");
      t.removeAttribute("pushbar");
      this.activeBar = null;
    }
  }
}
var lastPosition = 0,
  nav_header = 0,
  menuOffsetTop = $(".nav_header").length ? $(".nav_header").offset().top : 0;
document.addEventListener("scroll", onScroll);

$(function () {
  var n = function (n, t) {
    this.el = n || {};
    this.multiple = t || !1;
    var i = this.el.find(".ac_icon");
    i.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };
  n.prototype.dropdown = function (n) {
    var r = n.data.el,
      t = $(this),
      i = t.next();
    i.slideToggle();
    t.parent().toggleClass("ac_open");
  };
  n = new n($(".ac-menu"), !1);
});
jQuery(function (n) {
  n(".backtotop");
  var t = 0;
  n(window).scroll(function () {
    n(this).scrollTop() - t < 0
      ? n(".backtotop").addClass("show_backtotop")
      : n(".backtotop").removeClass("show_backtotop");
    t = n(this).scrollTop();
  });
});
$("#number_detector_24f606").on("click", function (n) {
  n.preventDefault();
  try {
    var t = $("#number_l4681z").val(),
      i = $("#province_w0c38u option:selected").val(),
      r = $("#dateRangeForm_g09f8w").val(),
      u = $("#dateRangeTo_k98pru").val();
    validateNumberDetector(t, r, u, function (n, r) {
      var u = t.split(","),
        f = u.filter(function (n, t, i) {
          return t === i.indexOf(n) && n !== "";
        });
      t = f.join();
      setTimeout(function () {
        window.location =
          "/thong-ke-lo-" +
          t +
          "-tu-ngay-" +
          formatDate(n.Date, "-") +
          "-den-ngay-" +
          formatDate(r.Date, "-") +
          "-xs-" +
          i +
          ".html";
      }, 300);
    });
  } catch (f) {
    console.log(f);
    alert("QuĂ½ khĂ¡ch vui lĂ²ng thá»­ láº¡i sau.");
  }
});
$(function () {
  $("#lottery_living_name").length &&
    (changCurrentLotteryLive(), setInterval("changCurrentLotteryLive()", 3e4));
  $("#number_l4681z").on("keypress keyup blur", function (n) {
    n.which != 44 && (n.which < 48 || n.which > 57) && n.preventDefault();
  });
});
$(function () {
  xoso.init();
});
var xosoconfig = { rootPath: "/" },
  isrunning = !1,
  xoso = {
    variables: { lotMsgListMN: 0, lotMsgListMT: 0, currentPage: 1 },
    init: function () {
      this.events();
    },
    events: function () {
      $(document).on("mouseenter mouseleave", "#hover-number td", function (n) {
        var t = $(this).parent().attr("data"),
          i = $(this).text();
        n.type == "mouseenter"
          ? $("#table-" + t + " tbody tr td span").each(function (n, t) {
              if ($(t).children("span").length == 0) {
                var r = $(t).html();
                (r[r.length - 1] == i || r[r.length - 2] == i) &&
                  $(t).html(
                    r.slice(0, r.length - 2) +
                      "<mark>" +
                      r.slice(r.length - 2, r.length) +
                      "</mark>"
                  );
              }
            })
          : $("#table-" + t + " tbody tr td span").each(function (n, t) {
              if ($(t).children("span").length == 0) {
                var i = $(t).html(),
                  r = i.split("<mark>");
                $(t).html(r);
              }
            });
      });
      $(document).on("click", "#thongKe0145", function () {
        var n = $("#datepicker").val(),
          t = xoso.ValidateDate(n),
          i = "",
          r = $("#datepicker1").val(),
          u = xoso.ValidateDate(r),
          f = "";
        if (t.IsValid && u.IsValid) {
          if (t.Date >= u.Date) {
            alert(
              "NgĂ y chá»n khĂ´ng há»£p lá»‡ (Vui lĂ²ng nháº­p ngĂ y káº¿t thĂºc lá»›n hÆ¡n ngĂ y báº¯t Ä‘áº§u)."
            );
            return;
          }
        } else {
          alert("NgĂ y chá»n khĂ´ng há»£p lá»‡ (ngĂ y/thĂ¡ng/nÄƒm).");
          return;
        }
        i = n;
        f = r;
        $.xosoAjax(
          "/ThongKeXSMega/ThongKe0145Ajax",
          "Post",
          { dateFrom: i, dateTo: f },
          function (n) {
            if (n.length > 0) {
              var t = $(n).filter("#thongKe0145AjaxText");
              $("#thongKe0145Text").text(t.text());
              $("#thongKe0145Kq").html(n);
            }
          }
        );
      });
      $(document).on("click", "#thongKeMegaNhieuIt", function () {
        var n = $("#datepicker").val(),
          t = xoso.ValidateDate(n),
          i = "",
          r = $("#datepicker1").val(),
          u = xoso.ValidateDate(r),
          f = "";
        if (t.IsValid && u.IsValid) {
          if (t.Date >= u.Date) {
            alert(
              "NgĂ y chá»n khĂ´ng há»£p lá»‡ (Vui lĂ²ng nháº­p ngĂ y káº¿t thĂºc lá»›n hÆ¡n ngĂ y báº¯t Ä‘áº§u)."
            );
            return;
          }
        } else {
          alert("NgĂ y chá»n khĂ´ng há»£p lá»‡ (ngĂ y/thĂ¡ng/nÄƒm).");
          return;
        }
        i = n;
        f = r;
        $.xosoAjax(
          "/ThongKeXSMega/ThongKeMegaNhieuItAjax",
          "Post",
          { dateFrom: i, dateTo: f },
          function (n) {
            if (n.length > 0) {
              var t = $(n).filter("#thongKeMegaNhieuItAjaxText");
              $("#thongKeMegaNhieuItText").text(t.text());
              $("#thongKeMegaNhieuItKq").html(n);
            }
          }
        );
      });
      $(document).on("click", "#thongKeTanSuatTheoNgay", function () {
        var i = $("#dateFrom_jm5w90zn0x").val(),
          n = xoso.ValidateDate(i),
          r = "",
          u = $("#dateTo_xkfi9sypfh").val(),
          t = xoso.ValidateDate(u),
          f = "";
        if (n.IsValid && t.IsValid) {
          if (n.Date >= t.Date) {
            alert(
              "NgĂ y chá»n khĂ´ng há»£p lá»‡ (Vui lĂ²ng nháº­p ngĂ y káº¿t thĂºc lá»›n hÆ¡n ngĂ y báº¯t Ä‘áº§u)."
            );
            return;
          }
        } else {
          alert("NgĂ y chá»n khĂ´ng há»£p lá»‡ (ngĂ y/thĂ¡ng/nÄƒm).");
          return;
        }
        var e = t.Date - n.Date,
          o = Math.floor(e / 31536e6),
          s = Math.floor((e % 31536e6) / 2628e6);
        if (o > 1 || (o == 1 && s >= 1)) {
          alert(
            "Vui lĂ²ng chá»n khoáº£ng thá»i gian cáº§n thá»‘ng kĂª tá»‘i Ä‘a lĂ  12 thĂ¡ng."
          );
          return;
        }
        r = i;
        f = u;
        $.xosoAjax(
          "/ThongKeXSMega/ThongKeTanSuatTheoNgayAjax",
          "Post",
          { dateFrom: r, dateTo: f },
          function (n) {
            if (n.length > 0) {
              var t = $(n).filter("#thongKeTanSuatTheoNgayAjaxText");
              $("#thongKeTanSuatTheoNgayText").text(t.text());
              $("#thongKeTanSuatTheoNgayKq").html(n);
            }
          }
        );
      });
      $(document).on("click", "#btnSend_g2grs21ohg", function () {
        var n = $("#LotoNumber_20fjd54l5n"),
          t = $("input[name='PrizeType_pucp5ou6xm']:checked"),
          i = $("#LotteryId_dahq1pwalz option:selected");
        if (
          ($("#btnReport_ovoorj7bo2").removeAttr("data-id"),
          $(this).attr("data-id", 1),
          n.val().trim() == "")
        ) {
          alert("Báº¡n chÆ°a nháº­p cáº·p lĂ´ káº¿t.");
          n.focus();
          return;
        }
        if (n.val().length != 2) {
          alert("Vui lĂ²ng nháº­p cáº·p lĂ´ káº¿t lĂ  sá»‘ cĂ³ 2 chá»¯ sá»‘.");
          n.focus();
          return;
        }
        if (/[^0-9]/g.test(n.val())) {
          alert("Vui lĂ²ng nháº­p cáº·p lĂ´ káº¿t lĂ  sá»‘ cĂ³ 2 chá»¯ sá»‘.");
          n.focus();
          return;
        }
        $.xosoAjax(
          "/LoKet/LoKetSend",
          "Post",
          { lotoNumber: n.val(), prizeType: t.val(), lotteryId: i.val() },
          function (n) {
            if (n.length > 0) {
              var t = $(n).filter("#LoketMessages_dahq1pwalz");
              t.length > 0 ? alert(t.text()) : $("#LoketKq_6w5w38gz3g").html(n);
            }
          }
        );
      });
      $(document).on("click", "#btnReport_ovoorj7bo2", function () {
        var n = $("input[name='PrizeType_pucp5ou6xm']:checked"),
          t = $("#LotteryId_dahq1pwalz option:selected");
        $("#btnSend_g2grs21ohg").removeAttr("data-id");
        $(this).attr("data-id", 1);
        $.xosoAjax(
          "/LoKet/LoKetReport",
          "Post",
          { prizeType: n.val(), lotteryId: t.val() },
          function (n) {
            if (n.length > 0) {
              var t = $(n).filter("#LoketMessages_dahq1pwalz");
              t.length > 0 ? alert(t.text()) : $("#LoketKq_6w5w38gz3g").html(n);
            }
          }
        );
      });
      $(document).on("click", "#btnSend_5gs4izpw3r", function () {
        var n = $("#LotoNumber_dg232dist9"),
          t = $("#LotoNumber_v7pm07wf04"),
          i = $("#LotoNumber_pj2sbd1z6y"),
          r = /[^0-9]/g;
        if (
          ($("#btnReport_ik5y3v08nz").removeAttr("data-id"),
          $(this).attr("data-id", 1),
          n.val().trim() == "")
        ) {
          alert("Báº¡n chÆ°a nháº­p cáº·p lĂ´ thá»© 1.");
          n.focus();
          return;
        }
        if (n.val().length != 2) {
          alert("Vui lĂ²ng nháº­p cáº·p lĂ´ káº¿t lĂ  sá»‘ cĂ³ 2 chá»¯ sá»‘.");
          n.focus();
          return;
        }
        if (r.test(n.val())) {
          alert("Vui lĂ²ng nháº­p cáº·p lĂ´ káº¿t lĂ  sá»‘ cĂ³ 2 chá»¯ sá»‘.");
          n.focus();
          return;
        }
        if (t.val().trim() == "") {
          alert("Báº¡n chÆ°a nháº­p cáº·p lĂ´ thá»© 2.");
          t.focus();
          return;
        }
        if (t.val().length != 2) {
          alert("Vui lĂ²ng nháº­p cáº·p lĂ´ káº¿t lĂ  sá»‘ cĂ³ 2 chá»¯ sá»‘.");
          t.focus();
          return;
        }
        if (r.test(t.val())) {
          alert("Vui lĂ²ng nháº­p cáº·p lĂ´ káº¿t lĂ  sá»‘ cĂ³ 2 chá»¯ sá»‘.");
          t.focus();
          return;
        }
        if (i.val().trim() == "") {
          alert("Báº¡n chÆ°a nháº­p cáº·p lĂ´ thá»© 3.");
          i.focus();
          return;
        }
        if (i.val().length != 2) {
          alert("Vui lĂ²ng nháº­p cáº·p lĂ´ káº¿t lĂ  sá»‘ cĂ³ 2 chá»¯ sá»‘.");
          i.focus();
          return;
        }
        if (r.test(i.val())) {
          alert("Vui lĂ²ng nháº­p cáº·p lĂ´ káº¿t lĂ  sá»‘ cĂ³ 2 chá»¯ sá»‘.");
          i.focus();
          return;
        }
        $.xosoAjax(
          "/LoKet/Xien3KetSend",
          "Post",
          { lotoNumber1: n.val(), lotoNumber2: t.val(), lotoNumber3: i.val() },
          function (n) {
            if (n.length > 0) {
              var t = $(n).filter("#LoketMessages_pi12fsqujg");
              t.length > 0 ? alert(t.text()) : $("#LoketKq_6u7alxprlj").html(n);
            }
          }
        );
      });
      $(document).on("click", "#btnReport_ik5y3v08nz", function () {
        $("#btnSend_5gs4izpw3r").removeAttr("data-id");
        $(this).attr("data-id", 1);
        $.xosoAjax("/LoKet/Xien3KetReport", "Post", {}, function (n) {
          n.length > 0 && $("#LoketKq_6u7alxprlj").html(n);
        });
      });
    },
    ajaxEvents: {
      OnComplete: function () {
        $(".ajaxLoading").html("");
        $(".btn.btn-red").prop("disabled", !1).css("cursor", "default");
      },
      OnSuccess: function (n, t) {
        t == "success"
          ? n.jsonFlag == !0
            ? n.jsonRetval.length > 0 &&
              xoso.dialog(
                null,
                "ThĂ´ng bĂ¡o",
                n.jsonRetval,
                null,
                null,
                function () {
                  window.location.href = xosoconfig.rootPath + "profile.html";
                }
              )
            : n.jsonRetval.length > 0 &&
              xoso.dialog(null, "ThĂ´ng bĂ¡o", n.jsonRetval, null, null, null)
          : alert("QuĂ½ khĂ¡ch vui lĂ²ng thá»­ láº¡i sau.");
      },
      OnFailure: function () {
        $(".ajaxLoading").html("");
        $(".btn.btn-red").prop("disabled", !1).css("cursor", "default");
      },
    },
    ValidateDate: function (n) {
      var t = /^(\d{2})[-|/](\d{2})[-|/](\d{4})$/.exec(n);
      if (t == null) return !1;
      var r = t[1],
        u = t[2] - 1,
        f = t[3],
        i = new Date(f, u, r),
        e = i.getDate() == r && i.getMonth() == u && i.getFullYear() == f;
      return { Date: i, IsValid: e };
    },
    RunningQuayThuVietlott: 0,
    RunRandomMegaComplete: function () {
      xoso.RunningQuayThuVietlott = 0;
      isrunning = !1;
      $("#btnStartOrStop_Mega645").html("Quay thá»­ láº¡i");
    },
    RunRandomPowerComplete: function () {
      xoso.RunningQuayThuVietlott = 0;
      isrunning = !1;
      $("#btnStartOrStop_Power655").html("Quay thá»­ láº¡i");
    },
    RunRandomMax4DComplete: function () {
      xoso.RunningQuayThuVietlott = 0;
      isrunning = !1;
      $("#btnStartOrStop_Max4D").html("Quay thá»­ láº¡i");
    },
    RunRandomPower: function () {
      var u;
      xoso.RunningQuayThuVietlott = 1;
      isrunning = !0;
      $("#btnStartOrStop_Power655").html("Äang quay thá»­");
      var f = new Date().getTime(),
        r = [],
        n = null,
        i = null,
        t = [
          00, 01, 02, 03, 04, 05, 06, 07, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
          18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
          35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
          52, 53, 54, 55,
        ];
      for (
        n = xoso.getRandomMegaString(t),
          r.push(n),
          i = t.indexOf(n),
          i > -1 && t.splice(i, 1),
          n = xoso.getRandomMegaString(t),
          r.push(n),
          i = t.indexOf(n),
          i > -1 && t.splice(i, 1),
          n = xoso.getRandomMegaString(t),
          r.push(n),
          i = t.indexOf(n),
          i > -1 && t.splice(i, 1),
          n = xoso.getRandomMegaString(t),
          r.push(n),
          i = t.indexOf(n),
          i > -1 && t.splice(i, 1),
          n = xoso.getRandomMegaString(t),
          r.push(n),
          i = t.indexOf(n),
          i > -1 && t.splice(i, 1),
          n = xoso.getRandomMegaString(t),
          r.push(n),
          i = t.indexOf(n),
          i > -1 && t.splice(i, 1),
          n = xoso.getRandomMegaString(t),
          r.push(n),
          u = 0;
        u < r.length;
        u++
      )
        $("#power655_" + u).html(
          '<img src="' +
            xosoconfig.rootPath +
            'images/loader-red.gif" alt="quay thá»­"/>'
        );
      for (u = 0; u < r.length; u++)
        xoso.sethtmlPower("power655_" + u, r[u], 2e3 * u);
    },
    RunRandomMax4D: function () {
      var t;
      xoso.RunningQuayThuVietlott = 2;
      isrunning = !0;
      $("#btnStartOrStop_Max4D").html("Äang quay thá»­");
      var i = new Date().getTime(),
        n = [];
      for (
        n.push(xoso.getRandomString(4)),
          n.push(xoso.getRandomString(4)),
          n.push(xoso.getRandomString(4)),
          n.push(xoso.getRandomString(4)),
          n.push(xoso.getRandomString(4)),
          n.push(xoso.getRandomString(4)),
          n.push(xoso.getRandomString(4)),
          n.push(xoso.getRandomString(4)),
          t = 0;
        t < n.length;
        t++
      )
        $("#max4d_" + t).html(
          '<img src="' +
            xosoconfig.rootPath +
            'images/loader-red.gif" alt="quay thá»­"/>'
        );
      for (t = 0; t < n.length - 2; t++)
        xoso.sethtmlMax4D("max4d_" + t, n[t], 2e3 * t);
    },
    RunRandomMega: function () {
      var r;
      xoso.RunningQuayThuVietlott = 3;
      isrunning = !0;
      $("#btnStartOrStop_Mega645").html("Äang quay thá»­");
      var f = new Date().getTime(),
        u = [],
        n = null,
        i = null,
        t = [
          00, 01, 02, 03, 04, 05, 06, 07, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
          18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
          35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
        ];
      for (
        n = xoso.getRandomMegaString(t),
          u.push(n),
          i = t.indexOf(n),
          i > -1 && t.splice(i, 1),
          n = xoso.getRandomMegaString(t),
          u.push(n),
          i = t.indexOf(n),
          i > -1 && t.splice(i, 1),
          n = xoso.getRandomMegaString(t),
          u.push(n),
          i = t.indexOf(n),
          i > -1 && t.splice(i, 1),
          n = xoso.getRandomMegaString(t),
          u.push(n),
          i = t.indexOf(n),
          i > -1 && t.splice(i, 1),
          n = xoso.getRandomMegaString(t),
          u.push(n),
          i = t.indexOf(n),
          i > -1 && t.splice(i, 1),
          n = xoso.getRandomMegaString(t),
          u.push(n),
          r = 0;
        r < u.length;
        r++
      )
        $("#mega645_" + r).html(
          '<img src="' +
            xosoconfig.rootPath +
            'images/loader-red.gif" alt="quay thá»­"/>'
        );
      for (r = 0; r < u.length; r++)
        xoso.sethtmlMega("mega645_" + r, u[r], 2e3 * r);
    },
    sethtmlMega: function (n, t, i) {
      setTimeout(function () {
        xoso.sethtmlMegaRuning(n, t);
      }, i);
    },
    sethtmlPower: function (n, t, i) {
      setTimeout(function () {
        xoso.sethtmlPowerRuning(n, t);
      }, i);
    },
    sethtmlMax4D: function (n, t, i) {
      setTimeout(function () {
        xoso.sethtmlMax4DRuning(n, t);
      }, i);
    },
    sethtmlMegaRuning: function (n, t) {
      var i = null,
        u = new Date().getTime(),
        f = 2e3,
        r = 0,
        e = 45;
      $("#" + n).html('<span id="output0">00</span>');
      i = setInterval(function () {
        if (new Date().getTime() - u < f) {
          var o = Math.floor(Math.random() * (e - r + 1) + r);
          $("#output0").text("" + parseInt(o) < 10 ? "0" + o : o);
        } else clearInterval(i), $("#" + n).html(t), $("#" + n).attr("data", t);
      }, 100);
    },
    sethtmlPowerRuning: function (n, t) {
      var i = null,
        u = new Date().getTime(),
        f = 2e3,
        r = 0,
        e = 55;
      $("#" + n).html('<span id="output0">00</span>');
      i = setInterval(function () {
        if (new Date().getTime() - u < f) {
          var o = Math.floor(Math.random() * (e - r + 1) + r);
          $("#output0").text("" + parseInt(o) < 10 ? "0" + o : o);
        } else clearInterval(i), $("#" + n).html(t), $("#" + n).attr("data", t);
      }, 100);
    },
    sethtmlMax4DRuning: function (n, t) {
      var i = null,
        u = new Date().getTime(),
        f = 2e3,
        r = 0,
        e = 9;
      $("#" + n).html(
        '<span id="output0"></span><span id="output1"></span><span id="output2"></span><span id="output3"></span>'
      );
      i = setInterval(function () {
        if (new Date().getTime() - u < f)
          for (var o = 0; o < t.length; o++)
            $("#output" + o).text(
              "" + Math.floor(Math.random() * (e - r + 1) + r)
            );
        else
          clearInterval(i),
            $("#" + n).html(t),
            $("#" + n).attr("data", t),
            n == "max4d_5" &&
              ($("#max4d_6").html("*" + t.substr(t.length - 3)),
              $("#max4d_6").attr("data", "*" + t.substr(t.length - 3)),
              $("#max4d_7").html("**" + t.substr(t.length - 2)),
              $("#max4d_7").attr("data", "**" + t.substr(t.length - 2)));
      }, 100);
    },
    getRandomMegaString: function (n) {
      var t = Math.floor(Math.random() * n.length);
      return parseInt(n[t]) < 10 ? "0" + n[t] : n[t];
    },
    RunRandomComplete: function () {
      isrunning = !1;
      $("#btnStartOrStop").html("Quay thá»­ láº¡i");
    },
    choice: function (n, t) {
      isrunning ||
        ((mn_mt = "table-xsmb"),
        n == 1 && (mn_mt = "table-xsmn"),
        n == 2 && (mn_mt = "table-xsmt"),
        n == 3 && (mn_mt = "table-tinh"),
        $("#" + mn_mt + " tbody tr td span").each(function (n, i) {
          var r = $(i).attr("data");
          typeof r != "undefined" &&
            r != "..." &&
            ((t == 2 || t == 3) && r.length > t && (r = r.substr(r.length - t)),
            $(i).text(r));
        }));
    },
    "choiceTKGÄB": function (n, t) {
      isrunning ||
        ($(".lotoPrize").each(function (n, i) {
          var r = $(i).attr("data");
          typeof r != "undefined" &&
            r != "..." &&
            (t == 2 ? (r = r.substr(0, 1)) : t == 3 && (r = r.substr(1, 1)),
            $(i).text(r));
        }),
        $(".showFull").each(function () {
          t == 0 ? $(".showFull").show() : $(".showFull").hide();
        }));
    },
    loadddlLotteries: function (n, t, i) {
      var r = document.getElementById("ddlProvincesQuayThu");
      $("#ddlProvincesQuayThu").empty();
      n == 1
        ? $.ajax({
            url: xosoconfig.rootPath + "Utils/GetAllLotteries",
            type: "GET",
            success: function (n) {
              var t, u, f;
              for (
                t = document.createElement("option"),
                  t.text = "Miá»n Báº¯c",
                  t.value = xosoconfig.rootPath + "quay-thu-xsmb.html",
                  t.setAttribute(
                    "url",
                    xosoconfig.rootPath + "quay-thu-xsmb.html"
                  ),
                  r.add(t, 0),
                  u = 1;
                u < n.length + 1;
                u++
              )
                if (((f = n[u - 1]), f.lotteryGroupId <= 1)) continue;
                else
                  (t = document.createElement("option")),
                    (t.text = f.lotteryName),
                    (t.value =
                      xosoconfig.rootPath +
                      "quay-thu-xs" +
                      f.lotteryCode.toLowerCase() +
                      ".html"),
                    f.lotteryCode == i.toUpperCase() &&
                      t.setAttribute("selected", "selected"),
                    r.add(t, u);
            },
          })
        : ((option = document.createElement("option")),
          (option.text = "Miá»n Báº¯c"),
          (option.value = xosoconfig.rootPath + "quay-thu-xsmb.html"),
          t == 1 && option.setAttribute("selected", "selected"),
          r.add(option),
          (option = document.createElement("option")),
          (option.text = "Miền Nam"),
          (option.value = xosoconfig.rootPath + "quay-thu-xsmn.html"),
          t == 2 && option.setAttribute("selected", "selected"),
          r.add(option),
          (option = document.createElement("option")),
          (option.text = "Miền Trung"),
          (option.value = xosoconfig.rootPath + "quay-thu-xsmt.html"),
          t == 3 && option.setAttribute("selected", "selected"),
          r.add(option));
    },
    getRandomRangeByLotteryAndGroupId: function (n, t) {
      return $.ajax({
        url: xosoconfig.rootPath + "Utils/GetRandomRangeByLotteryAndGroupId",
        async: !1,
        data: { lotteryId: n, lotteryGroupId: t },
        type: "GET",
        success: function (n) {
          return n;
        },
      });
    },
    RunRandomXSMB: function () {
      var t, n;
      for (
        isrunning = !0,
          xoso.goToByScroll("quaythumb"),
          $("#btnStartOrStop").html("Äang quay thá»­"),
          n = 0;
        n < 10;
        n++
      )
        $("#item_Tail_" + n).html(""), $("#item_Head_" + n).html("");
      for (
        t = [],
          t.push(xoso.getRandomString(5)),
          t.push(xoso.getRandomString(5)),
          t.push(xoso.getRandomString(5)),
          n = 0;
        n < 6;
        n++
      )
        t.push(xoso.getRandomString(5));
      for (n = 0; n < 4; n++) t.push(xoso.getRandomString(4));
      for (n = 0; n < 6; n++) t.push(xoso.getRandomString(4));
      for (n = 0; n < 3; n++) t.push(xoso.getRandomString(3));
      for (n = 0; n < 4; n++) t.push(xoso.getRandomString(2));
      for (t.push(xoso.getRandomString(5)), n = 0; n < t.length; n++)
        $("#mb_prize_" + n).html(
          '<img src="' +
            xosoconfig.rootPath +
            'images/long-quay.gif" class="img-loading hide-img" alt="long-quay"/>'
        );
      for (n = 0; n < t.length; n++)
        xoso.sethtml("mb_prize_" + n, t[n], 2e3 * n);
    },
    RunRandomXSMBV2: function () {
      var i, t, n;
      for (
        isrunning = !0,
          xoso.goToByScroll("quaythumb"),
          $("#btnStartOrStop").html("Äang quay thá»­"),
          n = 0;
        n < 10;
        n++
      )
        $("#item_Tail_" + n).html(""), $("#item_Head_" + n).html("");
      if (
        ((i = this.getRandomRangeByLotteryAndGroupId(0, 1)),
        (t = i.responseJSON.lotteryPrizeRanges),
        !t.length)
      ) {
        isrunning = !1;
        $("#btnStartOrStop").html("Quay thá»­");
        alert(
          "Thiáº¿t láº­p quay thá»­ khĂ´ng thĂ nh cĂ´ng, quĂ½ khĂ¡ch vui lĂ²ng thá»­ láº¡i"
        );
        return;
      }
      for (
        $("#quaythudate").html(
          '<p>Káº¿t quáº£ quay thá»­ xá»• sá»‘ Miá»n Báº¯c hĂ´m nay láº¥y tá»± Ä‘á»™ng tá»« káº¿t quáº£ xá»• sá»‘ miá»n Báº¯c má»Ÿ thÆ°á»Ÿng ngĂ y <a href="/xsmb-' +
            i.responseJSON.openPrize +
            '.html">' +
            i.responseJSON.openPrize +
            "</a>.</p >"
        ),
          n = 0;
        n < t.length;
        n++
      )
        $("#mb_prize_" + n).html(
          '<img src="' +
            xosoconfig.rootPath +
            'images/long-quay.gif" class="img-loading hide-img" alt="long-quay"/>'
        );
      for (n = 0; n < t.length; n++)
        xoso.sethtml("mb_prize_" + n, t[n], 2e3 * n);
    },
    sethtml: function (n, t, i) {
      setTimeout(function () {
        xoso.sethtmlRuning(n, t);
      }, i);
    },
    sethtmlRuning: function (n, t) {
      var f = null,
        s = new Date().getTime(),
        h = 2e3,
        e = 0,
        c = 9,
        i = t,
        o = "",
        u = $('input[name="spinOptions"]:checked').val(),
        r;
      for (
        u == 2
          ? (i = t.substring(t.length - 2))
          : u == 3 && (i = t.substring(t.length - 3)),
          r = 0;
        r < i.length;
        r++
      )
        o +=
          '<span id="output' +
          r +
          '" class="runloto-' +
          (r + 1) +
          '">' +
          Math.floor(Math.random() * 9 + 1) +
          "</span>";
      $("#" + n).html(o);
      f = setInterval(function () {
        if (new Date().getTime() - s < h)
          for (var r = 0; r < i.length; r++)
            $("#output" + r).text(
              "" + Math.floor(Math.random() * (c - e + 1) + e)
            );
        else
          clearInterval(f),
            $("#" + n).html(i),
            $("#" + n).attr("data", t),
            $("#" + n).attr("type", u);
      }, 100);
      xoso.addValueToTableLoto(t);
      typeof tableSpin != "undefined" &&
        $("td span", tableSpin).children("img").length == 0 &&
        (xoso.RunRandomComplete(),
        typeof changeSpinOption != "undefined" &&
          clearInterval(changeSpinOption));
    },
    addValueToTableLoto: function (n) {
      var r, u, f, e;
      if (n != null) {
        n = parseInt(n) % 100;
        var t = n % 10,
          i = n / 10,
          o = $(".special-prize").text();
        t = parseInt(t);
        i = parseInt(i);
        r = i;
        u = t;
        o != "" &&
          ((r = '<span class="red">' + i + "</span>"),
          (u = '<span class="red">' + t + "</span>"));
        f = $("#item_Tail_" + t).html();
        e = $("#item_Head_" + i).html();
        f.length > 0
          ? $("#item_Tail_" + t).html(f + "," + r)
          : $("#item_Tail_" + t).html(r);
        e.length > 0
          ? $("#item_Head_" + i).html(e + "," + u)
          : $("#item_Head_" + i).html(u);
      }
    },
    getRandomString: function (n) {
      for (var t = "", i = 0; i < n; i++)
        t += Math.floor(Math.random() * 10 + 0);
      return t;
    },
    RunRandomXSMN: function () {
      var n, t;
      isrunning = !0;
      xoso.goToByScroll("kqcaumb");
      $("#btnStartOrStop").html("Äang quay thá»­");
      $("[id^=item_Head_]").html("");
      var u = $("span[id*='mn_prize_']").length,
        r = u / 18,
        f = new Date().getTime(),
        i = [];
      for (n = 0; n < r; n++) i.push(xoso.getRandomString(2));
      for (n = 0; n < r; n++) i.push(xoso.getRandomString(3));
      for (n = 0; n < r; n++)
        for (t = 0; t < 3; t++) i.push(xoso.getRandomString(4));
      for (n = 0; n < r; n++) i.push(xoso.getRandomString(4));
      for (n = 0; n < r; n++)
        for (t = 0; t < 7; t++) i.push(xoso.getRandomString(5));
      for (n = 0; n < r; n++)
        for (t = 0; t < 2; t++) i.push(xoso.getRandomString(5));
      for (n = 0; n < r; n++) i.push(xoso.getRandomString(5));
      for (n = 0; n < r; n++) i.push(xoso.getRandomString(5));
      for (n = 0; n < r; n++) i.push(xoso.getRandomString(6));
      for (t = 0; t < i.length; t++)
        $("#mn_prize_" + t).html(
          '<img src="' +
            xosoconfig.rootPath +
            'images/long-quay.gif" class="img-loading hide-img" alt=""/>'
        );
      for (t = 0; t < i.length; t++)
        xoso.sethtmlMN("mn_prize_" + t, i[t], 2e3 * t);
    },
    RunRandomXSMNV2: function (n) {
      var u, f, t;
      isrunning = !0;
      xoso.goToByScroll("kqcaumb");
      $("#btnStartOrStop").html("Äang quay thá»­");
      $("[id^=item_Head_]").html("");
      var e = $("span[id*='mn_prize_']").length,
        o = e / 18,
        s = new Date().getTime(),
        r = this.getRandomRangeByLotteryAndGroupId(0, n),
        i = r.responseJSON.lotteryPrizeRanges;
      if (!i.length) {
        isrunning = !1;
        $("#btnStartOrStop").html("Quay thử");
        alert(
          "Thiết lập quay thử không thành công, quý khách vui lòng thử lại"
        );
        return;
      }
      for (
        u = n == 2 ? "Nam" : "Trung",
          f = n == 2 ? "mn" : "mt",
          $("#quaythudate").html(
            "<p>Káº¿t quáº£ quay thá»­ xá»• sá»‘ Miá»n " +
              u +
              " hĂ´m nay láº¥y tá»± Ä‘á»™ng tá»« káº¿t quáº£ xá»• sá»‘ miá»n " +
              u +
              ' má»Ÿ thÆ°á»Ÿng ngĂ y <a href="/xs' +
              f +
              "-" +
              r.responseJSON.openPrize +
              '.html">' +
              r.responseJSON.openPrize +
              "</a>.</p >"
          ),
          t = 0;
        t < i.length;
        t++
      )
        $("#mn_prize_" + t).html(
          '<img src="' +
            xosoconfig.rootPath +
            'images/long-quay.gif" class="img-loading hide-img" alt=""/>'
        );
      for (t = 0; t < i.length; t++)
        xoso.sethtmlMN("mn_prize_" + t, i[t], 2e3 * t);
    },
    sethtmlMN: function (n, t, i) {
      setTimeout(function () {
        xoso.sethtmlMNRuning(n, t);
      }, i);
    },
    sethtmlMNRuning: function (n, t) {
      var f = null,
        h = new Date().getTime(),
        c = 2e3,
        e = 0,
        l = 9,
        i = t,
        o = "",
        u = $('input[name="spinOptions"]:checked').val(),
        r,
        s;
      for (
        u == 2
          ? (i = t.substring(t.length - 2))
          : u == 3 && (i = t.substring(t.length - 3)),
          r = 0;
        r < i.length;
        r++
      )
        o +=
          '<span id="outputMN' +
          r +
          '" class="runloto-' +
          (r + 1) +
          '">' +
          Math.floor(Math.random() * 9 + 1) +
          "</span>";
      $("#" + n).html(o);
      s = $("#" + n).attr("lotterycode");
      f = setInterval(function () {
        if (new Date().getTime() - h < c)
          for (var r = 0; r < i.length; r++)
            $("#outputMN" + r).text(
              "" + Math.floor(Math.random() * (l - e + 1) + e)
            );
        else
          clearInterval(f),
            $("#" + n).html(i),
            $("#" + n).attr("data", t),
            $("#" + n).attr("type", u);
      }, 100);
      xoso.XSMNaddValueToTableLoto(t, s);
      typeof tableSpin != "undefined" &&
        $("td span", tableSpin).children("img").length == 0 &&
        (xoso.RunRandomComplete(),
        typeof changeSpinOption != "undefined" &&
          clearInterval(changeSpinOption));
    },
    XSMNaddValueToTableLoto: function (n, t) {
      var r, i, f, u, e;
      n != null &&
        ((n = parseInt(n) % 100),
        (r = n % 10),
        (i = n / 10),
        (r = parseInt(r)),
        (i = parseInt(i)),
        (f = $('.prize_db[lotterycode="' + t + '"]')),
        (u = r),
        f.length &&
          f.text() != "" &&
          (u = '<span class="red">' + r + "</span>"),
        (e = $("#item_Head_" + t + "_" + i).html()),
        e.length > 0
          ? $("#item_Head_" + t + "_" + i).html(e + "," + u)
          : $("#item_Head_" + t + "_" + i).html(u));
    },
    RunRandomXSTheoDai: function () {
      var n;
      for (
        isrunning = !0,
          xoso.goToByScroll("kqcaumb"),
          $("#btnStartOrStop").html("Äang quay thá»­"),
          n = 0;
        n < 10;
        n++
      )
        $("#item_Tail_" + n).html(""), $("#item_Head_" + n).html("");
      var i = new Date().getTime(),
        t = [];
      for (
        t.push(xoso.getRandomString(2)), t.push(xoso.getRandomString(3)), n = 0;
        n < 3;
        n++
      )
        t.push(xoso.getRandomString(4));
      for (t.push(xoso.getRandomString(4)), n = 0; n < 7; n++)
        t.push(xoso.getRandomString(5));
      for (n = 0; n < 2; n++) t.push(xoso.getRandomString(5));
      for (
        t.push(xoso.getRandomString(5)),
          t.push(xoso.getRandomString(5)),
          t.push(xoso.getRandomString(6)),
          n = 0;
        n < t.length;
        n++
      )
        $("#qttd_prize_" + n).html(
          '<img src="' +
            xosoconfig.rootPath +
            'images/long-quay.gif" class="img-loading hide-img" alt=""/>'
        );
      for (n = 0; n < t.length; n++)
        xoso.sethtml("qttd_prize_" + n, t[n], 2e3 * n);
    },
    RunRandomXSTheoDaiV2: function (n, t, i) {
      var r;
      for (
        isrunning = !0,
          xoso.goToByScroll("kqcaumb"),
          $("#btnStartOrStop").html("Äang quay thá»­"),
          r = 0;
        r < 10;
        r++
      )
        $("#item_Tail_" + r).html(""), $("#item_Head_" + r).html("");
      var e = new Date().getTime(),
        f = this.getRandomRangeByLotteryAndGroupId(t, 0),
        u = f.responseJSON.lotteryPrizeRanges;
      if (!u.length) {
        isrunning = !1;
        $("#btnStartOrStop").html("Quay thá»­");
        alert(
          "Thiáº¿t láº­p quay thá»­ khĂ´ng thĂ nh cĂ´ng, quĂ½ khĂ¡ch vui lĂ²ng thá»­ láº¡i"
        );
        return;
      }
      for (
        $("#quaythudate").html(
          "<p>Káº¿t quáº£ quay thá»­ xá»• sá»‘ " +
            n +
            " hĂ´m nay láº¥y tá»± Ä‘á»™ng tá»« káº¿t quáº£ xá»• sá»‘ " +
            n +
            ' má»Ÿ thÆ°á»Ÿng ngĂ y <a href="/xs' +
            i +
            "-" +
            f.responseJSON.openPrize +
            '.html">' +
            f.responseJSON.openPrize +
            "</a>.</p >"
        ),
          r = 0;
        r < u.length;
        r++
      )
        $("#qttd_prize_" + r).html(
          '<img src="' +
            xosoconfig.rootPath +
            'images/long-quay.gif" class="img-loading hide-img" alt=""/>'
        );
      for (r = 0; r < u.length; r++)
        xoso.sethtml("qttd_prize_" + r, u[r], 2e3 * r);
    },
    goToByScroll: function (n) {
      n = n.replace("link", "");
      $("html,body").animate({ scrollTop: $("#" + n).offset().top }, 2e3);
    },
    getTinhtheoNgay: function (n) {
      var t = xosoconfig.rootPath + "tinh-theo-ngay-ajax.html",
        i = { strDay: n, lotteriesId: 0 };
      $.xosoAjax(t, "Get", i, function (n) {
        $("#tinhheader").html(n);
      });
    },
    getCaptcha: function (n) {
      var t = "",
        i = this.generateUUID();
      switch (n) {
        case 1:
          t = xosoconfig.rootPath + "xsdp-captcha.html?id=" + i;
          break;
        case 2:
          t = xosoconfig.rootPath + "register-captcha.html?id=" + i;
          break;
        default:
          t = xosoconfig.rootPath + "retrivepassword-captcha.html?id=" + i;
      }
      return $("#CaptchaImg" + n).attr("src", t), !1;
    },
    generateUUID: function () {
      var n = new Date().getTime();
      return (
        window.performance &&
          typeof window.performance.now == "function" &&
          (n += performance.now()),
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
          var i = (n + Math.random() * 16) % 16 | 0;
          return (
            (n = Math.floor(n / 16)), (t == "x" ? i : (i & 3) | 8).toString(16)
          );
        })
      );
    },
    loteryloadmore: function (n) {
      var t = { pageIndex: xoso.variables.currentPage },
        i = $(".loadmoreResult");
      $.xosoAjax(n, "Get", t, function (n) {
        n.length > 0
          ? (xoso.variables.currentPage++, i.append(n))
          : $(".btn-viewmore").hide();
      });
    },
    SoKetQua: {
      variables: { page: 1 },
      loteryloadmore: function () {
        var r = xosoconfig.rootPath + "XSDPAjax/AjaxLoadMoreSoKetQua",
          u = $("#ddLotteries option:selected").val(),
          f = $("#ddLotteries option:selected").text(),
          n = $("#ddlRollingNumbers").val(),
          t,
          i;
        n == 0 && (n = 30);
        t = {
          lotteryId: u,
          rollNumber: n,
          pageIndex: xoso.SoKetQua.variables.page,
        };
        i = $("#ajaxcontent");
        $.xosoAjax(r, "Get", t, function (n) {
          n.length > 0
            ? (xoso.SoKetQua.variables.page++, i.append(n))
            : $(".btn-readmore").hide();
        });
      },
      loteryload: function () {
        var r = xosoconfig.rootPath + "XSDPAjax/AjaxLoadMoreSoKetQua",
          u = $("#ddLotteries option:selected").val(),
          f = $("#ddLotteries option:selected").text(),
          n = $("#ddlRollingNumbers").val(),
          t,
          i;
        n == 0 && (n = 30);
        t = { lotteryId: u, rollNumber: n, pageIndex: 0 };
        i = $("#ajaxcontent");
        $.xosoAjax(r, "Get", t, function (n) {
          n.length > 0
            ? ((xoso.SoKetQua.variables.page = 1),
              i.html(n),
              $("#titlemain").html("Sá»• káº¿t quáº£ xá»• sá»‘ " + f))
            : $(".btn-readmore").hide();
        });
      },
    },
    Xsmt: {
      variables: { page: 1 },
      loterytheothuloadmore: function (n) {
        var t = xosoconfig.rootPath + "Xsmb/GetMoreMBTheoThu",
          i = { pageIndex: xoso.Xsmb.variables.page, dayofWeek: n },
          r = $(".ajaxContentContainer");
        $.xosoAjax(t, "Get", i, function (n) {
          n.length > 0
            ? (xoso.Xsmb.variables.page++, r.append(n))
            : $(".load-more").hide();
        });
      },
    },
    Xsmn: {
      variables: { page: 1 },
      loteryloadmore: function (n) {
        var t = { pageIndex: xoso.Xsmn.variables.page },
          i = $(".lotteryMnResult");
        $.xosoAjax(n, "Get", t, function (n) {
          n.length > 0
            ? (xoso.Xsmn.variables.page++, i.append(n))
            : $(".btn-viewmore").hide();
        });
      },
    },
    Xsmnbydayofweek: {
      variables: { page: 1 },
      loterytheothuloadmore: function (n, t) {
        var i = {
            pageIndex: xoso.Xsmnbydayofweek.variables.page,
            dayofWeek: t,
          },
          r = $(".lotteryMNByDayOfWeekResult");
        $.xosoAjax(n, "Get", i, function (n) {
          n.length > 0
            ? (xoso.Xsmnbydayofweek.variables.page++, r.append(n))
            : $(".btn-viewmore").hide();
        });
      },
    },
    KQDai: {
      variables: { page: 1 },
      loteryloadmore: function (n, t) {
        var i = { lotteryId: t, pageIndex: xoso.KQDai.variables.page },
          r = $(".lotteryResult");
        $.xosoAjax(n, "Get", i, function (n) {
          n.length > 0
            ? (xoso.KQDai.variables.page++, r.append(n))
            : $(".btn-viewmore").hide();
        });
      },
    },
    ThongKe: {
      GroupChange: function () {
        $("#ddLotteries").html("");
        var i = $("#ddlGroups"),
          n = $("#ddLotteries"),
          t = $("#ddlGroups option:selected").val(),
          r = $("#ddLotteries option:selected").val();
        t <= 1
          ? n.append($("<option></option>").val(0).html("Miá»n Báº¯c"))
          : $.ajax({
              url: xosoconfig.rootPath + "Utils/GetAllLotteries",
              type: "Get",
              success: function (i) {
                var r = JSON.parse(i);
                $.each(r, function (i, r) {
                  r.LotteryGroupId == t &&
                    n.append(
                      $("<option></option>")
                        .val(r.LotteryId)
                        .html(r.LotteryName)
                    );
                });
              },
            });
      },
      getHomeReport: function () {
        var r = xosoconfig.rootPath + "XSDPAjax/GetHomeReport",
          u = $("#ddLotteries option:selected").val(),
          f = $("#ddLotteries option:selected").text(),
          e = $("#ddLotteries option:selected").attr("tag"),
          n = $("#ddlRollingNumbers").val(),
          i,
          t;
        n == 0 && (n = 30);
        i = { lotteryId: u, TimeRolled: n };
        t = $("#HomeResult");
        t.html("");
        $.xosoAjax(r, "Get", i, function (n) {
          n.length > 0 && t.html(n);
          $("#titlemain").html(
            "Thá»‘ng kĂª káº¿t quáº£ 2 sá»‘ cuá»‘i Ä‘áº·c biá»‡t XS" +
              e +
              " - xá»• sá»‘ " +
              f
          );
        });
      },
      getThongKeTheoTanSuat: function () {
        var r = xosoconfig.rootPath + "XSDPAjax/AjaxGetTanSuatDB",
          u = $("#ddLotteries option:selected").val(),
          s = $("#ddLotteries option:selected").text(),
          n = $("#ddlRollingNumbers").val(),
          f = $("input:text[name=date]").val(),
          e = $("input[name=TanSuatType]:checked").val(),
          o = $("#ddLotteries option:selected").attr("tag"),
          t,
          i;
        n == 0 && (n = 30);
        t = { lotteryId: u, rollNumber: n, dateview: f, type: e };
        i = $("#content");
        $.xosoAjax(r, "Get", t, function (n) {
          n.length > 0 && i.html(n);
          $(".title-main").html(
            "Báº£ng thá»‘ng kĂª táº§n suáº¥t giáº£i Ä‘áº·c biá»‡t XS" + o
          );
        });
      },
      giaiDacBiet: {
        getReport: function () {
          var n = $("#ddLotteries option:selected").val(),
            t = $("#ddLotteries option:selected").text(),
            i = $("#amplitude").val(),
            r = xosoconfig.rootPath + "thong-ke-giai-db-ajax.html",
            u = { lotteryId: n, lotteryName: t, pageIndex: 0, rowAmount: i },
            f = $("#tkgiaiDB");
          $.xosoAjax(r, "Get", u, function (n) {
            n.length > 0 && f.html(n);
          });
        },
      },
      DayOfWeekChange: function () {
        var n = $("#ddLotteries"),
          t = $("#ddlDayOfWeeks option:selected").val(),
          i = xosoconfig.rootPath + "Utils/GetLotteriesByDayOfWeek",
          r = { dayOfWeek: t };
        $.xosoAjax(i, "Get", r, function (t) {
          t.length > 0 &&
            (n.html($("<option></option>").val(0).html("Miá»n Báº¯c")),
            $.each(t, function (t, i) {
              i.lotteryGroupId > 1 &&
                n.append(
                  $("<option></option>")
                    .val(i.lotteryId)
                    .html(i.lotteryName)
                    .attr("tag", i.lotteryCode)
                );
            }));
        });
      },
      TKLoXien: function () {
        var n = $("#ddLotteries option:selected").val(),
          t = $("#ddlRollingNumbers").val(),
          i = xosoconfig.rootPath + "ThongKeAjax/AjaxThongKeLoXien",
          r = { lotteryId: n, rollNumber: t };
        $.xosoAjax(i, "Get", r, function (n) {
          n.length > 0 && $("#ajaxContentContainer").html(n);
        });
      },
      TKDauDuoiDayOfWeekChange: function () {
        var n = $("#ddLotteries"),
          r = $("#ddlDayOfWeeks option:selected").val(),
          t,
          i;
        n.html($("<option></option>").val("0@@1").html("Miá»n Báº¯c"));
        t = xosoconfig.rootPath + "Utils/GetLotteriesByDayOfWeek";
        i = { dayOfWeek: r };
        $.xosoAjax(t, "Get", i, function (t) {
          var i = JSON.parse(t);
          $.each(i, function (t, i) {
            i.LotteryGroupId > 1 &&
              n.append(
                $("<option></option>")
                  .val(i.LotteryId + "@@" + i.LotteryGroupId)
                  .html(i.LotteryName)
              );
          });
        });
      },
      MNMTDayOfWeekChange: function (n) {
        var t = $("#ddLotteries"),
          i = $("#ddlMNDayOfWeeks option:selected").val(),
          r = xosoconfig.rootPath + "Utils/GetLotteriesByDayOfWeek",
          u = { dayOfWeek: i };
        t.html("");
        $.xosoAjax(r, "Get", u, function (i) {
          var r = JSON.parse(i);
          $.each(r, function (i, r) {
            r.LotteryGroupId == n &&
              t.append(
                $("<option></option>").val(r.LotteryId).html(r.LotteryName)
              );
          });
        });
      },
      MNMTDayOfWeekChangeLotteryCode: function (n) {
        var t = $("#ddLotteries"),
          i = $("#ddlMNDayOfWeeks option:selected").val(),
          r = xosoconfig.rootPath + "Utils/GetLotteriesByDayOfWeek",
          u = { dayOfWeek: i };
        t.html("");
        $.xosoAjax(r, "Get", u, function (i) {
          var r = JSON.parse(i);
          $.each(r, function (i, r) {
            r.LotteryGroupId == n &&
              t.append(
                $("<option></option>")
                  .val(r.LotteryCode.toLowerCase())
                  .html(r.LotteryName)
              );
          });
        });
      },
      thongKeCauTheoTinh: function () {
        var n = $("#ddLotteries option:selected").val();
        window.location = "/tham-khao-xo-so/soi-cau-xo-so-" + n + ".html";
      },
      TKLoKep: function () {
        var n = $("#ddLotteries option:selected").val(),
          t = $("#ddlRollingNumbers").val(),
          i = xosoconfig.rootPath + "ThongKeAjax/AjaxThongKeLoKep",
          r = { lotteryId: n, rollNumber: t };
        $.xosoAjax(i, "Get", r, function (n) {
          n.length > 0 && $("#ajaxContentContainer").html(n);
        });
      },
      articles: {
        variables: { page: 1 },
        loadmore: function (n, t) {
          var i = { catId: t, pageIndex: xoso.articles.variables.page },
            r = $(".loadmoreResult");
          $.xosoAjax(n, "Get", i, function (n) {
            n.length > 0
              ? (xoso.articles.variables.page++, r.append(n))
              : $(".btn-viewmore").hide();
          });
        },
      },
      setPercent: function () {
        for (var t, i = $(".progress").length, n = 1; n <= i; n++)
          (t = parseInt($("#percent-" + n).data("percent"))),
            $("#progress-percent-" + n).width(t + "%");
      },
      scrollToElement: function (n, t) {
        var i = { scrollTop: $(n).offset().top };
        $("html,body").animate(i, "slow", "swing", function () {
          typeof t == "function" && t();
          t = null;
        });
      },
      clickScroll: function (n) {
        window.setTimeout(function () {
          xoso.scrollToElement("#" + n);
        }, 1e3);
      },
      dialog: function (n, t, i, r, u, f) {
        var e =
          n == null
            ? $(
                '<div><p style="padding:15px;">' +
                  (i == null ? "" : i) +
                  "</p></div>"
              )
            : $("#" + n);
        e.dialog({
          title: t == null ? "ThĂ´ng bĂ¡o" : t,
          width: r == null ? 300 : r,
          height: u == null ? 200 : u,
          resizable: !1,
          autoOpen: !0,
          modal: !0,
          responsive: !0,
          buttons: {
            "ÄĂ³ng": function () {
              $(this).dialog("close");
            },
          },
          close: typeof f == "function" ? f : function () {},
        });
      },
    },
  };
$.extend({
  xosoAjax: function (n, t, i, r) {
    var e = $.isFunction(r) ? r : $.noop,
      o = $.isFunction(i)
        ? i
        : function () {
            return i;
          },
      u = $(".load-more > a"),
      f = u.text();
    $.ajax({
      url: n,
      type: t,
      data: o(),
      traditional: !0,
      beforeSend: function () {
        $(".btn-readmore").hide();
        $(".loadmoreimg").show();
        $("button.btn-red").prop("disabled", !0).css("cursor", "wait");
        $(".btn.btn-danger")
          .text("Äang táº£i dá»¯ liá»‡u...")
          .prop("disabled", !0)
          .css("cursor", "wait");
        $(".btn.btn-danger2[data-id=1]")
          .text("Äang táº£i dá»¯ liá»‡u...")
          .prop("disabled", !0)
          .css("cursor", "wait");
        $(".btn.btn-danger3[data-id=1]")
          .text("Äang táº£i dá»¯ liá»‡u...")
          .prop("disabled", !0)
          .css("cursor", "wait");
        u.text("Äang táº£i dá»¯ liá»‡u...")
          .prop("disabled", !0)
          .css("cursor", "wait");
      },
      error: function (n) {
        n.status == 400
          ? alert(n.responseText)
          : alert("QuĂ½ khĂ¡ch vui lĂ²ng thá»­ láº¡i sau.");
        $(".btn-readmore").show();
        $(".loadmoreimg").hide();
        $("button.btn-red").prop("disabled", !1).css("cursor", "default");
        $(".btn.btn-danger")
          .text("Káº¿t quáº£")
          .prop("disabled", !1)
          .css("cursor", "default");
        $(".btn.btn-danger2[data-id=1]")
          .text("Gá»­i")
          .prop("disabled", !1)
          .css("cursor", "default");
        $(".btn.btn-danger3[data-id=1]")
          .text("Xem káº¿t quáº£")
          .prop("disabled", !1)
          .css("cursor", "default");
        u.text(f).prop("disabled", !1).css("cursor", "default");
      },
      success: function (n) {
        window.setTimeout(function () {
          e(n);
        }, 10);
        $(".btn-readmore").show();
        $(".loadmoreimg").hide();
        $("button.btn-red").prop("disabled", !1).css("cursor", "default");
        $(".btn.btn-danger")
          .text("Káº¿t quáº£")
          .prop("disabled", !1)
          .css("cursor", "default");
        $(".btn.btn-danger2[data-id=1]")
          .text("Gá»­i")
          .prop("disabled", !1)
          .css("cursor", "default");
        $(".btn.btn-danger3[data-id=1]")
          .text("Xem káº¿t quáº£")
          .prop("disabled", !1)
          .css("cursor", "default");
        u.text(f).prop("disabled", !1).css("cursor", "default");
      },
    });
  },
});
$.fn.preloader = function (n) {
  var s = {
      delay: 50,
      preload_parent: "a",
      check_timer: 300,
      ondone: function () {},
      oneachload: function () {},
      fadein: 300,
    },
    n = $.extend(s, n),
    h = $(this),
    i = h.find("img").css({ visibility: "hidden", opacity: 0 }),
    r,
    o = 0,
    t = 0,
    u = [],
    f = n.delay,
    c = function () {
      r = setInterval(function () {
        if (o >= u.length) {
          clearInterval(r);
          n.ondone();
          return;
        }
        for (t = 0; t < i.length; t++)
          if (i[t].complete == !0) {
            if (u[t] == !1) {
              u[t] = !0;
              n.oneachload(i[t]);
              o++;
              f = f + n.delay;
            }
            $(i[t])
              .css("visibility", "visible")
              .delay(f)
              .animate({ opacity: 1 }, n.fadein, function () {
                $(this).parent().removeClass("preloader");
              });
          }
      }, n.check_timer);
    },
    e;
  i.each(function () {
    $(this).parent(n.preload_parent).length == 0
      ? $(this).wrap("<a class='preloader' />")
      : $(this).parent().addClass("preloader");
    u[t++] = !1;
  });
  i = $.makeArray(i);
  e = jQuery("<img />", {
    id: "loadingicon",
    src: "/Content/images/icon_loading_item.gif",
  })
    .hide()
    .appendTo("body");
  r = setInterval(function () {
    if (e[0].complete == !0) {
      clearInterval(r);
      c();
      e.remove();
      return;
    }
  }, 100);
};
pageIndex = pageIndex || 1;
