const knex = require('../../config/db');
const { paginate } = require('../lib/utils/pagination');

// Get all users
const getUsers = ({ limit, offset, orderBy = 'user_id', order } = {}) => {
  return paginate(knex('users'), { limit, offset, orderBy, order });
};

// Get user by id
const getUserById = (user_id) => {
  return knex('users')
    .where({ user_id })
    .select('*');
};

// Get user by uid
const getUserByUid = (uid) => {
  return knex('users')
    .where({ uid })
    .select('*');
};

// Create new user
const createUser = async (body) => {
  const isUserExist = await knex('users')
    .select('user_id')
    .where('uid', body.uid);

  if (isUserExist.length === 0) {
    const id = await knex('users').insert({
      name: body.name,
      fk_role_id: body.fk_role_id,
      user_name: body.user_name,
      uid: body.uid,
    });

    return {
      success: true,
      id: id[0],
    }
  }
  
  if (isUserExist.length !== 0) {
    return {
      success: true,
      id: isUserExist[0].user_id,
    };
  }

  return { message: 'User has already created.' };
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
  getUserByUid,
  createUser,
  deleteUserById
};
