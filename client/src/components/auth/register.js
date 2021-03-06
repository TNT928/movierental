import React, {Fragment, useState} from 'react';
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {setAlert }from '../../actions/alert'
import {register }from '../../actions/auth'
import PropTypes from 'prop-types'



const Register = ({setAlert, register ,isAuthenticated}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const [hidden, setHidden] = useState(true)

  const {name, email, password, password2} = formData;
  const onChange = (e) =>
    setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', "danger");
    } else {
  
        register({name, email, password})
    }
  };

  const onClick = () =>{
    setHidden(!hidden)
    console.log('clicked')
  } 

  if(isAuthenticated){
    return <Redirect to='/'/>
  }
  return (
    <Fragment>
      
    <p className='title'>Sign up for an account</p>
      <div className="box">
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => onChange(e)}
            name="name"
            type="text"
      
          />
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
           
          />
          <i className="far fa-2x fa-eye eyecon" onClick={onClick}></i>
          <input
          className='password'
            placeholder="Confirm Password"
            value={password2}
            onChange={(e) => onChange(e)}
            name="password2"
            type={hidden ? 'password' :'text' }
           
          />
          <button value='Register'>Sign Up</button>
        </form>
      </div>
      <p className='loginlink'>Already a user? <Link to= '/login'>Click here</Link></p>

    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}
const mapStateToProps  = state =>({
  isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps,{setAlert, register})(Register);
