import React from 'react';
import styled from 'styled-components';
import TitlePage from './TitlePage';
import NavPage from './NavPage';

const StyledStartPage = styled.div`
  background-color: #c1d7ae;
  margin: 0;
  padding: 0;
`;

const StartPage = () => (
  <StyledStartPage>
    <TitlePage />
    <NavPage />
  </StyledStartPage>
);

export default StartPage;
