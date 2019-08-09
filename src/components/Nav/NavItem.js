import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledNavItem = styled.li`
  font-size: 2.5rem;
  color: white;
  list-style: none;
  text-align: center;
  font-weight: 700;
  margin: 10px 0;
`;

class NavItem extends React.Component {
  handleClick = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const { children } = this.props;
    return <StyledNavItem onClick={this.handleClick}>{children}</StyledNavItem>;
  }
}

NavItem.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default NavItem;
