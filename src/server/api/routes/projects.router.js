'use strict';

// router setup
const express = require ('express');
const router = express.Router ({mergeParams: true});

// controllers
const projectsController = require ('../controllers/projects.controller');

// ENDPOINT: /api/projects/ :GET to get all projects
router.get ('/', (req, res, next) => {
  let {limit, offset, orderBy, order} = req.query;

  projectsController
    .getProjects (limit, offset, orderBy, order)
    .then (result => res.json (result))
    .catch (next);
});

// ENDPOINT: /api/projects/:id get user by id
router.get ('/:project_id', (req, res, next) => {
  console.log(req.params);
  projectsController
    .getProjectById (req.params.project_id)
    .then (result => res.json (result))
    .catch (next);
});

// ENDPOINT /api/projects/user/:user_id
router.get('/user/:user_id', (req, res, next) => {
    projectsController
    .getProjectByUserId (req.params.user_id)
    .then(result => res.json(result))
    .catch (next);
})

module.exports = router;
