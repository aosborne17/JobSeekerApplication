import {
  SET_LOGIN_DETAILS,
  API_START,
  API_END,
  FETCH_LOADING_DETAILS,
  API_ERROR,
} from '../actions/types';

const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case API_START:
      if (action.payload === FETCH_LOADING_DETAILS) {
        return {
          ...state,
          isLoadingData: true,
        };
      }
      break;
    case SET_LOGIN_DETAILS:
      return { ...state, data: action.payload };

    case API_END:
      if (action.payload === FETCH_LOADING_DETAILS) {
        return {
          ...state,
          isLoadingData: false,
        };
      }
    case API_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
