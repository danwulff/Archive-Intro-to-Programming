$(document).ready(function() {
  event.preventDefault();
  var inputs = ["chocolate", "vanilla", "mint", "strawberry"];

  favorites.forEach(function(favorite) {
    $("#list").append("<li>" + favorite + "</li>");
  });
});
