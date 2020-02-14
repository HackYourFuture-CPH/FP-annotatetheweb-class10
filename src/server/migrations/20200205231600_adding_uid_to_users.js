exports.up = function(knex) {
    return knex.schema.table('users', function(table) {
      table.string('uid').notNull();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', function(table) {
      table.dropColumn('uid');
    });
  };
  