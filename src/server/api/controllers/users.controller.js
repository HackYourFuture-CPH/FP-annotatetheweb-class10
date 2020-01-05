const knex = require('../../config/db');
const { paginate } = require('../lib/utils/pagination');

const getUsers = ({ limit, offset, orderBy = 'user_id', order } = {}) => {
  return paginate(knex('users'), { limit, offset, orderBy, order });
};

const createUser = (body) => {
  return knex('users').insert({
    name: body.name,
    fk_role_id: body.fk_role_id
  });
};

module.exports = {
  getUsers,
  createUser
};
