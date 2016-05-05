$(document).ready(function() {
  $("#inputs").submit(function(event) {
    event.preventDefault();

    var favorites = [$("#input1").val(), $("#input2").val(), $("#input3").val()];
    var newFavorites = [];
    newFavorites.push(favorites[1]);
    newFavorites.push(favorites[0]);
    newFavorites.push(favorites[2]);

    $("#list").append("<li>" + newFavorites[0] + "</li>");
    $("#list").append("<li>" + newFavorites[1] + "</li>");
    $("#list").append("<li>" + newFavorites[2] + "</li>");
  });
});
