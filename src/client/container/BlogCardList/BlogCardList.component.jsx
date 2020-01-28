import React from 'react';
import BlogCard from '../CommentBox/BlogCard.component';

const BlogCardList = ({ annotations }) => {
  return (
    <>
      {annotations && (
        <div className="comment-container">
          {annotations.map((annotation, i) => {
            return <BlogCard key={i} title={annotation.title} />;
          })}
        </div>
      )}
    </>
  );
};

export default BlogCardList;
