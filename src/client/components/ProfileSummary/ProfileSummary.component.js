import React from "react";
import "./ProfileSummary.css";

const ProfileSummary = ({ profileImage, profileName }) => {
  return (
    <div className="profile-container">
      <img
        src={profileImage.src}
        alt={profileImage.alt}
        className="profile-Image"
      />
      <span className="profile-Name">{profileName}</span>
    </div>
  );
};

export default ProfileSummary;
