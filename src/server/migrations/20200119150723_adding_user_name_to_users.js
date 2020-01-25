exports.up = function(knex) {
    return knex.schema.table('users', function(table) {
      table.string('user_name').notNull();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', function(table) {
      table.dropColumn('user_name');
    });
  };
  