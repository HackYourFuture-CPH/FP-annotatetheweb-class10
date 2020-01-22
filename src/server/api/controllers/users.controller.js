const knex = require('../../config/db');
const { paginate } = require('../lib/utils/pagination');

// Get all users
const getUsers = ({ limit, offset, orderBy = 'user_id', order } = {}) => {
  return paginate(knex('users'), { limit, offset, orderBy, order });
};

// Get user by id
const getUserById = (userId) => {
  return knex('users')
    .where({ userId })
    .select('*');
};

// Create new user
const createUser = (body) => {
  return knex('users').insert({
    name: body.name,
    fk_role_id: body.fk_role_id,
  });
};

// Delete user by id
const deleteUserById = (userId) => {
  return knex('users')
    .where({ userId })
    .del();
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
};
