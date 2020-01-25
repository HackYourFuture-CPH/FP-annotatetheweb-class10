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
const createUser = async (body) => {
  const isUserExist = await knex('users')
    .select('user_id')
    .where('name', body.name);

  if (isUserExist.length === 0) {
    return knex('users').insert({
      name: body.name,
      fk_role_id: body.fk_role_id,
      user_name: body.user_name,
      email: body.email
    });
  }
  return { message: 'User has already created.' };
};

// Delete user by id
const deleteUserById = (userId) => {
  return knex('users')
    .where({ userId })
    .del();
};

// Get user_id by email
const getUserIdByEmail = (email) => {
  return knex('users')
  .where({email})
  .select('user_id')
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
  getUserIdByEmail
};
