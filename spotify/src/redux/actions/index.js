export const GET_SONGS = "GET_SONGS";

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
