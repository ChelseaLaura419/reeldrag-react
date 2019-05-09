var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/charter/:id", function(req, res) {
    db.Charter.findOne().then(function(charterData) {
      res.json(charterData);
    });
  });

app.post("/api/charter", function(req, res) {
    // var info = req.body;
    db.Charter.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      location: req.body.location,
      date: req.body.date,
      adults: req.body.adults,
      children: req.body.children
    }).then(function(charterData) {
      res.json(charterData);
      // make a query string with the charterData
      // pass query string to redirect
      res.redirect("/confirmation");
      
    });
  });
};