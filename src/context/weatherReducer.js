import { TYPE_ACTION } from "./typeAction";

export const INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
};

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case TYPE_ACTION.FETCH_START:
      return {
        loading: true,
        error: false,
        data: [],
      };
    case TYPE_ACTION.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case TYPE_ACTION.FETCH_ERROR:
      return {
        error: true,
        loading: false,
        data: [],
      };

    case TYPE_ACTION.LOCAL_STORAGE: {
      return action.payload;
    }

    default:
      return state;
  }
};
