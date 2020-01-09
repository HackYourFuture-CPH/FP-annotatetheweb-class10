exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('comments').insert([
        {
          comment_id: 1,
          description: 'comment1',
          fk_annotations_id: 1,
          fk_comments_id: null,
          fk_user_id: 1,
        },
        {
          comment_id: 2,
          description: 'comment2',
          fk_annotations_id: 1,
          fk_comments_id: null,
          fk_user_id: 1,
        },
        {
          comment_id: 3,
          description: 'comment3',
          fk_annotations_id: 1,
          fk_comments_id: 1,
          fk_user_id: 1,
        },
      ]);
    });
};
