"use strict";

const knex = require("../../config/db");


const createAnnotation = async body => {
  const [annotationId] = await knex("annotations").insert({   
    title: body.title,
    area: body.area,
    description: body.description,
    fk_screenshot_id: body.fk_screenshot_id   
  });

  return {
    successful: true
  };
};

module.exports = {
  createAnnotation
};
