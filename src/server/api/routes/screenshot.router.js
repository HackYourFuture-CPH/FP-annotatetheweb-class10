"use strict";

// router setup
const express = require("express");
const router = express.Router({ mergeParams: true });

// controllers
const screenshotController = require("../controllers/screenshot.controller");

// ENDPOINT: /api/screenshots/ :POST
router.post("/", (req, res, next) => {
  screenshotController
    .createScreenshot(req.body)
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
