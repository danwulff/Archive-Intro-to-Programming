$(document).ready(function(){

  $("#voters").hide();
  $("#non-voters").hide();


  $("#submit").click(function(event) {
      var age = parseInt($("#age").val());

      if (age>= 18) {
        $("#voters").show();
        $("#non-voters").hide();
      }
      else {
        $("#non-voters").show();
        $("#voters").hide();
      }
    event.preventDefault();
  });

});
