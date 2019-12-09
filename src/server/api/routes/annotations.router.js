"use strict";

// router setup
const express = require("express");
const router = express.Router({ mergeParams: true });

// controllers
const annotationsController = require("../controllers/annotations.controller");

// ENDPOINT: /api/annotations/ :POST
router.post("/", (req, res, next) => {
  annotationsController
    .createAnnotation(req.body)
    .then(result => res.json(result))
    .catch(error => {
      console.log(error);

      res
        .status(400)
        .send("Bad request")
        .end();
    });
});

module.exports = router;
