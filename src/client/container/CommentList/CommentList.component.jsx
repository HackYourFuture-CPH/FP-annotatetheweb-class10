import React from 'react';
import List from '../../components/List/List.component';

const CommentList = ({ inputValue }) => {
  return (
    <div className="comment-list">
      {inputValue.map((item) => (
        <List title={item.description} key={item.comment_id}/>
      ))}
    </div>
  );
};

export default CommentList;
