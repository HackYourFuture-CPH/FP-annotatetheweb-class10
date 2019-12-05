"use strict";

const knex = require("../../config/db");

const getScreenshots = async params => {
  return {};
};

const getScreenshotById = async screenshotId => {
  return {};
};

const editScreenshot = async (screenshotId, updatedScreenshot) => {
  return knex("screenshots")
    .where({ id_screenshot: screenshotId })
    .update({
      url: updatedScreenshot.url,
      key: updatedScreenshot.key,
      height: updatedScreenshot.height,
      width: updatedScreenshot.width,
      created_at: updatedScreenshot.created_at,
      updated_at: updatedScreenshot.updated_at,
      deleted_at: updatedScreenshot.deleted_at,
      fk_project_id: updatedScreenshot.fk_project_id
    });
};

const deleteScreenshot = async (screenshotId, req) => {
  return knex("screenshots")
    .where({ id: screenshotId })
    .del();
};

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
  getScreenshots,
  getScreenshotById,
  deleteScreenshot,
  createScreenshot,
  editScreenshot
};
