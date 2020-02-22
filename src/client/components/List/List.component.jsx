import React from 'react';

const List = (props) => {
  console.log('props from list', props);
  return <li className="list-component">{props.title}</li>;
};

export default List;
