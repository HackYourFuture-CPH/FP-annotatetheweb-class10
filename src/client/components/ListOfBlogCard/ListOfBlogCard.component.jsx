import React from 'react';
import BlogCard from '../../container/CommentBox/BlogCard.component';

const BlogCardList = ({ annotations }) => {
  return (
    <div className="comment-list">
      {annotations.map((annotation) => (
        <BlogCard title={annotation.title} />
      ))}
    </div>
  );
};

export default BlogCardList;
