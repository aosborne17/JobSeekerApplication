import { CREATE_POST, UNCREATE_POST } from '../constants/postConstants';

export const createPost = () => {
  return {
    type: CREATE_POST,
  };
};

export const uncreatePost = () => {
  return {
    type: UNCREATE_POST,
  };
};
