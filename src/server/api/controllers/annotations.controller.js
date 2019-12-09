"use strict";

const knex = require("../../config/db");


const createAnnotation = async body => {
  const [annotationId] = await knex("annotations").insert({
    annotation_id: 1,   
    title: body.title,
    area: body.area,
    description: body.description,
    fk_screenshot_id: body.fk_screenshot_id,
    created_at: new Date(),
    updated_at: null,
    deleted_at: null
  });

  return {
    successful: true
  };
};

module.exports = {
  createAnnotation
};
