exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('screenshots')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('screenshots').insert([
        {
          screenshot_id: 1,
          url: 'https://www.google.com/',
          key: '1l2w5s',
          height: '50',
          width: '50',
          fk_project_id: 1,
        },
      ]);
    });
};
