exports.up = function(knex) {
    return knex.schema.table('users', function(table) {
      table.dropColumn('email');
      table.string('uid').notNull();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', function(table) {
      table.string('email').notNull();
      table.dropColumn('uid');
    });
  };
  