

const fetch = require('cross-fetch');
const knex = require('../../config/db');
const { paginate } = require('../lib/utils/pagination');

const getScreenshots = ({
  limit,
  offset,
  orderBy = 'screenshot_id',
  order
} = {}) => {
  return paginate(knex('screenshots'), { limit, offset, orderBy, order });
};

const getScreenshotByKey = key => {
  return knex('screenshots')
    .where({ key })
    .select('url', 'width', 'height');
};

let keyValue = '';
function setScreenshotKey(key) {
  keyValue = key;
}

function getScreenshotKey() {
  return keyValue;
}

const createScreenshot = async body => {
  await fetch(
    `https://api.annotatetheweb.com/screenshot/1.0/RequestScreenshot?url=${body.url}`,
    {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    }
  )
    .then(async function(res) {
      setScreenshotKey(await res.json());
      return getScreenshotKey();
    })

    .then(async function(keyValue) {
      const [screenshotId] = await knex('screenshots').insert({
        url: body.url,
        key: keyValue.key,
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
    });
};

module.exports = {
  getScreenshots,
  getScreenshotByKey,
  createScreenshot,
  getScreenshotKey
};
