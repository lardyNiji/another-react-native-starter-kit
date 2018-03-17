import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';

const middleware = [thunk];

// Init redux store (using the given reducer & middleware)
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)),
);

export default store;
