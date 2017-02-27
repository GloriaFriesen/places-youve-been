function Place(location, landmarks, time, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedTime = $("input#time").val();
    var inputtedNotes = $("input#notes").val();

    var newPlace = new Place(inputtedLocation, inputtedLandmarks, inputtedTime, inputtedNotes);

    $("ul#place-list").append("<li><span class='place-link'>" + newPlace.location + "</span></li>");

    $(".place-link").last().click(function() {
      $(".show-place").show();
      $(".show-place h2").text(newPlace.location);
      $(".landmarks").text(newPlace.landmarks);
      $(".time").text(newPlace.time);
      $(".notes").text(newPlace.notes);
    });

    $("input").val("");
  });
});
