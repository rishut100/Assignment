import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar:React.FC = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <strong>Shop</strong>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/cart'>
            Cart
          </NavLink>
          <NavLink to='/loggedUser'>
            LoggedUser
          </NavLink>
          <NavLink to='/gifts'>
            Gift
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signIn'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;