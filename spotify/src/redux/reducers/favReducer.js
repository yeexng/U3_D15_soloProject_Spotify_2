import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions";

const initialState = {
  content: [],
};

const FavReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_FAV:
      return {
        ...state,
        content: state.content.filter((song) => song.id !== action.payload),
      };
    default:
      return state;
  }
};

export default FavReducer;
