import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = styled.div`
  background-color: #c1d7ae;
  margin: 0;
  padding: 0;
`;

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <Link to="/">KURWAAAA</Link>
      </li>
      <li>
        <Link to="/Another/">Ryj Tam</Link>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;
