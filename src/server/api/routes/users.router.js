<<<<<<< HEAD
=======
"use strict";
>>>>>>> da5ad3bdae26d6b96dc11cabef36eefb31dfa41c

// router setup
const express = require("express");
const router = express.Router({ mergeParams: true });

// controllers
const usersController = require("../controllers/users.controller");

// ENDPOINT: /api/users/ :GET to get all users
router.get("/", (req, res, next) => {
  
  let { limit, offset, orderBy, order } = req.query;

  usersController
    .getUsers(limit, offset, orderBy, order)
    .then(result => res.json(result))
    .catch(next);
});

module.exports = router;