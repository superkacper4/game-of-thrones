import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const StyledPostTile = styled.div`
  /* background-color: grey; */
  position: relative;
  text-align: center;
  margin: 10px 0;
  /* height: 200px; */
`;

class PostTile extends React.Component {
  state = {
    redirect: false,
  };

  handleClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { children, id } = this.props;
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={`${id}`} />;
    }
    return <StyledPostTile onClick={this.handleClick}>{children}</StyledPostTile>;
  }
}

PostTile.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number.isRequired,
};

export default PostTile;
