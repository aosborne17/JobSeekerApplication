import { createStore, applyMiddleware, combineReducers } from 'redux';
import apiMiddleware from './middleware/api';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userDetailsReducer } from './reducers/userReducers';
import loginReducer from './reducers/loginReducers';
import { createPostReducer } from './reducers/postReducers';

const reducer = combineReducers({
  userDetails: userDetailsReducer,
  login: loginReducer,
  createPost: createPostReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(apiMiddleware))
);
export default store;
