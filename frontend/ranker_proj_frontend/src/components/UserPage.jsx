// UserPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserPage = () => {
  const [formData, setFormData] = useState({
    id: null,
    user_name: '',
    gamer_tag: '',
    cod_platform: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch user information from the backend and populate the form
    axios.get('http://localhost:8000/api/users/1/')  // Use the appropriate user ID
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Make a PUT request to update user information
    axios.put(`http://localhost:8000/api/users/${formData.id}/`, formData)
      .then(response => {
        // Handle successful update
        console.log('User information updated successfully:', response.data);
        setLoading(false);
      })
      .catch(error => {
        // Handle error
        console.error('Error updating user information:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Edit User Information</h1>
      <div>
        <h2>Current User Information</h2>
        <p>User ID: {formData.id}</p>
        <p>User Name: {formData.user_name}</p>
        <p>Gamer Tag: {formData.gamer_tag}</p>
        <p>Platform: {formData.cod_platform}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
          />
        </label><br />
        <label>
          Gamer Tag:
          <input
            type="text"
            name="gamer_tag"
            value={formData.gamer_tag}
            onChange={handleChange}
          />
        </label><br />
        <label>
          Platform:
          <input
            type="text"
            name="cod_platform"
            value={formData.cod_platform}
            onChange={handleChange}
          />
        </label><br />
        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update User Info'}
        </button>
      </form>
    </div>
  );
};

export default UserPage;
