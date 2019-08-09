import styled from 'styled-components';

const H1 = styled.h1`
  margin: 0;
  padding: 0;
  display: block;
  font-size: 8rem;
  color: grey;
  width: 100%;
  text-align: center;
  position: relative;
  animation: H1Appear 1s 2s ease both;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: grey;
    animation: H1AfterAppear 2s ease both;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: grey;
    animation: H1BeforeAppear 2s ease both;
  }

  @keyframes H1Appear {
    0% {
      background-color: transparent;
    }
    100% {
      background-color: #6e0f00;
    }
  }

  @keyframes H1AfterAppear {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes H1BeforeAppear {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export default H1;
