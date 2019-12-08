"use strict";

const knex = require("../../config/db");

const createScreenshot = async body => {
  const [screenshotId] = await knex("screenshots").insert({
    url: body.url,
    key: body.key,
    height: body.height,
    width: body.width,
    created_at: body.created_at,
    updated_at: body.updated_at,
    deleted_at: body.deleted_at,
    fk_project_id: body.fk_project_id
  });

  return {
    successful: true
  };
};

module.exports = {
  createScreenshot
};
