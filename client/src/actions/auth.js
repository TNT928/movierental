import {axios} from 'axios';
import {REGISTER_FAIL, REGISTER_SUCCESS} from './types';
import {setAlert} from './alert';

// register user
export const register = ({name, email, password}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = ({name, email, password});

  try {
    const res = await axios.post('/register', body, config);
    
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  console.log(res)
  } catch (err) {
  
    const errors = err.response.data.error
 

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  }
};
