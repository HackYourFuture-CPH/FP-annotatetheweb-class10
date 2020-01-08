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

// ENDPOINT: /api/users/:user_id :GET to get user by user_id
router.get('/:user_id', (req, res, next) => {
  usersController
    .getUserById(req.params.user_id)
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/users/ :POST to create new user
router.post('/', (req, res, next) => {
  usersController
    .createUser(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/users/:user_id :DELETE to delete a user by id
router.delete('/:user_id', (req, res, next) => {
  usersController
    .deleteUserById(req.params.user_id)
    .then((result) => res.json({ success: result === 1 }))
    .catch(next);
});

module.exports = router;
