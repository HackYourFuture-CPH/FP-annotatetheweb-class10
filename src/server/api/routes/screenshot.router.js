"use strict";

// router setup
const express = require("express");
const router = express.Router({ mergeParams: true });

// controllers
const screenshotController = require("../controllers/screenshot.controller");

// ENDPOINT: /api/screenshots/ :GET to get all screenshots
router.get("/", (req, res, next) => {
  let { limit, offset, orderBy, order } = req.query;

  screenshotController
    .getScreenshots(limit, offset, orderBy, order)
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/screenshots/:id :GET to get one screenshot
router.get("/:id", (req, res, next) => {
  screenshotController.getScreenshotById(req.params.id).then(results => {
    // Check if the result is empty
    if (!results.propertyIsEnumerable(0)) {
      res.status(404).send("Record not found");
    } else {
      res.status(200).json(results[0]);
    }
  });
});

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

// ENDPOINT: /api/screenshots/ :PATCH
router.patch("/:id", (req, res, next) => {
  screenshotController
    .editScreenshot(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/screenshots/:id :DELETE
router.delete("/:id", (req, res, next) => {
  screenshotController
    .deleteScreenshot(req.params.id, req)
    .then(result => {
      // If result is equal to 0, then that means the screenshot id does not exist
      if (result === 0) {
        res.status(404).send("The module ID you provided does not exist.");
      } else {
        res.json({ success: true });
      }
    })
    .catch(error => console.log(error));
});

module.exports = router;
