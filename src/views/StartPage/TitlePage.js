import React from 'react';
import styled from 'styled-components';
import H1 from '../../components/headers/H1';

const StyledTitlePage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

const TitlePage = () => (
  <StyledTitlePage>
    <H1>BLog</H1>
  </StyledTitlePage>
);

export default TitlePage;
