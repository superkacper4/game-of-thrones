import React from 'react';
import styled from 'styled-components';
import bgcImg from '../assets/img/wall.jpg';
import GlobalStyle from '../theme/GlobalStyles';
import H1 from '../components/headers/H1';
import H2 from '../components/headers/H2';

const StyledStart = styled.div`
  position: relative;
  top: 0;
  left: 0;
  background-image: url(${bgcImg});
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  /* overflow: hidden; */

  &::before {
    content: '';
    background-color: #333;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const StyledHeading = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

const Root = () => (
  <>
    <GlobalStyle />
    <StyledStart>
      <StyledHeading>
        <H1>Jon Snow</H1>
        <H2>King in the North</H2>
      </StyledHeading>
    </StyledStart>
  </>
);

export default Root;
