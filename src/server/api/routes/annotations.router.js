const express = require('express');

const router = express.Router({ mergeParams: true });

const annotationsController = require('../controllers/annotations.controller');

router.get('/', (req, res, next) => {
  annotationsController
    .getAnnotations(req)
    .then((result) => res.json(result))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  annotationsController
    .getAnnotationsById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});
module.exports = router;
