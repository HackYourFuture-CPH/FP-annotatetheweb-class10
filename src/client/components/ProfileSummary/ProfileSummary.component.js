import React from 'react';
import './ProfileSummary.css';

const ProfileSummary = ({ profileImage, profileName }) => {
  return (
    <div className="profile-container">
      <div className="image-container">
        <img
          src={profileImage.src}
          alt={profileImage.alt}
          className="profile-image"
        />
      </div>
      <div>
        <span className="profile-name">{profileName}</span>
      </div>
      
    </div>
  );
};

export default ProfileSummary;
