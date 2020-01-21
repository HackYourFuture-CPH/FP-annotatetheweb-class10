import React from 'react';

const MessageParagraph = ({ ClassName, message }) => {
  return (
    <div className ={ClassName}>
            {message}
    </div>
  );
};


export default MessageParagraph;