import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
   
    email: '',
    password: '',
    
  });

  const { email, password,} = formData;
  const onChange = (e) =>
    setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      console.log('Please enter a password');
    } else {
        console.log('Success')
    }
  };
  return (
    <Fragment>
    <p className='pagetitle'>Sign In</p>
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
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => onChange(e)}
            name="password"
            type="text"
            minLength="6"
          />
         
          <button value={Login}>Login</button>
       
        </form>
      </div>  
      <p className='loginlink'>Don't have an account? <Link  to= '/register'>Sign up here</Link></p>
 
    </Fragment>
  );
};

export default Login;
