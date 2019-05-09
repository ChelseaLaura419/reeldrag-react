$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newTrip = {
      tripLocation: $("#tripLocation").val().trim(),
      tripDate: $("#tripDate").val().trim(),
      description: $("#description").val().trim(),
      boat: $("#boat").val().trim(),
      numPeople: $("#numPeople").val().trim(),
      tripCost: $("#tripCost").val().trim(),
      image: $("#image").val().trim(),
    };

    $.post("/api/new", newTrip)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
    });

  // empty each input box by replacing the value with an empty string
  $("#tripLocation").val("");
  $("#tripDate").val("");
  $("#description").val("");
  $("#boat").val("");
  $("#numPeople").val("");
  $("#tripCost").val("");
  $("#image").val("");

});