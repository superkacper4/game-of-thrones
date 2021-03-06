import React from 'react';
import styled from 'styled-components';
import H2 from '../components/headers/H2';
import H3 from '../components/headers/H3';
import StyledLink from '../components/StyledLink/StyledLink';
import P from '../components/paragraph/P';
import Img from '../components/Avatar/Img';

import Avatar1IMG from '../assets/img/avatar1.jpg';
import Avatar2IMG from '../assets/img/avatar2.jpg';

const StyledAboutPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  align-items: center;
  background-color: #260500;
  padding: 20px;
`;

const StyledAvatar = styled(Img)`
  opacity: 0;
  position: absolute;
  left: 50%;
  margin-bottom: 10px;
  transform: translateX(-50%);
  animation: carouselAnimation 14s ${({ delay }) => (delay ? '7s' : '0s')} linear both infinite;
`;

const StyledCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: transparent;
`;

const avatarArr = [<StyledAvatar src={Avatar1IMG} />, <StyledAvatar src={Avatar2IMG} delay />];

class AboutPage extends React.Component {
  avatars = avatarArr.map(avatar => <>{avatar}</>);

  handleClick = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <StyledAboutPage>
        <H2>Kim jestem?</H2>
        <StyledCarousel>{this.avatars}</StyledCarousel>
        <H3>Wiedźmin</H3>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </P>
        <StyledLink to="/" onClick={this.handleClick}>
          Powrót na główną stronę
        </StyledLink>
      </StyledAboutPage>
    );
  }
}

export default AboutPage;
