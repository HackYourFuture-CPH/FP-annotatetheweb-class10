"use strict";

const knex = require("../../config/db");
const error = require("../lib/utils/http-error");

const getAnnotations = async req => {
  try {
    return await knex("annotations").select(
      "annotations.annotation_id",
      "annotations.title",
      "annotations.description",
      "annotations.fk_screenshot_id",
      "annotations.area",
      "annotations.updated_at",
      "annotations.created_at",
      "annotations.deleted_at"
    );
  } catch (error) {
    return error.message;
  }
};
const getAnnotationsById = async id => {
  try {
    const annotations = await knex("annotations")
      .select(
        "annotations.id as id",
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
  getAnnotationsById
};
