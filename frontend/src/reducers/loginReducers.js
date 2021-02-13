import {
  SET_LOGIN_DETAILS,
  API_START,
  API_END,
  FETCH_LOADING_DETAILS,
} from '../actions/types';

const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case SET_LOGIN_DETAILS:
      return { data: action.payload };
    case API_START:
      if (action.payload === FETCH_LOADING_DETAILS) {
        return {
          ...state,
          isLoadingData: true,
        };
      }
      break;
    case API_END:
      if (action.payload === FETCH_LOADING_DETAILS) {
        return {
          ...state,
          isLoadingData: false,
        };
      }
      break;
    default:
      return state;
  }
};

export default loginReducer;
