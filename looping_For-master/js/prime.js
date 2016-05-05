jQuery(document).ready(function() {

  $("#input").submit(function(event) {
    var list = [];
    var number = parseInt($("#prime").val());

    //filled the array
    for (var index = 2; index <= number; index += 1) {
      //list[index - 2] = index;
      list.push(index);
    }

    //for loop for changing prime
    for (var index = 0; index < list.length; index += 1) {
      prime = list[index];

      //loop for walking through list
      for (var index2 = prime; index2 < list.length; index2 += 1) {
         //figure out if list[index2] is divisble by prime (look for whole numbers)

            //if true, remove from list
            if ( (list[index2]/prime) % 1 === 0) {
              //remove from list
              list.splice(index2, 1)

              //decrement index2
              index2 -= 1;
            }
            else {
              //continue through list (do nothing here)
            }
      }
    }


    console.log(list);

    event.preventDefault();
  });
});
