const knex = require('../../config/db');
const { paginate } = require('../lib/utils/pagination');

// Return all projects
const getProjects = ({ limit, offset, orderBy = 'project_id', order } = {}) => {
  return paginate(knex('projects'), { limit, offset, orderBy, order });
};

// Return project by project_id
const getProjectById = (projectId) => {
  return knex('projects')
    .where({ projectId })
    .select('*');
};

// Return projects for a specific userId
const getProjectsByUserId = (fkUserId) => {
  return knex('projects')
    .where({ fkUserId })
    .select('*');
};

// Update a project
const updateProject = (projectId, body) => {
  return knex('projects')
    .where({ projectId })
    .update({
      name: body.name,
      updated_at: new Date(),
    });
};

// Create a new project
const createProject = (body) => {
  return knex('projects').insert({
    name: body.name,
    fk_user_id: body.fk_user_id,
  });
};

// Delete a project
const deleteProject = (projectId) => {
  return knex('projects')
    .where({ projectId })
    .del();
};

module.exports = {
  getProjects,
  getProjectById,
  getProjectsByUserId,
  updateProject,
  createProject,
  deleteProject,
};
