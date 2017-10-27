// Business Logic
var counter = function(inputNumber) {
  var numList = [];
  for (var index = 0; index <= inputNumber; index++)
    numList.push(index);
    var string = numList.toString().split("");
    return string;
}


var translator = function(string) {
  var newString = [];
  for (var i = 0; i <= string.length; i++) {
    if (i % 3 === 0) {
      string[i] = "Sorry";
    } else if (i === 1) {
      string[i] = "boop";
    } else if (i === 0) {
      string[i] = "beep";
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
    console.log(inputNum);
    var firstResult = counter(inputNum);
    console.log(firstResult);
    var finalResult = translator(firstResult);
    console.log(finalResult);


    $("#listarea").empty().append(finalResult)
  });
});
