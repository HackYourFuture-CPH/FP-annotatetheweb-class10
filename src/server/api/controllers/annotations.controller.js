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

const getAnnotationsById = async (annotationId) => {
  try {
    const annotations = await knex('annotations');

    if (annotations.length === 0) {
      throw new Error(`incorrect entry with the id of ${annotationId}`, 404);
    }
    return knex('annotations')
      .where({ annotation_id: annotationId })
      .select('title', 'description', 'area', 'fk_screenshot_id');
  } catch (error) {
    return error.message;
  }
};

const getAnnotationsForScreenshot = (fk_screenshot_id) => {
  return knex('annotations')
    .where({ fk_screenshot_id })
    .select('*');
};

const editAnnotation = async (annotationId, updatedannotation) => {
  return knex('annotations')
    .where({ annotation_id: annotationId })
    .update({
      title: updatedannotation.title,
      description: updatedannotation.description,
      updated_at: new Date(),
    });
};

const deleteAnnotations = async (annotation_id)=> {
return knex('annotations')
.where({annotation_id})
.del();
};

module.exports = {
  createAnnotation,
  getAnnotations,
  getAnnotationsById,
  deleteAnnotations,
  editAnnotation,
  getAnnotationsForScreenshot
};
