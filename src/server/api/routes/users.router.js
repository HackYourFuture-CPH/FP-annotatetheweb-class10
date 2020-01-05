// router setup
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const usersController = require('../controllers/users.controller');

// ENDPOINT: /api/users/ :GET to get all users
router.get('/', (req, res, next) => {
  const { limit, offset, orderBy, order } = req.query;

  usersController
    .getUsers(limit, offset, orderBy, order)
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/users/:user_id :GET user by user_id
router.get('/:user_id', (req, res, next) => {
  usersController
  .getUserById(req.params.user_id)
  .then((result) => res.json(result))
  .catch(next);
})

module.exports = router;
