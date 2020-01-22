const knex = require('../../config/db');

const createComment = async ({
  description,
  fk_annotations_id,
  fk_comments_id,
  fk_user_id,
}) => {
  await knex('comments').insert({
    description,
    fk_annotations_id,
    fk_comments_id,
    fk_user_id,
  });

  return {
    successful: true,
  };
};

const getCommentsForAnnotation = (fk_annotations_id) => {
  return knex('comments')
    .where({ fk_annotations_id })
    .select('*');
};

const updateCommentById = (comment_id, body) => {
  return knex('comments')
    .where({ comment_id })
    .update({
      description: body.description,
      updated_at: new Date(),
    });
};

const deleteCommentById = (comment_id) => {
  return knex('comments')
    .where({ comment_id })
    .del();
};

module.exports = {
  createComment,
  getCommentsForAnnotation,
  updateCommentById,
  deleteCommentById,
};
