exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        { project_id: 1, name: 'hyf_annotatetheweb', fk_user_id: 1 },
      ]);
    });
};
