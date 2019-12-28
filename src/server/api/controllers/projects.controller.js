'use strict';

const knex = require ('../../config/db');
const {paginate} = require ('../lib/utils/pagination');

const getProjects = ({limit, offset, orderBy = 'project_id', order} = {}) => {
  return paginate (knex ('projects'), {limit, offset, orderBy, order});
};

const getProjectById = (project_id) => {
  return knex ('projects')
    .where ({project_id: project_id})
    .select ('name', 'project_id', 'created_at');
};

const getProjectByUserId = (fk_user_id) => {
    return knex ('projects')
    .where({ fk_user_id: fk_user_id})
    .select ('*');
}

module.exports = {
  getProjects,
  getProjectById,
  getProjectByUserId
};
