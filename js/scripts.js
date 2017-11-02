// Business Logic

var beeper = function(input) {
  if (isNaN(input) === true || input < 1) {
    return alert("Please enter a number.");
  }
  var output = [];
  for (index = 0; index >= input; index++)
  if ((input % 12) === 0) {
    output.push("latte");
  } else if ((input % 3) === 0) {
    output.push("pumpkin");
  }  else if ((input % 4) === 0) {
    output.push("spice");
  }
  return output;
  console.log(output);
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
