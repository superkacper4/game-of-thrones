import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from '../theme/GlobalStyles';

const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyle />
    {children}
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainTemplate;
