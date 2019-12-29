'use strict';

// router setup
const express = require('express');
const router = express.Router({ mergeParams: true });

// controllers
const commentsController = require('../controllers/comments.controller');

// ENDPOINT: /api/comments/annotation/:fk_annotation_id :GET to get all comments added to a specific annotation
router.get('/annotation/:fk_annotations_id', (req, res, next) => {
  commentsController
    .getCommentsForAnnotation(req.params.fk_annotations_id)
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/comments/:comment_id :PUT update comment for an annotation
router.put('/:comment_id', (req, res, next) => {
  commentsController
    .updateComment(req.params.comment_id, req.body)
    .then((result) => res.json({ success: result === 1 }))
    .catch(next);
});

module.exports = router;
