import React from 'react';
import styled from 'styled-components';
import H1 from '../../components/headers/H1';
import StartGif from '../../assets/img/start.gif';

const StyledTitlePage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: url(${StartGif}) no-repeat center center fixed;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.4;
  }
`;

const StyledSpan = styled.span`
  background: -webkit-linear-gradient(grey, black);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TitlePage = () => (
  <StyledTitlePage>
    <H1>
      BLo<StyledSpan>g</StyledSpan>
    </H1>
  </StyledTitlePage>
);

export default TitlePage;
