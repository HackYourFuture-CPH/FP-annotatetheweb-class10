'use strict';

const knex = require ('../../config/db');
const {paginate} = require ('../lib/utils/pagination');

// Return all projects
const getProjects = ({limit, offset, orderBy = 'project_id', order} = {}) => {
  return paginate (knex ('projects'), {limit, offset, orderBy, order});
};

// Return project by project_id
const getProjectById = (project_id) => {
  return knex ('projects')
    .where ({project_id: project_id})
    .select ('*');
};

// Return projects for a specific userId
const getProjectByUserId = (fk_user_id) => {
    return knex ('projects')
    .where({ fk_user_id: fk_user_id})
    .select ('*');
}

const updateProject = (project_id, body) => {
    return knex('projects')
    .where({ project_id: project_id})
    .update({
        name: body.name,
        updated_at: new Date()
    });
}

module.exports = {
  getProjects,
  getProjectById,
  getProjectByUserId,
  updateProject
};
