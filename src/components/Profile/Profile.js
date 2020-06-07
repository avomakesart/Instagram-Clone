// Profile.js
import React from "react";
import SingleImage from "../Image/Image.js";

import {
  ProfileContainer,
  ProfileDetails,
  ProfileDetailsLeft,
  ProfileImage,
  ProfileDetailsRight,
  ProfileDetailsUsername,
  HeadingThreeText,
  EditProfileButton,
  ProfileDetailsMeta,
  ParagraphText,
  ProfileDetailsName,
  ImagesWrapper,
} from "./Profile.styles";

const feedsource = [
  {
    source: "https://source.unsplash.com/random/480x480",
    likes: "43",
    comments: "3",
    isVideo: false,
    id: 0,
  },
  {
    source: "https://source.unsplash.com/random/480x480",
    likes: "313",
    comments: "10",
    isVideo: true,
    id: 1,
  },
  {
    source: "https://source.unsplash.com/random/480x480",
    likes: "29",
    comments: "2",
    isVideo: false,
    id: 2,
  },
  {
    source: "https://source.unsplash.com/random/480x480",
    likes: "18",
    comments: "2",
    isVideo: false,
    id: 3,
  },
  {
    source: "https://source.unsplash.com/random/480x480",
    likes: "30",
    comments: "4",
    isVideo: false,
    id: 4,
  },
  {
    source: "https://source.unsplash.com/random/480x480",
    likes: "30",
    comments: "5",
    isVideo: false,
    id: 5,
  },
];

function Profile() {
  return (
    <ProfileContainer>
      <ProfileDetails>
        <ProfileDetailsLeft>
          <ProfileImage src="https://api.adorable.io/avatars/285/abott@adorable.png" />
        </ProfileDetailsLeft>
        <ProfileDetailsRight>
          <ProfileDetailsUsername>
            <HeadingThreeText>yomieluwande</HeadingThreeText>
            <EditProfileButton>Edit profile</EditProfileButton>
          </ProfileDetailsUsername>
          <ProfileDetailsMeta>
            <ParagraphText>
              <strong>5</strong> posts
            </ParagraphText>
            <ParagraphText>
              <strong>296</strong> followers
            </ParagraphText>
            <ParagraphText>
              <strong>269</strong> following
            </ParagraphText>
          </ProfileDetailsMeta>
          <ProfileDetailsName>
            <ParagraphText>
              <strong>Yomi</strong>
            </ParagraphText>
          </ProfileDetailsName>
        </ProfileDetailsRight>
      </ProfileDetails>
      <ImagesWrapper>
        {feedsource.map((item) => (
          <SingleImage image={item} key={item.id} />
        ))}
      </ImagesWrapper>
    </ProfileContainer>
  );
}
export default Profile;
