"use strict";

const knex = require("../../config/db");
const { paginate } = require("../lib/utils/pagination");

const getScreenshots = ({limit, offset, orderBy = "screenshot_id", order} = {}) => {
  return paginate(knex("screenshots"), {limit, offset, orderBy, order})
}

module.exports = {
  getScreenshots
}