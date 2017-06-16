import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import imageReducer from './image_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(imageReducer, preloadedState, devToolsEnhancer())
);

export default configureStore;
