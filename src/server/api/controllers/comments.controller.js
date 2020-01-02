'use strict';

const knex = require('../../config/db');

const getCommentsForAnnotation = (fk_annotations_id) => {
  return knex('comments')
    .where({ fk_annotations_id: fk_annotations_id })
    .select('*');
};

const updateComment = (comment_id, body) => {
  return knex('comments')
    .where({ comment_id: comment_id })
    .update({
      description: body.description,
      updated_at: new Date(),
    });
};

module.exports = {
  getCommentsForAnnotation,
  updateComment,
};