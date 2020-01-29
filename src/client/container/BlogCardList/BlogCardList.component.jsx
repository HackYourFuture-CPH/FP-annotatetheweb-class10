import React from 'react';
import BlogCard from '../CommentBox/BlogCard.component';

const BlogCardList = ({ annotations }) => {
  console.log({ annotations });

  return (
    <>
      {annotations && (
        <div className="comment-container" style={{ width: '100%' }}>
          {annotations.map((annotation, i) => {
            return (
              <BlogCard
                key={i}
                title={annotation.title}
                description={annotation.description}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default BlogCardList;
