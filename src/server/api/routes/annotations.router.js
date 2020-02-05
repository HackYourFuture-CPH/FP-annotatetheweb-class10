// router setup
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const annotationsController = require('../controllers/annotations.controller');

// ENDPOINT: /api/annotations/ :POST
router.post('/', (req, res) => {
  annotationsController
    .createAnnotation(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res
        .status(400)
        .send('Bad request')
        .end();
    });
});

// ENDPOINT: /api/annotations/ :GET
router.get('/', (req, res, next) => {
  annotationsController
    .getAnnotations(req)
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/annotations/:annotation_id :GET
router.get('/:annotation_id', (req, res, next) => {
  annotationsController
    .getAnnotationsById(req.params.annotation_id)
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/annotations/screenshot/:fk_screenshot_id :GET to get all annotations added to a specific screenshot
router.get('/screenshot/:fk_screenshot_id', (req, res, next) => {
  annotationsController
    .getAnnotationsForScreenshot(req.params.fk_screenshot_id)
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/annotations/:annotation_id :DELETE
router.delete('/:annotation_id', (req, res, next) => {
  annotationsController
    .deleteAnnotations(req.params.annotation_id)
    .then((result) => res.json({ success: result === 1 }))
    .catch(next);
});

// ENDPOINT: /api/annotations/:annotation_id :PATCH
router.patch('/:annotation_id', (req, res, next) => {
  annotationsController
    .editAnnotation(req.params.annotation_id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
