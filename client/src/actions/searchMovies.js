import {GET_MOVIES, MOVIE_ERROR, SEARCH_MOVIES, GET_SINGLE_MOVIE, SAVE_MOVIE} from './types';
import axios from 'axios';
import {setAlert} from './alert';

export const searchMovies = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIES,
    payload: text,
  });
};

export const saveMovie = (movie) =>  async (dispatch) => {

//   const options = {
//     title,
//     summary,
//     image,
//     movieScore
//   }
  
// const res = await axios.post('/wishlist', options   )

  dispatch({
    type: SAVE_MOVIE,
    payload: movie,
  });
};

export const getMovies = (text) => async (dispatch) => {
  try {
    delete axios.defaults.headers.common['auth-token'];
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie/?api_key=${process.env.REACT_APP_API_KEY}&language=en-us&page=1&include_adult&query=${text}`
    );
    
    dispatch({
      type: GET_MOVIES,
      payload: res.data.results
    });

   
  } catch (err) {
    console.error(err)
    if (err) dispatch(setAlert(err.message, 'danger'));
    dispatch({
      type: MOVIE_ERROR,
      payload: err.message,
    });
  }
};
export const getSingleMovie = (id) => async (dispatch) => {
  try {
    delete axios.defaults.headers.common['auth-token'];
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    
    dispatch({
      type: GET_SINGLE_MOVIE,
      payload: res.data
    });

   
  } catch (err) {
    console.error(err)
    if (err) dispatch(setAlert(err.message, 'danger'));
    dispatch({
      type: MOVIE_ERROR,
      payload: err.message,
    });
  }
};

