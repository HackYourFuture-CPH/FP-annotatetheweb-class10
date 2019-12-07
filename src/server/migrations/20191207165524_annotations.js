
exports.up = function(knex) {

    return knex.schema.createTable("annotations",(table)=>{
    table.increment("annotation_id").notNullable();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.integer("fk_screenshot_id")
    .notNullable()
    .references("screenshot_id")
    .inTable("screenshots")
    .onDelete("CASCADE")
    .index();
    table.jsonb("area").notNullable();
    table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
    table.timestamp("deleted_at").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("annotations");
};
