import styled from "styled-components";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineCompass,
  FiSearch,
  FaRegPaperPlane,
  AiOutlineHome,
} from "react-icons/all";

export const Nav = styled.div`
  background-color: #fff;
  height: 54px;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

export const NavHeader = styled.div`
  max-width: 922px;
  padding: 26px 20px;
  width: 100%;
  height: 0;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`;

export const NavCenter = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: inherit;
    width: 29.333%;
    text-align: center;
  }
`;

export const Input = styled.input`
  display: none;

  @media (min-width: 900px) {
    display: inherit;
    font-size: 16px;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #262626;
    padding: 7px 33px;
    border-radius: 3px;
    color: #999;
    cursor: text;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    background: #fafafa;
    &:active,
    &:focus {
      text-align: left;
    }
  }
`;

export const NavRight = styled.div`
  width: 33rem;
  text-align: right;
  svg {
    margin-right: 20px;
  }

  @media (min-width: 900px) {
    width: 33.333%;
    text-align: right;
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: black;
`;

export const Avatar = styled(AiOutlineUser)`
  color: black;
  height: 22px;
  width: 22px;
`;

export const Heart = styled(AiOutlineHeart)`
  color: black;
  height: 22px;
  width: 22px;
`;

export const Compass = styled(AiOutlineCompass)`
  color: black;
  height: 22px;
  width: 22px;
`;

export const PaperPlane = styled(FaRegPaperPlane)`
  color: black;
  height: 20px;
  width: 22px;
`;

export const HomeIcon = styled(AiOutlineHome)`
  color: black;
  height: 22px;
  width: 22px;
`;

export const SearchIcon = styled(FiSearch)`
  color: gray;
  height: 13px;
  width: 14px;
  position: absolute;
  top: 20px;
  z-index: 2;
  display: flex;
  margin-left: 6px;
`;
