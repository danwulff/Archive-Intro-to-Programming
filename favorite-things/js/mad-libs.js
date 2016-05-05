$(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var inputs = ["person1", "person2", "animal", "exclamation", "verb"];

    inputs.forEach(function(input) {
      var userInput = $("#" + input).val();
      console.log(userInput);
      $("." + input).text(userInput);
    });
  });
});
