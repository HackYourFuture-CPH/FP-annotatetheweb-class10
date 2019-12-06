"use strict";

const knex = require("../../config/db");
const error = require("../lib/utils/http-error");

//GET all annotations
const getAnnotations = async req => {
  try {
    return await knex("annotation").select(
      "annotation.annotation_id",
      "annotation.title",
      "annotation.description",
      "annotation.fk_screenshot_id",
      "annotation.area",
      "annotation.updated_at",
      "annotation.created_at",
      "annotation.deleted_at"
    );
  } catch (error) {
    return error.message;
  }
};

// GET specific:id

const getAnnotationById = async id => {
  try {
    const annotations = await knex("annotation")
      .select(
        "annotation.id as id",
        "title",
        "description",
        "fk_screenshot_id",
        "area",
        "updated_at",
        "created_at",
        "deleted_at"
      )
      .where({ id: id });
    if (annotation.length === 0) {
      throw new error(`encorrect entry with the id of ${id}`, 404);
    }
    return annotations;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAnnotations,
  getAnnotationById
};
