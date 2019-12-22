import React from 'react';
import './ProfileSummary.css';

const ProfileSummary = ({ profileImage, profileName }) => {
  return (
    <div className="profile-container">
      <img
        src={profileImage.src}
        alt={profileImage.alt}
        className="profile-image"
      />
      <span className="profile-name">{profileName}</span>
    </div>
  );
};

export default ProfileSummary;
