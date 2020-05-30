import {createStore} from 'redux';
import reducer from '../reducers/reducer';

function configureStore() {
  return createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}


const store = configureStore();

export default store;
