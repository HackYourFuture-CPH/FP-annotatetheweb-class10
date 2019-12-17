'use strict';

// router setup
const express = require ('express');
const router = express.Router ({mergeParams: true});

// controllers
const screenshotsController = require ('../controllers/screenshots.controller');

// ENDPOINT: /api/screenshots/ :GET to get all screenshots
router.get ('/', (req, res, next) => {
  let {limit, offset, orderBy, order} = req.query;

  screenshotsController
    .getScreenshots (limit, offset, orderBy, order)
    .then (result => res.json (result))
    .catch (next);
});

// Get screenshot by screenshot key
router.get ('/:key', (req, res, next) => {
  screenshotsController
    .getScreenshotByKey (req.params.key)
    .then (result => res.json (result))
    .catch (next);
});

module.exports = router;