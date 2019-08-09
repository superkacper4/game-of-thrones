import React from 'react';
import styled from 'styled-components';

const StyledArrow = styled.div`
  height: 50px;
  width: 50px;
  font-size: 6rem;
  color: grey;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  /* background-color: #6e0f00;
  border: 2px solid grey; */
  display: flex;
  justify-content: center;
  align-items: center;
  animation: arrowAnimation 4s both ease infinite;

  @keyframes arrowAnimation {
    0% {
      transform: translate(-50%, 0);
    }
    30% {
      transform: translate(-50%, 15px);
    }
    70% {
      transform: translate(-50%, 15px);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
`;

class Arrow extends React.Component {
  handleClick = () => {
    window.scrollBy(0, window.innerHeight);
  };

  render() {
    return <StyledArrow onClick={this.handleClick}>⮛</StyledArrow>;
  }
}

export default Arrow;
