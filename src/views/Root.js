import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import MainTemplate from '../templates/MainTemplate';
import StartPage from './StartPage/StartPage';
import AboutPage from './AboutPage';
import PostPage from './PostPage/PostPage';
import PostDetails from './PostPage/PostDetails';
// dodaj action jako drugi argument w reducerze!!!
const Root = () => (
  <Provider store={store}>
    <Router>
      <MainTemplate>
        <Route path="/" exact component={StartPage} />
        <Route path="/About/" component={AboutPage} />
        <Route path="/Posts/" exact component={PostPage} />
        <Route path="/Posts/:id" component={PostDetails} />
      </MainTemplate>
    </Router>
  </Provider>
);

export default Root;
