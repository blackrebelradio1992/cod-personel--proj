import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserPage = ({ onDelete }) => {
  const [formData, setFormData] = useState({
    id: null,
    user_name: '',
    gamer_tag: '',
    cod_platform: '',
  });
  const [loading, setLoading] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState(null);
  const [otherProfileData, setOtherProfileData] = useState(null);

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:8000/user/users/${userId}/`)
        .then(response => {
          setFormData(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update user logic here
  };

  const handleDeleteClick = () => {
    const isConfirmed = window.confirm('Are you sure you want to delete your profile?');
    if (isConfirmed) {
      // Delete user logic here
    }
  };

  const handleChangePasswordClick = () => {
    setShowChangePassword(true);
  };

  const handleConfirmPasswordChange = async (e) => {
    e.preventDefault();
    // Change password logic here
  };

  const handleGetUserIdClick = () => {
    // Get user ID by username logic here
  };

  return (
    <div className="user-page centered-content">
      <h1>Edit User Information</h1>
      <div>
        <h2>Current User Information</h2>
        <p>User ID: {formData.id}</p>
        <p>User Name: {formData.user_name}</p>
        <p>Gamer Tag: {formData.gamer_tag}</p>
        <p>Platform: {formData.cod_platform}</p>
      </div>
      <form onSubmit={handleSubmit}>
        {/* User Info Form Fields */}
      </form>
      <div>
        <button onClick={handleChangePasswordClick}>Change Password</button>
      </div>
      {showChangePassword && (
        <div>
          <h3>Change Password</h3>
          <form onSubmit={handleConfirmPasswordChange}>
            {/* Change Password Form Fields */}
          </form>
        </div>
      )}
      <div>
        <button onClick={handleDeleteClick}>Delete Profile</button>
      </div>
    </div>
  );
};

export default UserPage;
