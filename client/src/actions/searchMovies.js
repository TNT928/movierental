import {GET_MOVIES, MOVIE_ERROR, SEARCH_MOVIES} from './types';


export const searchMovies = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIES,
    payload: text
  });
};


