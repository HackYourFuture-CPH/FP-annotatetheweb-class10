import React from 'react';
import Button from '../../components/Button/Button.component';
import dropdownStyle from './Them';

const DropDown = ({ titleArray, onClickHandle }) => {
  const list = titleArray.map((element) => (
    <Button
      key={element.id}
      title={element.title}
      onClickHandle={onClickHandle}
      buttonClassName="button"
    />
  ));
  return (
    <div className="dropdown-content" style={dropdownStyle}>
      {list}
    </div>
  );
};

export default DropDown;
