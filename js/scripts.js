// Business Logic
var counter = function(input) {
  var numList = [];
  for (var index = 0; index <= input; index++)
    numList.push(index);
    return numList;
}
// if (index % 3 === 0) {
//   numList[index] = "Sorry";
// } else if (index === 1) {
//   numList[index] = "boop";
// } else (index === 0) {
//   numList[index] = "beep";
// }





// User Interface Logic
$(document).ready(function() {
  $(".jumbotron a").click(function() {
    $(".survey").show();
  });
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var inputNum = parseInt($("input#inputNumber").val());
    var result = counter(inputNum)


    $("#listarea").empty().append(result)
  });
});
