import React from 'react';
import './HomePageImage.css';

const HomePageImage = ({ classImage, homeImage }) => {
  return (
    <div>
      <img alt="logo" className={classImage} src={homeImage} />
    </div>
  );
};

export default HomePageImage;