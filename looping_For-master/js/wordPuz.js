jQuery(document).ready(function() {

  $("#input").submit(function(event) {
    var string = $("#string").val();
    var newString = "";

    for (var index = 0; index < string.length; index += 1) {
      if (string.charAt(index) === "a" || string.charAt(index) === "e" || string.charAt(index) === "i" || string.charAt(index) === "o" || string.charAt(index) === "u") {
        newString += "-";
      }
      else {
        newString += string.charAt(index);
      }
    }
    $("#output").empty();
    $("#output").append("Here's your puzzled sentence:<br>" + newString);


    // The following jQuery statement will change whatever is in the tag (the id in this case) to that value (in this case clear).  We used this to hide the sentence after the user submitted:
    $("#string").val("");


    event.preventDefault();
  });
});
