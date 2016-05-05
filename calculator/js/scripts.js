$(document).ready(function() {
  //addition
  var add = function(number1, number2) {
    return number1 + number2;
  };

  var subtract = function(number1, number2) {
    return number1 - number2;
  };

  var multiply = function(number1, number2) {
    return number1 * number2;
  };

  var divide = function(number1, number2) {
    return number1 / number2;
  };

  var bmi = function(weight, height) {
    return weight * .45 / ((height * .025) ^ 2);
  };

  $("#add").click( function() {
    var number1 = parseInt(prompt("Enter a number:"));
    var number2 = parseInt(prompt("Enter another number:"));
    var result = add(number1, number2);
    alert(result);
  });

  $("#subtract").click( function() {
    var number1 = parseInt(prompt("Enter a number:"));
    var number2 = parseInt(prompt("Enter another number:"));
    var result = subtract(number1, number2);
    alert(result);
  });

  $("#multiply").click( function() {
    var number1 = parseInt(prompt("Enter a number:"));
    var number2 = parseInt(prompt("Enter another number:"));
    var result = multiply(number1, number2);
    alert(result);
  });

  $("#divide").click( function() {
    var number1 = parseInt(prompt("Enter a number:"));
    var number2 = parseInt(prompt("Enter another number:"));
    var result = divide(number1, number2);
    alert(result);
  });

  $("#bmi").click( function() {
    var number1 = parseInt(prompt("Enter a weight in pounds:"));
    var number2 = parseInt(prompt("Enter height in inches:"));
    var result = bmi(number1, number2);
    alert(result);
  });

  $("h1").click(function() {
    alert("This is a header.");
  });
});
