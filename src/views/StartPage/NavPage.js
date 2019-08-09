import React from 'react';
import styled from 'styled-components';
import H2 from '../../components/headers/H2';
import Nav from '../../components/Nav/Nav';
import NavGif from '../../assets/img/stark.jpg';

const StyledNavPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url(${NavGif}) no-repeat center center;
  background-size: contain;
  padding: 10px;
  margin: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.6;
  }
`;

const StyledH2 = styled(H2)`
  font-size: 4rem;
  text-align: center;
  position: absolute;
  top: 15%;
  color: ${({ delay }) => (delay ? 'white' : '#871200')};
  opacity: 0;
  animation: carouselAnimation 10s linear both infinite;
  animation-delay: ${({ delay }) => (delay ? '5s' : '0s')};

  @keyframes carouselAnimation {
    20% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

const namesArr = [
  <StyledH2 key="0">Geralt z Rivii</StyledH2>,
  <StyledH2 key="1" delay>
    Biały Wilk
  </StyledH2>,
];

const NavPage = () => {
  const names = namesArr.map(name => <>{name}</>);
  return (
    <StyledNavPage>
      {names}
      <Nav />
    </StyledNavPage>
  );
};

export default NavPage;
