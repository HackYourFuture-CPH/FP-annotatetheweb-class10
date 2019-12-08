"use strict";

const knex = require("../../config/db");
const { paginate } = require("../lib/utils/pagination");

const getUsers = ({limit, offset, orderBy = "user_id", order} = {}) => {
  return paginate(knex("users"), {limit, offset, orderBy, order})
}

<<<<<<< HEAD

module.exports = {
  getUsers
}
=======
module.exports = {
  getUsers
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> feature-1


>>>>>>> da5ad3bdae26d6b96dc11cabef36eefb31dfa41c
