export const GET_SONGS = "GET_SONGS";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const PLAY_SONG = "PLAY_SONG";

export const getSongsAsyncAction = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data); // => return an object from the fetch
        dispatch({
          type: GET_SONGS,
          payload: data.data, //extract the array from the obj
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToFavAction = (song) => {
  return {
    type: ADD_TO_FAV,
    payload: song,
  };
};
export const removeFromFavAction = (id) => {
  return {
    type: REMOVE_FROM_FAV,
    payload: id,
  };
};

export const musicPlayerAction = (song) => {
  return {
    type: PLAY_SONG,
    payload: song,
  };
};
