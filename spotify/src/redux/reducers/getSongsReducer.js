import { GET_SONGS } from "../actions";

const initialState = {
  stock: [],
};

const getSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        stock: action.payload, //refer to action.index.js
      };
    default:
      return state;
  }
};

export default getSongsReducer;
