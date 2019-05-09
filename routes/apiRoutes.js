var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/trip", function(req, res) {
    db.Trip.findAll({}).then(function(tripData) {
      res.json(tripData);
    });
  });

  // Create a new example

  app.post("/api/trip", function(req, res) {
    // var info = req.body;
    db.Trip.create({
      tripLocation: req.body.tripLocation,
      tripDate: req.body.tripDate,
      description: req.body.description,
      boat: req.body.boat,
      numPeople: req.body.numPeople,
      tripCost: req.body.tripCost,
      image: req.body.image,
    }).then(function(tripData) {
      res.json(tripData);
    });
  });

  // Delete an example by id
  app.delete("/api/trip/:id", function(req, res) {
    db.Trip.destroy({ where: { id: req.params.id } }).then(function(tripData) {
      res.json(tripData);
    });
  });
};
