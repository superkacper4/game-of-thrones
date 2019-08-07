import React from 'react';
import styled from 'styled-components';
import H2 from '../../components/headers/H2';
import Nav from '../../components/Nav/Nav';

const StyledNavPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #96c58f;
  padding: 0;
  margin: 0;
`;

const NavPage = () => (
  <StyledNavPage>
    <H2>Kacper Kuczewski</H2>
    <Nav />
  </StyledNavPage>
);

export default NavPage;
