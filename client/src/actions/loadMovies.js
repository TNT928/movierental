import {LOAD_MOVIES, MOVIE_ERROR} from './types';
import axios from 'axios';


export const loadMovies = () => async (dispatch) => {
  try {
    delete axios.defaults.headers.common['auth-token'];
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
    );


    dispatch({
      type: LOAD_MOVIES,
      payload: res.data.results
    });

   
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: null
    })
    console.error(err.message);
  }
};
