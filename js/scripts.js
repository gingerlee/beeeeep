// Business Logic
var counter = function(input) {
  var numList = [];
  for (var index = 0; index <= input; index++)
    numList.push(index);
    return numList;

}



// User Interface Logic
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
  });
});
