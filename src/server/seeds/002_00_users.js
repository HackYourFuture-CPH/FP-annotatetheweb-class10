exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { user_id: 1, name: 'John Doe',  fk_role_id: 1, user_name: 'JD', uid: '1234567890' },
      ]);
    });
};
// email: 'johndoe@email.com', 