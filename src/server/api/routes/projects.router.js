// router setup
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const projectsController = require('../controllers/projects.controller');

// ENDPOINT: :GET /api/projects/:id - Get a project by id
router.get('/:project_id', (req, res, next) => {
  projectsController
    .getProjectById(req.params.project_id)
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: :GET /api/projects/user/:fk_user_id - Get projects that belong to a specific user_id
router.get('/user/:fk_user_id', (req, res, next) => {
  projectsController
    .getProjectsByUserId(req.params.fk_user_id)
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: :PUT /api/projects/:project_id - Update project
router.put('/:project_id', (req, res, next) => {
  projectsController
    .updateProject(req.params.project_id, req.body)
    .then((result) => res.json({ success: result === 1 }))
    .catch(next);
});

// ENDPOINT: :POST api/projects/ - Create new project
router.post('/', (req, res, next) => {
  projectsController
    .createProject(req.body)
    .then((result) => res.json({ successful: true, project_id: result }))
    .catch(next);
});

// ENDPOINT: :DELETE api/projects/:project_id - Delete project with matching project_id
router.delete('/:project_id', (req, res, next) => {
  projectsController
    .deleteProject(req.params.project_id)
    .then((result) => res.json({ success: result === 1 }))
    .catch(next);
});

module.exports = router;
