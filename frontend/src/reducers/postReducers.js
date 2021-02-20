import { CREATE_POST, UNCREATE_POST } from '../constants/postConstants';

export const createPostReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { create: true };

    case UNCREATE_POST: {
      return {};
    }

    default:
      return state;
  }
};
