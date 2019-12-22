const winston = require('./../api/lib/utils/winston').logger;

// db setup
const dbOptions = require('./../knexfile').development;

// create connection
// eslint-disable-next-line import/order
const knex = require('knex')(dbOptions);
// console.log(knex);

knex.raw('SELECT VERSION()').then(() => {
  winston.info(
    ` connection to ${dbOptions.connection.database} db successful!`,
  );
});

module.exports = knex;
