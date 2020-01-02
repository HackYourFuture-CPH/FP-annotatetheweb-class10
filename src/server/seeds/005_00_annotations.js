
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('annotations').del()
    .then(function () {
      // Inserts seed entries
      return knex('annotations').insert([
        {annotation_id: 1,
        title: 'new annotation',
        description: 'new annotation for commenting',
        area: `{
          "width": 20,
          "height": 20
        }`,
        fk_screenshot_id: 1,},
      ]);
    });
};
