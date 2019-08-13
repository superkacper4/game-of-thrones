import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import H2 from '../../components/headers/H2';
import H3 from '../../components/headers/H3';
import PostTile from '../../components/PostTile/PostTile';
import Img from '../../components/Avatar/Img';

import PostsGif from '../../assets/img/posts.gif';

import P from '../../components/paragraph/P';

const StyledPostPage = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  background: url(${PostsGif}) no-repeat center center fixed;
  background-size: cover;
  padding: 20px 0;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.6;
  }
`;

const StyledH2 = styled(H2)`
  padding: 0 10px;
`;

const StyledH3 = styled(H3)`
  padding: 0 10px;
  margin: 0;
  font-size: 1.7rem;
  text-align: left;
  position: relative;
`;

const StyledImg = styled(Img)`
  height: auto;
  width: 100%;
`;

const StyledP = styled(P)`
  padding: 10px;
`;

const PostPage = ({ posts }) => {
  return (
    <>
      <StyledPostPage>
        <StyledH2>Wpisy</StyledH2>
        <StyledH3>Tutaj będą zamieszczane wpisy z polowań lub innych przygód.</StyledH3>

        {posts
          .slice(0)
          .reverse()
          .map(post => (
            <PostTile key={post.id} id={post.id}>
              <StyledImg src={post.img} />
              <StyledP>{`${post.content.substring(0, 100)}...`}</StyledP>
            </PostTile>
          ))}
      </StyledPostPage>
    </>
  );
};

const mapStateToProps = ({ posts }) => ({ posts });

PostPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(PostPage);
