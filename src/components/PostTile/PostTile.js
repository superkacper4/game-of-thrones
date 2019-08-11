import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPostTile = styled.div`
  /* background-color: grey; */
  position: relative;
  text-align: center;
  margin: 10px 0;
  border: none;
  /* height: 200px; */
`;

const PostTile = ({ children }) => <StyledPostTile>{children}</StyledPostTile>;

PostTile.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PostTile;
