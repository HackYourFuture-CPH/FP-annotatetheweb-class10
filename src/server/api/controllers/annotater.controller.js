"use strict";

const knex = require("../../config/db");
const { paginate } = require("../lib/utils/pagination");

const getAnnotation = ({limit, offset, orderBy = "annotation_id", order} = {}) => {
  return paginate(knex("annotations"), {limit, offset, orderBy, order})
}

const getAnnotationById = annotation_id=> {
    return knex ('annotations')
      .where ({ annotation_id: annotation_id })
      .select ('title', 'description');
  };
  
module.exports = {
  getAnnotation
  getAnnotationById
}
