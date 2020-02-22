import React from 'react';
import BlogCard from '../CommentBox/BlogCard.component';

const BlogCardList = ({ annotations }) => {
  console.log(annotations);
  return (
    <>
      {annotations && (
        <div className="comment-container" style={{ width: '100%' }}>
          {annotations.map((annotation) => {
            return (
              <BlogCard
                key={annotation.annotation_id}
                annotationId={annotation.annotation_id}
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
