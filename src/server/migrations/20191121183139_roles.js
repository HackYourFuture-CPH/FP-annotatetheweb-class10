exports.up = function(knex) {
  return knex.schema.createTable('roles', (table) => {
    table.increments('role_id').notNullable();
    table.string('name').notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('roles');
};
