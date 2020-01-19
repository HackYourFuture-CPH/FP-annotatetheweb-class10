// router setup
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const commentsController = require('../controllers/comments.controller');

// ENDPOINT: /api/comments/ :POST to create new comment for an annotation
router.post('/', (req, res) => {
  commentsController
    .createComment(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch(() => {
      res
        .status(400)
        .send('Bad request')
        .end();
    });
});

// ENDPOINT: /api/comments/annotation/:fk_annotation_id :GET to get all comments added to a specific annotation
router.get('/annotation/:fk_annotations_id', (req, res, next) => {
  commentsController
    .getCommentsForAnnotation(req.params.fk_annotations_id)
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/comments/:comment_id :PUT to update comment for an annotation
router.put('/:comment_id', (req, res, next) => {
  commentsController
    .updateCommentById(req.params.comment_id, req.body)
    .then((result) => res.json({ success: result === 1 }))
    .catch(next);
});

// ENDPOINT: /api/comments/:comment_id :DELETE to delete comment for an annotation
router.delete('/:comment_id', (req, res, next) => {
  commentsController
    .deleteCommentById(req.params.comment_id)
    .then((result) => res.json({ success: result === 1 }))
    .catch(next);
});

module.exports = router;
