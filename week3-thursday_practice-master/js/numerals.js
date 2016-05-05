// business logic

//M 1000
//D 500
//C 100
//L 50
//X 10
//V 5
//I 1

var numeralCalc = function(number) {
  var tempNumber = number;
  var symbols = ["I", "V", "X", "L", "C", "D", "M"];
  var numeral = "";

  //create numerals
  while (tempNumber > 0) {
    if (tempNumber >= 1000) {
      numeral += "M";
      tempNumber -= 1000;
    }
    else if (tempNumber >= 500) {
      numeral += "D";
      tempNumber -= 500;
    }
    else if (tempNumber >= 100) {
      numeral += "C";
      tempNumber -= 100;
    }
    else if (tempNumber >= 50) {
      numeral += "L";
      tempNumber -= 50;
    }
    else if (tempNumber >= 10) {
      numeral += "X";
      tempNumber -= 10;
    }
    else if (tempNumber >= 5) {
      numeral += "V";
      tempNumber -= 5;
    }
    else if (tempNumber >= 1) {
      numeral += "I";
      tempNumber -= 1;
    }
  }

  //check for 4 of the same symbols in a row
  numeral = numeral.split("");

  for (index = 3; index < numeral.length; index++) {
    //if 4 in a row
    if (numeral[index - 3] === numeral[index - 2] && numeral[index - 2] === numeral[index - 1] && numeral[index - 1] === numeral[index]) {
      //save temprorary numberal, to know what we've changed
      var tempNumeral = numeral[index];
      var preNumeral = numeral[index - 4];

      //first 4 characters or preNumeral is a multiple of 10
      if (1 !== (symbols.indexOf(preNumeral) - symbols.indexOf(tempNumeral)) || preNumeral === undefined) {
        //remove 4 characters
        numeral.splice(index - 3, 3);
        // alert("Remove: " + nume ral);

        //based on symbols removed, replace with symbol one higher
        numeral.splice(index - 2, 0, symbols[(symbols.indexOf(tempNumeral) + 1)]);
      }
      //if preNumeral is multiple of 5
      else {
        //based on symbols removed, replace with high symbol values
        numeral.splice(index + 1, 0, symbols[(symbols.indexOf(tempNumeral) + 2)]);

        //remove 4 characters
        numeral.splice(index - 4, 4);
      }
    }
  }

  //join array back together
  numeral = numeral.join("");

  return numeral;
}

// user interface logic
$(document).ready(function(){
  $("#input").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());

    var numeral = numeralCalc(number);

    $(".decimal").text(numeral);

    $("#result").show();
  });
});
