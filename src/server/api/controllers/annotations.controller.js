const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const createAnnotation = async (body) => {
  await knex('annotations').insert({
    title: body.title,
    area: JSON.stringify(body.area),
    description: body.description,
    fk_screenshot_id: body.fk_screenshot_id,
  });
  return {
    successful: true,
  };
};

const getAnnotations = async () => {
  try {
    return await knex('annotations').select(
      'annotations.annotation_id',
      'annotations.title',
      'annotations.description',
      'annotations.fk_screenshot_id',
      'annotations.area',
      'annotations.updated_at',
      'annotations.created_at',
      'annotations.deleted_at',
    );
  } catch (error) {
    return error.message;
  }
};

const getAnnotationsById = async (annotation_id) => {
  try {
    const annotations = await knex('annotations')
      .where({ annotation_id: annotation_id })
      .select('*');
    if (annotations.length === 0) {
      throw new Error(`incorrect entry with the id of ${annotation_id}`, 404);
    }
    return annotations;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createAnnotation,
  getAnnotations,
  getAnnotationsById,
};
