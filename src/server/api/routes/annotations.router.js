"use strict";

const express = require("express");
const router = express.Router({ mergeParams: true });

const annotationsController = require("../controllers/annotations.controller");

//ENDPOINT:api/annotation/ :GET

router.get("/", (req, res, next) => {
  annotationsController
    .getAnnotations(req)
    .then(result => res.json(result))
    .catch(next);
});

//ENDPOINT:api/annotation/:id :GET specific
router.get("/:id", (req, res, next) => {
  annotationsController
    .getAnnotationById(req.params.id)
    .then(result => res.json(result))
    .catch(next);
});

module.exports = router;
