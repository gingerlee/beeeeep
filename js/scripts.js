// Business Logic
var counter = function(inputNumber) {
  debugger;
  var numList = [];
  for (var index = 0; index <= inputNumber; index++)
    numList.push(index);
    var string = numList.toString().split("");
    return string;
}

var translator = function(string) {
  var newString = [];
  for (var i = 0; i <= string.length; i++) {
    if (i === "1") {
      string[i] = "boop";
    } else if (i === "0") {
      string[i] = "beep";
    } else (i % 3 === "0") {
      string[i] = "Sorry";
    }
      newString.push(i);
      return newString;
  }
}


// User Interface Logic
$(document).ready(function() {
  $(".jumbotron a").click(function() {
    $(".survey").show();
  });

  $("form#translator").submit(function(event) {
    event.preventDefault();
    var inputNum = parseInt($("input#inputNumber").val());

    var result = translator(counter(inputNum));


    $("#listarea").empty().text(finalResult);
  });
});
