// router setup
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const screenshotsController = require('../controllers/screenshots.controller');

// ENDPOINT: /api/screenshots/ :GET to get all screenshots
router.get('/', (req, res, next) => {
  const { limit, offset, orderBy, order } = req.query;

  screenshotsController
    .getScreenshots(limit, offset, orderBy, order)
    .then((result) => res.json(result))
    .catch(next);
});

// Get screenshot by screenshot key
router.get('/:key', (req, res, next) => {
  screenshotsController
    .getScreenshotByKey(req.params.key)
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/screenshots/ :POST
router.post('/', (req, res) => {
  screenshotsController
    .createScreenshot(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .send('Bad request')
        .end();
    });
});

module.exports = router;
