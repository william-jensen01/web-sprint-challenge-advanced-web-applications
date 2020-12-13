import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    username: '',
    passowrd: ''
  });

  const handleChanges = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/login', loginData)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      history.push('/bubbles')
    })
    .catch(err => {
      console.log(err)
    })  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Please Login</h4>
        <label>Username:
        <input
          id='username'
          name='username'
          value={loginData.username}
          onChange={handleChanges}
        /></label>

        <label>Password:
        <input
          id='password'
          name='password'
          type='password'
          value={loginData.password}
          onChange={handleChanges}
        /></label>

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
