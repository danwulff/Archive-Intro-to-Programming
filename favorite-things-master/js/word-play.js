jQuery(document).ready(function() {

  function isBigEnough(word) {
    return word.length >= 3;
  }
  var sentence = [];
  var newSentence = [];

  $("#listInput form").submit(function(event) {
    event.preventDefault();
    //split sentence into an array
    sentence = $("#input").val().split(" ");
    //loop to create new array with 3 letter words or bigger
    // sentence.forEach(function(word) {
    //   if (word.length >= 3) {
    //     newSentence.push(word);
    //   }
    // });
    //filter array to words lpnger or equal to three letters
    newSentence = sentence.filter(isBigEnough);

    //reverse the order of the array
    newSentence.reverse();
    //back into string and print
    $("#newSentence").append(newSentence.join(" "));
  });
});
