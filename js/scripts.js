// Business Logic
var counter = function(input) {
  debugger;
  var numList = [];
  for (var index = 0; index <= input; index++)
    numList.push(index);
    var stringArray = numList.toString().split("");
    return stringArray;
}

var translate = function(input) {
  var newString = [];
  for (var i = 0; i <= input.length; i++) {
    if (i === 1) {
      string[i] = "boop";
    } else if (i === 0) {
      string[i] = "beep";
    } else if ((i % 3) === 0) {
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

    var result = translate(counter(inputNum));


    $("#listarea").empty().text(result);
  });
});
