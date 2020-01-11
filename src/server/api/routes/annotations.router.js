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

router.delete('/delete/:annotation_id',(req,res,next)=>{
annotationsController
.deleteAnnotations(req.params.annotation_id)
.then((result) => res.json({success: result === 1}))
.catch(next);
});

// ENDPOINT: /api/annotations/:id :PATCH
router.patch("/:id", (req, res, next) => {
  annotationsController
    .editAnnotation(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(next);
});

module.exports = router;
