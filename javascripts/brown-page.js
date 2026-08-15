$(function () {
  var cards = Brown.initialize(5, 31);
  var source = $("#cards-template").html();
  var template = Handlebars.compile(source);
  $("#content-placeholder").html(template({ cards: cards }));

  $("#guess-trigger").click(function () {
    var number = getChosenNumber();
    if (number === 0) {
      $("#brown-result").text("Choose at least one list first.");
      return;
    }

    $("#brown-result").text("Your number is " + number + ".");
    $(".reveal-content").prop("hidden", false);
  });

  function getChosenNumber() {
    var sum = 0;
    $("input:checked").each(function () {
      sum += parseInt($(this).val(), 10);
    });
    return sum;
  }
});
