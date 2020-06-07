import styled from "styled-components";
import { FaComment, FaHeart, FaPlay } from "react-icons/fa";

export const ImgContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  flex-basis: calc(33.333% - 20px);
  margin: 10px;
  cursor: pointer;
  transition: 0.5s all ease-in;
`;

export const ImgIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-right: 20px;
  svg {
    margin-right: 10px;
    max-width: 100%;
  }
`;

export const ImgMeta = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${ImgContainer}:hover & {
    display: flex !important;
  }
`;

export const Img = styled.img`
  cursor: pointer;
  width: 100%;
`;

export const Comment = styled(FaComment)`
  color: white;
  height: 20px;
  width: 22px;
`;

export const Heart = styled(FaHeart)`
  color: white;
  height: 20px;
  width: 22px;
`;

export const Play = styled(FaPlay)`
  color: white;
  height: 20px;
  width: 22px;
`;
