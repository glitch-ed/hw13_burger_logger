const express = require("express");

const router = express.Router();

const burger = require("../models/burgers");


router.get("/", function(req, res) {
  burger.all(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(req.body.burger_name, function(resulst) {
    res.json({id: result.insertId});
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(results) {
     res.sendStatus(200);
  })
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  
  console.log("condition", condition);

  burger.delete(condition, function(result) {
      if (result.changedRows === 0) {
          return res.status(404).end();
      } else {
          res.status(200).end();
      }     
  });
});

module.exports = router;
