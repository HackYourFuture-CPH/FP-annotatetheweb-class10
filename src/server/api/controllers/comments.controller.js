const knex = require('../../config/db');

const createComment = async ({
  description,
  fkAnnotationsId,
  fkCommentsId,
  fkUserId,
}) => {
  await knex('comments').insert({
    description,
    fkAnnotationsId,
    fkCommentsId,
    fkUserId,
  });

  return {
    successful: true,
  };
};

const getCommentsForAnnotation = (fkAnnotationsId) => {
  return knex('comments')
    .where({ fkAnnotationsId })
    .select('*');
};

const updateCommentById = (commentId, body) => {
  return knex('comments')
    .where({ commentId })
    .update({
      description: body.description,
      updated_at: new Date(),
    });
};

const deleteCommentById = (commentId) => {
  return knex('comments')
    .where({ commentId })
    .del();
};

module.exports = {
  createComment,
  getCommentsForAnnotation,
  updateCommentById,
  deleteCommentById,
};
