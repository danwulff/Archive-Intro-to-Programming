
jQuery(document).ready(function() {
  var values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
  var suits = ["clubs", "hearts", "spades", "diamonds"];

  var deck = [];

suits.forEach(function (suit) {
     values.forEach(function(value) {
      deck.push(value + " of " + suit);
    });
  });

  deck.forEach(function(card) {
      $("#deck").append("<li>" + card + "</li>");
  });
});
