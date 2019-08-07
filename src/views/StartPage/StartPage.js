import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledStartPage = styled.div`
  height: 100vh;
  background-color: grey;
  margin: 0;
  padding: 0;
`;

const StartPage = () => (
  <StyledStartPage>
    <Link to="/Another/">KURWAAAA</Link>
  </StyledStartPage>
);

export default StartPage;
