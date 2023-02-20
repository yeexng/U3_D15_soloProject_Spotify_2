import { PLAY_SONG } from "../actions";

const initialState = {
  song: [],
};

const musicPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG: {
      return {
        ...state,
        song: action.payload,
      };
    }
    default:
      return state;
  }
};

export default musicPlayerReducer;
