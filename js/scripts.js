// buisiness logic
var Places = function(location, landmark, time, notes){
    this.newLocation = location;
    this.newLandmark = landmark;
    this.newTime = time;
    this.newNotes = notes;
};

var Places.prototype.everything = function(Places){

};





// user interface logic
$(document).ready(function(){
  $("form#blank").submit(function(event){
    event.preventDefault();

    var inputLocation = $("input#userLocation").val();
    var inputLandmark = $("input#userLandmark").val();
    var inputTimeOfYear = $("input#userTime").val();
    var inputNotes = $("input#userNotes").val();



    $("input#userLocation").val("");
    $("input#userLandmark").val("");
    $("input#userTime").val("");
    $("input#userNotes").val("");
  });





});
