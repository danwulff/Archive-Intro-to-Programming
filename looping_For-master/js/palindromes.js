jQuery(document).ready(function() {

  $("#input").submit(function(event) {
    var string = $("#palindrome").val();
    var isPalindrome = true;


    for (var index = 0; index < (string.length)/2; index +=1) {
      if (string[index] === string[(string.length - 1) - index]) {}
      else {isPalindrome = false;}
    }

    alert(isPalindrome);

    event.preventDefault();
  });
});
