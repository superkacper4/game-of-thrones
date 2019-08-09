import React from 'react';
import styled from 'styled-components';
import H2 from '../components/headers/H2';
import H3 from '../components/headers/H3';
import StyledLink from '../components/StyledLink/StyledLink';
import P from '../components/paragraph/P';
import Avatar from '../components/Avatar/Avatar';

import AvatarIMG from '../assets/img/avatar.jpg';

const StyledAboutPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  background-color: #260500;
  padding: 10px;
`;

class AboutPage extends React.Component {
  handleClick = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <StyledAboutPage>
        <H2>Kim jestem?</H2>
        <Avatar src={AvatarIMG} />
        <H3>Autor BLoga</H3>
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
