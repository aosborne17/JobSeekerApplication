import axios from 'axios';
import { API } from '../actions/types';
import { accessDenied, apiError, apiStart, apiEnd } from '../actions/api';

const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  // if the action being dispatched is not an api call we simply return it straight away
  if (action.type !== API) return;

  // extract the important variables from our payload
  const {
    url, // the endpoint to be hit
    method, // what type of api request isit
    data, // any data we want to send to the serve
    // accessToken,
    onSuccess, // any action creators we wish to run if the api call is successful
    onFailure, // any action creators we wish to run if the api call fails
    label, // a name we can give to the request
    headers,
  } = action.payload;

  // if the method is a get or delete, then we pass in a param
  // however if it's a post or put request we pass in data
  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

  // axios default configs
  axios.defaults.baseURL = 'http://127.0.0.1:5000' || '';
  // this allows us to post data to our server via json body
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  // we are setting up our bearer auth token which we will later use to access our user
  //   axios.defaults.headers.common['Authorization'] = `Bearer${accessToken}`;

  if (label) {
    // dispatching this action will set loading to true and show our spinner
    dispatch(apiStart(label));
    console.log(data);
  }

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data,
    })
    // when the promised is returned, we destructure it to get the data within the response
    .then(({ data }) => {
      //we then dispatch our action with that new data
      dispatch(onSuccess(data));
    })
    .catch((error) => {
      dispatch(apiError(error));
      dispatch(onFailure(error));

      // this is an auth error, if the user doesn't have access we will render a message to the screen with the route they tried to access
      if (error.response && error.response.status === 403) {
        dispatch(accessDenied(window.location.pathname));
      }
    })
    // this finally block runs regardless of whether the api request is succesfull or not
    .finally(() => {
      if (label) {
        //
        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
