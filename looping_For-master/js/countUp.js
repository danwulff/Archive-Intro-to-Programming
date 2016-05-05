jQuery(document).ready(function() {

  $("#Inputs").submit(function(event) {

    //save inputs to variables
    var count_to = parseInt($("#countTo").val());
    var count_by = parseInt($("#countBy").val());
    var value = 0;

    //use else if statements we want to skip rest of the input checks/alerts (the user, if they make multiple input mistakes, will then only see an alert for whichever mistake they make first.  When they fix that, they'll get another alert for the next thing wrong.)
    //use individual if statments if we do not want to skip any checks/alerts (the user in this case would get multiple alerts at once.)
    if (isNaN(count_to)) {
      alert("Please try entering a number into 'Count to: '");
    }
    else if (isNaN(count_by)) {
      alert("Please try entering a number into 'Count by: '");
    }
    else if (count_to < 0 || count_by < 0) {
      alert("You can't use negative numbers!");
    }
    else if (count_to < count_by) {
      alert("'Count to: ' must be greater than 'Count by: '");
    }

    console.log("count to: " + count_to);
    console.log("count by: " + count_by);

    /*//for loop to count by increments
    for (var index = 0; index < (count_to/count_by); index +=1) {
      //do math and print output
      value += count_by;  // value = value + count_by
      $("#Output").append(value + ", ")
    }
    //end for*/

// OR.......this would also work:
    //for loop to count by increments
    for (var index = count_by; index <= count_to; index += count_by) {
      //do math and print output
      $("#Output").append(index + ", ")
    }
    //end for

    event.preventDefault();
  });
});
