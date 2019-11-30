import React from "react";
import { storiesOf } from "@storybook/react";
import ProfileSummery from "./ProfileSummery.component";

import samplePhoto from "../../assets/images/profile.png";

const profile = {
  src: samplePhoto,
  alt: "profile image"
};

storiesOf("ProfileSummery", module).add("ProfileSummery", () => (
  <div>
    <ProfileSummery profileName="Kseiina Zar" profileImage={profile} />
  </div>
));
