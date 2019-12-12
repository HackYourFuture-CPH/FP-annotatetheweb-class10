
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('annotation').del()
    .then(function () {
      // Inserts seed entries
      return knex('annotation').insert([
        {annotation_id: 1, title: 'rowValue1', description: 'book' ,fk_screenshot_id:3},
        {annotation_id: 2, title: 'rowValue2', description: 'car' ,fk_screenshot_id:4},
        {annotation_id: 3, title: 'rowValue3', description: 'house', fk_screenshot_id:5}

      ]);
    });
};
