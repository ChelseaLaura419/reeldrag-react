var db = require("../models");


module.exports = function(app) {

  app.get("/", function(req, res) {
      res.render("index");
  });

  app.get("/charters", function(req, res) {
      res.render("charters", {
        msg: "Welcome"
      });
  });

  app.get("/fishingbuddies", function(req, res) {
    db.Trip.findAll({
      order: [ [ 'createdAt', 'DESC' ]]
    }).then(function(tripData) {
      res.render("fishing", 
      {
        trips:tripData
      });
    });

  });

  app.get("/confirmation", function(req, res) {
    // get the data off the query string
    // pass the data to the render
    res.render("confirm", {
      msg: "Welcome"
    });
});

  // Render 404 page for any unmatched routes
  app.get("404", function(req, res) {
    res.render("404", {
      msg: "Welcome"
    });
  });
};