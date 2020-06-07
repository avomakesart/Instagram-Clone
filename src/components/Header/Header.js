// Header.js
import React from "react";

import {
  Nav,
  NavHeader,
  NavLeft,
  NavCenter,
  Input,
  NavRight,
  MenuLink,
  Avatar,
  Heart,
  Compass,
  SearchIcon,
  PaperPlane,
  HomeIcon,
} from "./Header.styles";

function Header() {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <b>Stylagram</b>
        </NavLeft>
        <NavCenter>
          <Input type="search" placeholder="Search" />
          <SearchIcon />
        </NavCenter>
        <NavRight>
          <MenuLink href="#">
            <HomeIcon />
          </MenuLink>
          <MenuLink href="#">
            <PaperPlane />
          </MenuLink>
          <MenuLink href="#">
            <Compass />
          </MenuLink>
          <MenuLink href="#">
            <Heart />
          </MenuLink>
          <MenuLink href="#">
            <Avatar />
          </MenuLink>
        </NavRight>
      </NavHeader>
    </Nav>
  );
}
export default Header;
