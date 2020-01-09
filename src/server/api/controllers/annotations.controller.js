

const knex = require('../../config/db');

const Error = require('../lib/utils/http-error');

const createAnnotation = async (body) => {
  await knex('annotations').insert({
    title: body.title,
    area: JSON.stringify(body.area),
    description: body.description,
    // eslint-disable-next-line @typescript-eslint/camelcase
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
const getAnnotationsById = async (id) => {
  try {
    const annotations = await knex('annotations')
      .select(
        'annotations.id as id',
        'title',
        'description',
        'fk_screenshot_id',
        'area',
        'updated_at',
        'created_at',
        'deleted_at',
      )
      .where({ id });
    if (annotations.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return annotations;
  } catch (error) {
    return error.message;
  }
};
const editAnnotation = async (annotationId, updatedannotation) => {
  return knex('annotations')
    .where({ annotation_id: annotationId })
    .update({
      title: updatedannotation.title,
      description: updatedannotation.description,
      updated_at: new Date()
    });
};

module.exports = {
  createAnnotation,
  getAnnotations,
  getAnnotationsById,
  editAnnotation,
};
