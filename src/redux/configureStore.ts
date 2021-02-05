import { createStore } from 'redux';
import setUserReducer from './reducers/serUserReducer';

const configureStore = () => {
  return createStore(setUserReducer);
}

export default configureStore;
