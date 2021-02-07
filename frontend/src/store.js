import { createStore, applyMiddleware, combineReducers } from 'redux';
import apiMiddleware from './middleware/api';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(apiMiddleware))
);
export default store;
