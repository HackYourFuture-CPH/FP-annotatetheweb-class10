exports.up = function(knex) {
  return knex.schema.createTable('screenshots', (table) => {
    table.increments('screenshot_id').notNullable();
    table.string('url').notNullable();
    table.string('key').notNullable();
    table.float('height').notNullable();
    table.float('width').notNullable();
    table
      .integer('fk_project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
      .onDelete('CASCADE')
      .index();
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.timestamp('deleted_at').nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('screenshots');
};
