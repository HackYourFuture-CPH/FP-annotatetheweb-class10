import React from 'react';
import List from '../../components/List/List.component';

const CommentList = ({ inputValue }) => {
  console.log('from commentList', inputValue)
  return (
    <div className="comment-list">
      {inputValue.map((item, i) => (
        <List title={item.description} key={i}/>
      ))}
    </div>
  );
};

export default CommentList;
