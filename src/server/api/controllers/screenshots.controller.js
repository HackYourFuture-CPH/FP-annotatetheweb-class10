'use strict';

const knex = require ('../../config/db');
const {paginate} = require ('../lib/utils/pagination');

const getScreenshots = (
  {limit, offset, orderBy = 'screenshot_id', order} = {}
) => {
  return paginate (knex ('screenshots'), {limit, offset, orderBy, order});
};

const getScreenshotById = screenshot_id => {
  return knex ('screenshots')
    .where ({ screenshot_id: screenshot_id })
    .select ('url', 'width', 'height');
};

module.exports = {
  getScreenshots,
  getScreenshotById,
};
