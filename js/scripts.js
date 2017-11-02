// Business Logic

var beeper = function(input) {
  if (isNaN(input) === true || input < 1) {
    return alert("Please enter a number.");
  }
  var output = [];
  for (var index = 1; index <= input; index++) {
    if ((index % 3) === 0) {
      output.push("pumpkin");
    } else if ((index % 4) === 0) {
      output.push("spice");
    } else if ((index % 12) === 0) {
      output.push("latte");
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
    var output = beeper(input);

    $("#listarea").empty().text(output);
  });
});
