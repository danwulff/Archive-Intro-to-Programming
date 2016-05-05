jQuery(document).ready(function() {

  $("#input").submit(function(event) {

    var number = parseInt($("#factorial_of").val());
    var factorial = 1;

    for(index = number; index > 0; index -= 1) {
      factorial *= index;
      // The factorial 1 is multiplying by each number as the index decreases (ie from 5 to 4 to 3...)
    }
    $("#output").empty();
    $("#output").append("Here's your factorial:" + factorial);

      event.preventDefault();

  });
});
