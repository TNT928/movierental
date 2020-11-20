import {GET_MOVIES, MOVIE_ERROR, SEARCH_MOVIES, GET_SINGLE_MOVIE, SAVE_MOVIE, GET_WISHLIST, REMOVE_MOVIE} from './types';
import axios from 'axios';
import {setAlert} from './alert';
import setAuthToken from '../utilties/setAuthToken'

export const searchMovies = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIES,
    payload: text,
  });
};

export const saveMovie = (options) =>  async (dispatch) => {

try {
  await axios.post('/wishlist', options) 
  dispatch({
    type: SAVE_MOVIE,
    payload: options,
  });
  
} catch (error) {
  console.error(error.message)
  
}

 
};

export const removeMovie = (id) => async dispatch => {
  try {
    await axios.delete(`/wishlist/${id}/delete`)
    dispatch({
      type: REMOVE_MOVIE,
      payload:id
    })
  } catch (error) {
    console.log('unable to delete movie')
    console.error(error)
  }
}


export const getWishlist = () => async dispatch => {
  try {
    setAuthToken(localStorage.token)
    const res = await axios.get('/wishlist')
    dispatch({
      type: GET_WISHLIST,
      payload: res.data
    })
  } catch (error) {
    
  }
}

export const getMovies = (text) => async (dispatch) => {
  try {
    delete axios.defaults.headers.common['auth-token'];
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie/?api_key=${process.env.REACT_APP_API_KEY}&language=en-us&page=1&include_adult&query=${text}`
    );
    setAuthToken(localStorage.token)
    
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
    setAuthToken(localStorage.token)
    
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

