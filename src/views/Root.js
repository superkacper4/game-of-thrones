import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StartPage from './StartPage/StartPage';
import AboutPage from './AboutPage';
import PostPage from './PostPage/PostPage';
import GlobalStyle from '../theme/GlobalStyles';

const Root = () => (
  <Router>
    <GlobalStyle />
    <Route path="/" exact component={StartPage} />
    <Route path="/About/" component={AboutPage} />
    <Route path="/Posts/" component={PostPage} />
  </Router>
);

export default Root;
