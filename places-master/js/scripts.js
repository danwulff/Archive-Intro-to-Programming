function Place(name, location, landmarks, notes) {
  this.placeName = name;
  this.placeLocation = location;
  this.placeLandmarks = landmarks;
  this.placeNotes = notes;
}

Place.prototype.fullName = function() {
  return this.placeName + ", in " + this.placeLocation;
}

// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmarks = $("input#new-landmarks").val();
    var inputtedNotes = $("input#new-notes").val();

    var newPlace = new Place(inputtedName, inputtedLocation, inputtedLandmarks, inputtedNotes);

    $("ul#places").append("<li><span class='place'>" + newPlace.fullName() + "</span></li>");

    $(".place").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(newPlace.placeName);
      $(".name").text(newPlace.placeName);
      $(".location").text(newPlace.placeLocation);
      $(".landmarks").text(newPlace.placeLandmarks);
      $(".notes").text(newPlace.placeNotes);
    });

    $("input#new-name").val("");
    $("input#new-location").val("");
    $("input#new-landmarks").val("");
    $("input#new-notes").val("");
  });
});
