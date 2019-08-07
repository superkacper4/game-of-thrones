import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StartPage from './StartPage/StartPage';
import AnotherPage from './AnotherPage';
import GlobalStyle from '../theme/GlobalStyles';

const Root = () => (
  <Router>
    <GlobalStyle />
    <Route path="/" exact component={StartPage} />
    <Route path="/Another/" component={AnotherPage} />
  </Router>
);

export default Root;
