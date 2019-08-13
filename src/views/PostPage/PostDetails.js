import React from 'react';
import styled from 'styled-components';

const StyledPostDetails = styled.div`
  min-height: 100vh;
  background-color: red;
`;

const PostDetails = () => (
  <StyledPostDetails>
    <h2>Details</h2>
  </StyledPostDetails>
);

export default PostDetails;
