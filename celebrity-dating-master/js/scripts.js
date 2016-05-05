$(document).ready(function() {
  var colorPoints = 0;
  var heightPoints = 0;
  var dddPoints = 0;
  var celebrityPoints = 0;

  $("#inputColor").change(function(){
    var color = ($("#inputColor").val()).toLowerCase();

    if (color === "red") {
      colorPoints = 10;
      $("#color").addClass("has-success"); //hidden bootstrap class to give green border and text for form input
      $("#color").removeClass("has-error"); //hidden bootstrap class to give red border and text for form input
    }
    else if (color === "orange") {
      colorPoints = 8;
      $("#color").addClass("has-success");
      $("#color").removeClass("has-error");
    }
    else if (color === "yellow") {
      colorPoints = 6;
      $("#color").addClass("has-success");
      $("#color").removeClass("has-error");
    }
    else if (color === "green") {
      colorPoints = 4;
      $("#color").addClass("has-success");
      $("#color").removeClass("has-error");
    }
    else if (color === "blue") {
      colorPoints = 2;
      $("#color").addClass("has-success");
      $("#color").removeClass("has-error");
    }
    else if (color === "indigo") {
      colorPoints = 14;
      $("#color").addClass("has-success");
      $("#color").removeClass("has-error");
    }
    else if (color === "violet") {
      colorPoints = 16;
      $("#color").addClass("has-success");
      $("#color").removeClass("has-error");
    }
    else if (color === "") {
      $("#color").removeClass("has-error");
      $("#color").removeClass("has-success");
    }
    else {
      $("#color").addClass("has-error");
    }
  });

  $("#inputHeight").change(function(){
    var height = parseInt($("#inputHeight").val());

    if (height > 30 && height <= 40) {
      heightPoints = height;
      $("#height").removeClass("has-error");
      $("#height").addClass("has-success");
    }
    else if (height > 40 && height <= 50) {
      heightPoints = height;
      $("#height").removeClass("has-error");
      $("#height").addClass("has-success");
    }
    else if (height > 50 && height <= 60) {
      heightPoints = height;
      $("#height").removeClass("has-error");
      $("#height").addClass("has-success");
    }
    else if (height > 60 && height <= 80) {
      heightPoints = height;
      $("#height").removeClass("has-error");
      $("#height").addClass("has-success");
    }
    else if (height === NaN) { //blank input field doesn't return NaN as expected, bug
      $("#height").removeClass("has-error");
      $("#height").removeClass("has-success");
    }
    else {
      $("#height").addClass("has-error");
    }
  });

  $("#inputDo-dump-date").change(function(){
    var ddd = ($("#inputDo-dump-date").val()).toLowerCase();

    if (ddd === "do") {
      dddPoints = 80;
      $("#do-dump-date").addClass("has-success");
      $("#do-dump-date").removeClass("has-error");
    }
    else if (ddd === "dump") {
      dddPoints = 2;
      $("#do-dump-date").addClass("has-success");
      $("#do-dump-date").removeClass("has-error");
    }
    else if (ddd === "date") {
      dddPoints = 20;
      $("#do-dump-date").addClass("has-success");
      $("#do-dump-date").removeClass("has-error");
    }
    else if (ddd === "") {
      $("#do-dump-date").removeClass("has-error");
      $("#do-dump-date").removeClass("has-success");
    }
    else {
      $("#do-dump-date").addClass("has-error");
    }
  });

  $("#submit").click(function() {
    celebrityPoints = colorPoints+heightPoints+dddPoints;

    if (celebrityPoints > 30 && celebrityPoints <= 50) {
      $("#celeb1, #celeb2, #celeb3, #celeb4, #celeb5, #celeb6, #celeb7").hide();
      $("#celeb1").show();

    }
    else if (celebrityPoints > 50 && celebrityPoints <= 70) {
      $("#celeb1, #celeb2, #celeb3, #celeb4, #celeb5, #celeb6, #celeb7").hide();
      $("#celeb2").show();

    }
    else if (celebrityPoints > 70 && celebrityPoints <= 90) {
      $("#celeb1, #celeb2, #celeb3, #celeb4, #celeb5, #celeb6, #celeb7").hide();
      $("#celeb3").show();

    }
    else if (celebrityPoints > 90 && celebrityPoints <= 110) {
      $("#celeb1, #celeb2, #celeb3, #celeb4, #celeb5, #celeb6, #celeb7").hide();
      $("#celeb4").show();
    }

    else if (celebrityPoints > 110 && celebrityPoints <= 130) {
      $("#celeb1, #celeb2, #celeb3, #celeb4, #celeb5, #celeb6, #celeb7").hide();
      $("#celeb5").show();
    }

    else if (celebrityPoints > 130 && celebrityPoints <= 150) {
      $("#celeb1, #celeb2, #celeb3, #celeb4, #celeb5, #celeb6, #celeb7").hide();
      $("#celeb6").show();
    }

    else if (celebrityPoints > 150) {
      $("#celeb1, #celeb2, #celeb3, #celeb4, #celeb5, #celeb6, #celeb7").hide();
      $("#celeb7").show();
    }

  });



});
