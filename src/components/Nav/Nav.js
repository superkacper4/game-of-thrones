import React from 'react';
import styled from 'styled-components';
import NavList from './NavList';

const StyledNav = styled.div`
  margin: 0;
  padding: 0;
  margin: 15px 0;
`;

const Nav = () => (
  <StyledNav>
    <NavList />
  </StyledNav>
);

export default Nav;
