exports.up = function(knex) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('project_id').notNullable();
    table.string('name').notNullable();
    table
      .integer('fk_user_id')
      .unsigned()
      .notNullable()
      .references('user_id')
      .inTable('users')
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
  return knex.schema.dropTable('projects');
};
