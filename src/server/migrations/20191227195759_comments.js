exports.up = function(knex) {
    return knex.schema.createTable('comments', (table) => {
      table.increments('comment_id').notNullable();
      table.string('description').notNullable();
      table
        .integer('fk_annotations_id')
        .unsigned()
        .notNullable()
        .references('annotation_id')
        .inTable('annotations')
        .onDelete('CASCADE')
        .index();
      table
        .integer('fk_comments_id')
        .unsigned()
        .nullable()
        .references('comment_id')
        .inTable('comments')
        .onDelete('CASCADE')
        .index();
      table
        .integer('fk_user_id')
        .unsigned()
        .nullable()
        .references('user_id')
        .inTable('users')
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
    return knex.schema.dropTable('comments');
  };
  