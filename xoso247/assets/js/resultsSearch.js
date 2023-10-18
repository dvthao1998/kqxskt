$(document).ready(function () {
  let text = $("#showDate");
  let date = $("input#dateRangeTo_k98pru0");
  let date_new = "";

  date.on("change", function (e) {
    let split = date.val().split("-");
    text.text((date_new = split[2] + "/" + split[1] + "/" + split[0]));
  });

  let textTo = $(".showDate2");
  let dateTo = $("input.dateRange2");
  let date_newTo = "";

  dateTo.on("change", function (e) {
    let split = dateTo.val().split("-");
    textTo.text((date_newTo = split[2] + "/" + split[1] + "/" + split[0]));
  });
});
