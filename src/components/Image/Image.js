// Image.js
import React from "react";

import { ImgContainer, Img, ImgMeta, ImgIcons, Comment, Heart, Play } from "./Image.styles";

function Image({ image }) {
  return (
    <ImgContainer>
      <Img src={image.source} />
      <ImgMeta>
        <ImgIcons>
          {image.isVideo ? <Play /> : <Heart />} {image.likes}
        </ImgIcons>
        <ImgIcons>
          {/* <Comment /> */}
          <Comment  /> {image.comments}
        </ImgIcons>
      </ImgMeta>
    </ImgContainer>
  );
}
export default Image;
