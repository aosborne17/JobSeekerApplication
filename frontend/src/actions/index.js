// import store from '../store';
import {
  SET_LOGIN_DETAILS,
  API,
  FETCH_ARTICLE_DETAILS,
  FETCH_LOADING_DETAILS,
} from './types';

// export function fetchArticleDetails() {
//   return apiAction({
//     url: 'https://api.myjson.com/bins/19dtxc',
//     onSuccess: setArticleDetails,
//     onFailure: () => console.log('Error occured loading articles'),
//     label: FETCH_ARTICLE_DETAILS,
//   });
// }

// ES6 version

export const postLoginDetails = ({ username, password }) =>
  apiAction({
    // so all we have to do is pass in the corresponding url for the backend request imm trying to do
    url: '/api/v1/users',
    method: 'POST',
    data: { username, password },
    onSuccess: setLoginDetails,
    onFailure: () => console.log('Error occured logging in'),
    label: FETCH_LOADING_DETAILS,
  });

function setLoginDetails(data) {
  console.log(data);
  return {
    type: SET_LOGIN_DETAILS,
    payload: data,
  };
}

export const fetchAllPosts = () =>
  apiAction({
    // I haven't yet tried but this should work effectively
    // its a get reqpuest to get all posts so I dont need to pass data in
    url: '/api/posts',
    onSuccess: setAllPosts,
    onFailure: () => console.log('Error occured loading Posts'),
    label: FETCH_ARTICLE_DETAILS,
  });

const setAllPosts = (data) => {
  return {
    type: 'GET_POSTS',
    payload: data,
  };
};

// this gives us default values so we only gotta change the ones we need to change
function apiAction({
  url = '',
  method = 'GET',
  data = null,
  // the real question is, I need to somehow get that bearer token and place it in here
  accessToken = null, // accessToken = store.userLogin.userInfo.token
  onSuccess = () => {},
  onFailure = () => {},
  label = '',
  headersOverride = null,
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride,
    },
  };
}
