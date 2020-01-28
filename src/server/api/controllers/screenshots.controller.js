const fetch = require('cross-fetch');
const knex = require('../../config/db');
const { paginate } = require('../lib/utils/pagination');

const getScreenshots = ({
  limit,
  offset,
  orderBy = 'screenshot_id',
  order,
} = {}) => {
  return paginate(knex('screenshots'), { limit, offset, orderBy, order });
};

const getScreenshotByKey = (key) => {
  return knex('screenshots')
    .where({ key })
    .select('url', 'width', 'height');
};

const createScreenshot = async (body) => {
  const response = await fetch(
    `https://api.annotatetheweb.com/screenshot/1.0/RequestScreenshot?url=${body.url}`,
    {
      method: 'POST', 
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    },
  );
  const key = await response.json();
  
  const id = await knex('screenshots').insert({
    url: body.url,
    key: key.key,
    height: body.height,
    width: body.width,
    created_at: body.created_at,
    updated_at: body.updated_at,
    deleted_at: body.deleted_at,
    fk_project_id: body.fk_project_id,
  });
  
  return {
    successful: true,
    key: key.key,
    id: id[0]
  };
};

module.exports = {
  getScreenshots,
  getScreenshotByKey,
  createScreenshot
};
