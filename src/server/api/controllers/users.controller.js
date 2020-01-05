const knex = require('../../config/db');
const { paginate } = require('../lib/utils/pagination');

const getUsers = ({ limit, offset, orderBy = 'user_id', order } = {}) => {
  return paginate(knex('users'), { limit, offset, orderBy, order });
};

const getUserById = (user_id) => {
  return knex('users')
  .where({user_id})
  .select('*');
}

module.exports = {
  getUsers,
  getUserById
};
