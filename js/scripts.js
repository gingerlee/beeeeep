// Business Logic

var beeper = function(input) {
  if (isNaN(input) === true || input < 1) {
    return alert("Please enter a number.");
  }

  var output = [];
  for (var index = 1; index <= input; index ++) {
    if ((index % 3) === 0) {
      output.push("I'm sorry Dave, I'm afraid I can't do that.");
    } else if (index.toString().match(/0/g)) {
      output.push("Beep");
    } else if (index.toString().match(/1/g)) {
      output.push("Boop");
    } else {
      output.push(index);
    }
  }
  return output;
};

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
