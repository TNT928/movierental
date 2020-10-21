import {GET_MOVIES, MOVIE_ERROR, SEARCH_MOVIES} from './types';
import axios from 'axios';

export const searchMovies = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIES,
    payload: text,
  });
};

export const getMovies = (text) => async (dispatch) => {

  try {
    const res = await axios.get(
      `https://api.themoviedb.org/4/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-us&page=1&include_adult&query=${text}`);
  
    dispatch({
      type: GET_MOVIES,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
