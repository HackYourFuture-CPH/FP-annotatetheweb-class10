'use strict';

// router setup
const express = require ('express');
const router = express.Router ({mergeParams: true});

// controllers
const screenshotsController = require ('../controllers/screenshots.controller');

// ENDPOINT: /api/screenshots/ :GET to get all screenshots
router.get ('/', (req, res, next) => {
  // const screenshotId = req.params.id;
  // console.log(screenshotId);
  let {limit, offset, orderBy, order} = req.query;

  screenshotsController
    .getScreenshots (limit, offset, orderBy, order)
    .then (result => res.json (result))
    .catch (next);
});

// Get screenshot by screenshot_id
router.get ('/:screenshot_id', (req, res, next) => {
  screenshotsController
    .getScreenshotById (req.query.screenshot_id)
    .then (result => res.json (result))
    .catch (next);
});

module.exports = router;
