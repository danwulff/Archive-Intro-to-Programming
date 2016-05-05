$(document).ready(function() {

  $("#submit").click(function() {
    //get variable values for all three sides of triangle
    var side1 = parseInt($("#inputSide1").val());
    var side2 = parseInt($("#inputSide2").val());
    var side3 = parseInt($("#inputSide3").val());

    if ((side1+side2) <= side3 || (side1+side3) <= side2 || (side2+side3) <= side1) {
      alert("NOT a triangle, you fool!!");
    }

    else if (side1===side2 && side1===side3 && side2===side3) {
      alert("equilateral triangle");
    }

    else if (side1===side2 || side1===side3 || side2===side3) {
      alert("isosceles triangle");
    }

    else if (side1!==side2 && side1!==side3 && side2!==side3) {
      alert("scalene triangle");
    }
  });

});
