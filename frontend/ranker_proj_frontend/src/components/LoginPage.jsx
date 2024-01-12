import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(''); // Reset login error

    try {
      const response = await axios.post('http://localhost:8000/user/token/', formData);
      console.log('Login successful:', response.data);

      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);

      navigate('/profile'); // Redirect to the profile page
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError('Login failed. Please check your username and password.');
    }
  };

  return (
    <div className="login-page centered-content">
      <h1>Login</h1>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label><br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label><br />
        <button className='metal' type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
