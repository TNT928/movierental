import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../../actions/auth'
import { Link, Redirect } from 'react-router-dom';
import { getWishlist } from '../../actions/searchMovies';



const Login = ({login, isAuthenticated, getWishlist}) => {
  const [formData, setFormData] = useState({
   
    email: '',
    password: '',
    
  });

  const [hidden, setHidden] = useState(true)

 

  const { email, password,} = formData;
  const onChange = (e) =>
    setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = async (e) => {
    e.preventDefault();
     login(email, password)
     getWishlist()
  };

  const onClick = () =>{
    setHidden(!hidden)
    console.log('clicked')
  } 

  // redirect if logged in 
  if(isAuthenticated){
    return <Redirect to='/'/>
  }
  return (
    <Fragment>
  
    <p className='title'>Sign into your account</p>
      <div className="box">
        <form onSubmit={(e) => onSubmit(e)}>
         
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => onChange(e)}
            name="email"
            type="email"
          />

        <i className="far fa-2x fa-eye eyecon" onClick={onClick}></i>
          <input className='password'
           
            placeholder="Password"
            value={password}
            onChange={(e) => onChange(e)}
            name="password"
            type={hidden ? 'password' :'text' }
            minLength="6"
          />
         
          <button value='Login'>Login</button>
       
        </form>
      </div>  
      <p className='loginlink'>Don't have an account? <Link  to= '/register'>Sign up here</Link></p>
 
    </Fragment>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps  = state =>({
  isAuthenticated : state.auth.isAuthenticated
})
export default connect(mapStateToProps , {login, getWishlist})(Login)
