exports.up = function(knex) {
  return knex.schema.createTable('annotations', (table) => {
    table.increments('annotation_id').notNullable();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.jsonb('area').notNullable();
    table
      .integer('fk_screenshot_id')
      .unsigned()
      .notNullable()
      .references('screenshot_id')
      .inTable('screenshots')
      .onDelete('CASCADE')
      .index();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.timestamp('deleted_at').nullable();
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable('annotations');
};
