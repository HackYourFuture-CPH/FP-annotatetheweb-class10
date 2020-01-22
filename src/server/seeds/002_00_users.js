exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { user_id: 1, name: 'Random User', fk_role_id: 1 },
      ]);
    });
};
