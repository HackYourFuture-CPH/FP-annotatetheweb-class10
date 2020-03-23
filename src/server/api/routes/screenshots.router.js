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

// Create screenshot
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

// Get screenshot_key by screenshot_id
// ENDPOINT: /api/screenshots/screenshot_id
router.get('/screenshot_id/:screenshot_id', (req, res, next) => {
  screenshotsController
    .getScreenshotKeyByScreenshotId(req.params.screenshot_id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
