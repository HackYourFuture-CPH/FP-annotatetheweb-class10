
// router setup
const express = require("express");
const router = express.Router({ mergeParams: true });

// controllers
const AnnotaterController = require("../controllers/annotater.controller");

// ENDPOINT: /api/users/ :GET to get all users
router.get("/", (req, res, next) => {
  
  let { limit, offset, orderBy, order } = req.query;

  AnnotaterController
    .getAnnotater(limit, offset, orderBy, order)
    .then(result => res.json(result))
    .catch(next);
});
router.get ('/:annotation_id', (req, res, next) => {
    AnnotaterController
      .getAnnotationById (req.params.annotation_id)
      .then (result => res.json (result))
      .catch (next);
  });

module.exports = router;