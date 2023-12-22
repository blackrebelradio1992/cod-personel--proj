// LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/user/login/', formData);
      // Handle successful login, e.g., redirect to user dashboard
      console.log('Login successful:', response.data);
    } catch (error) {
      // Handle login error, e.g., show an error message
      console.error('Login failed:', error);
    }
  };
  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8000/user/token/', {
        username: username,
        password: password,
      });
  
      // Store the token in local storage or cookies for future requests
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
  
      // Redirect to the user page or update the state to render user information
      // You may use React Router for redirection
    } catch (error) {
      console.error('Login failed', error);
    }
  };
  
  const handleRegister = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8000/user/register/', {
        username: username,
        password: password,
      });
  
      // Store the token in local storage or cookies for future requests
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
  
      // Redirect to the user page or update the state to render user information
      // You may use React Router for redirection
    } catch (error) {
      console.error('Registration failed', error);
    }
  };    

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={handleChange} />
        </label><br />
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
