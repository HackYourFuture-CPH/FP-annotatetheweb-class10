exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('user_id').notNullable();
    table.string('name').notNullable();
    table
      .integer('fk_role_id')
      .unsigned()
      .notNullable()
      .references('role_id')
      .inTable('roles')
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
  return knex.schema.dropTable('users');
};
