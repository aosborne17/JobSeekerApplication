import { createStore, applyMiddleware, combineReducers } from 'redux';
import apiMiddleware from './middleware/api';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from './reducers/loginReducers';

const reducer = combineReducers({
  login: loginReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(apiMiddleware))
);
export default store;
