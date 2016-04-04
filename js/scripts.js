// buisiness logic
var Places = function(location, landmark, time, notes){
    this.newLocation = location;
    this.newLandmark = landmark;
    this.newTime = time;
    this.newNotes = notes;
};

// user interface logic
$(document).ready(function(){
  $("form#blank").submit(function(event){
    event.preventDefault();

    var inputLocation = $("input#userLocation").val();
    var inputLandmark = $("input#userLandmark").val();
    var inputTimeOfYear = $("input#userTime").val();
    var inputNotes = $("input#userNotes").val();

    var newPlaces = new Places(inputLocation, inputLandmark, inputTimeOfYear, inputNotes);

    $("#location-list").append("<li><span class='result-location'>"+ "Location: " + newPlaces.newLocation +"</span></li>");

    $(".result-location").last().click(function(){
      $("#results").show();
      $(".result-landmark").text(newPlaces.newLandmark);
      $(".result-time").text(newPlaces.newTime);
      $(".result-note").text(newPlaces.newNotes);
    });

    $("input#userLocation").val("");
    $("input#userLandmark").val("");
    $("input#userTime").val("");
    $("input#userNotes").val("");
  });
});
