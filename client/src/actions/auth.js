import axios from 'axios';
import {REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED,AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL} from './types';
import {setAlert} from './alert';
import setAuthToken from '../utilties/setAuthToken'

// Load user

export const loadUser = () => async dispatch =>{
if(localStorage.token){
  setAuthToken(localStorage.token  )

}
try {
  const res = await axios.get('/login')
  dispatch({
    type: USER_LOADED,
    payload: res.data
  })
} catch (err) {
  dispatch({
    type: AUTH_ERROR
  })
}
}
// register user
export const register = ({name, email, password}) => async (dispatch) => {
 
  const body = ({name, email, password});

  try {
    const res = await axios.post('/register', body);
    
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser())
  
  } catch (err) {
    const errors = err.response.data.errors
 

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  }}

// login user
export const login = (email, password) => async (dispatch) => {
 
  const body = ({email, password});

  try {
    const res = await axios.post('/login', body);
    
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser())
  
  } catch (err) {
    const errors = err.response.data.errors
 

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));

      dispatch({
        type: LOGIN_FAIL,
      });
    }
  }
}
