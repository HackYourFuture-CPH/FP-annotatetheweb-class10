"use strict";

const knex = require("../../config/db");
const { paginate } = require("../lib/utils/pagination");

const getUsers = ({limit, offset, orderBy = "user_id", order} = {}) => {
  return paginate(knex("users"), {limit, offset, orderBy, order})
}

module.exports = {
  getUsers
}
<<<<<<< HEAD
=======


>>>>>>> da5ad3bdae26d6b96dc11cabef36eefb31dfa41c
