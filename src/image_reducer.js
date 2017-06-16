import { RECEIVE_IMAGES } from './image_actions';
import { merge } from 'lodash';

const imageReducer = (state = [], action) => {
  // prevent state from being mutated
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_IMAGES:
      newState.images = action.images;
      return newState;
    default:
      return newState;
  }
};

export default imageReducer;
