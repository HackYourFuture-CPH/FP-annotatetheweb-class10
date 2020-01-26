import React from 'react';
import BlogCard from '../CommentBox/BlogCard.component';

const BlogCardList = ({ annotations }) => {
  return (
    <div className="comment-container">
      {annotations.map((annotation) => (
        <BlogCard key={annotation.id} title={annotation.data.title} />
      ))}
    </div>
  );
};

export default BlogCardList;