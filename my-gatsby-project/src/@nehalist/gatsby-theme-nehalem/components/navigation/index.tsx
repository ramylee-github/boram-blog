import React, {FunctionComponent} from "react";
import {Nav, NavContainer, NavLink, NavMenu, NavMenuItem, NavWrapper, SearchContainer} from "./style";
import {MenuItem} from "../../../../../node_modules/@nehalist/gatsby-theme-nehalem/src/utils/models";
import {Search} from "../../../../../node_modules/@nehalist/gatsby-theme-nehalem/src/components/search";
import Logo from "../../../../../node_modules/@nehalist/gatsby-theme-nehalem/src/components/logo";

interface NavigationProps {
  title: string;
  menu: MenuItem[];
  showSearch: boolean;
  dark?: boolean;
}

const Navigation: FunctionComponent<NavigationProps> = ({title, menu, dark = false, showSearch = true}) => (
  <NavContainer dark={dark}>
    <Nav>
      <Logo title={title}/>
      <NavWrapper>
        <NavMenu mobile={true}>
          {menu.map((item, index) => (
            <NavMenuItem key={index}>
              <NavLink to={item.path} key={index}>{item.name}</NavLink>
            </NavMenuItem>
          ))}
        </NavMenu>
        <SearchContainer>
          {showSearch &&
          <NavMenu>
              <Search/>
          </NavMenu>
          }
        </SearchContainer>
      </NavWrapper>
    </Nav>
  </NavContainer>
);

export default Navigation;
