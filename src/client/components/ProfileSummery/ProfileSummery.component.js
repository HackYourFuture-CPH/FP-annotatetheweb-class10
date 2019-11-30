import React from "react";
import "./ProfileSummery.css";

const ProfileSummery = ({ profileImage, profileName }) => {
  return (
    <div className="profile-container">
      <img
        src={profileImage.src}
        alt={profileImage.alt}
        className="profileImage"
      />
      <span className="profileName" >{profileName}</span>
      
    </div>
  );
};

export default ProfileSummery;
