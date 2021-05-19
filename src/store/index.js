import {counter} from './reducer';
import {createStore} from 'redux';
const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__()
);

export default store;
