import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';
import StyledLink from '../StyledLink/StyledLink';

const StyledNavList = styled.div`
  margin: 0;
  padding: 0;
`;

const StyledUl = styled.ul`
  margin: 10px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavList = () => (
  <StyledNavList>
    <StyledUl>
      <NavItem>
        <StyledLink to="/About/">O mnie</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/Posts/">Posty</StyledLink>
      </NavItem>
    </StyledUl>
  </StyledNavList>
);

export default NavList;
