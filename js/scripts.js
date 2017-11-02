// Business Logic

var beeper = function(input) {
  if (isNaN(input) === true || input < 1) {
    return alert("Please enter a number.");
  }

  
// User Interface Logic
$(document).ready(function() {
  $("button").click(function() {
    $(".beeps").show();
  });

  $("form#beep").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#input").val());

    $("#listarea").empty().text(beeper(input));
  });
});
