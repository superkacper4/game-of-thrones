import { createStore } from 'redux';
import postsApp from '../reducers/index';

const store = createStore(postsApp);

export default store;
