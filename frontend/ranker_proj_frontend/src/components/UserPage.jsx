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
      // Fetch user information from the backend and populate the form
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

    try {
        const response = await axios.post('http://localhost:8000/user/users/create', formData);
        console.log('User created successfully:', response.data);

        // Set authentication status and username
        setAuthenticated(true);
        setUsername(response.data.user_name);

        // Redirect to the welcome page or update the state to render the welcome page
        // You may use React Router for redirection
    } catch (error) {
        // Existing error handling...
    }
};

  const handleDeleteClick = () => {
    const isConfirmed = window.confirm('Are you sure you want to delete your profile?');

    if (isConfirmed) {
      // Call the backend API to delete the user profile
      axios.delete(`http://localhost:8000/user/users/${userId}/delete/`)
        .then(() => {
          // Inform the parent component (or handle deletion as needed)
          onDelete();
          console.log('Profile deleted successfully');
        })
        .catch(error => {
          console.error('Error deleting profile:', error);
        });
    }
  };

  const handleChangePasswordClick = () => {
    setShowChangePassword(true);
  };

  const handleConfirmPasswordChange = () => {
    // Call the backend API to change the password
    axios.post(`http://localhost:8000/user/users/${userId}/change-password/`, {
      old_password: oldPassword,
      new_password: newPassword,
    })
    .then(response => {
      // Optionally, you can handle the success case, e.g., show a success message
      console.log(response.data.message);
      // You may want to hide the change password fields after a successful change
      setShowChangePassword(false);
    })
    .catch(error => {
      console.error('Error changing password:', error);
    });
  };

  const handleGetUserIdClick = () => {
    // Call the backend API to get the user ID by username
    axios.get(`http://localhost:8000/user/get-user-id-by-username/${username}/`)
      .then(response => {
        setUserId(response.data.user_id);

        // Optionally, you can call another API endpoint to get other profile data based on the user ID
        axios.get(`http://localhost:8000/user/users/${response.data.user_id}/`)
          .then(profileResponse => {
            setOtherProfileData(profileResponse.data);
          })
          .catch(error => {
            console.error('Error fetching other profile data:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching user ID by username:', error);
        // Optionally, you can handle the error case, e.g., show an error message
      });
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
        <label>
          User Name:
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
          />
          <button className='metal' type="button" onClick={handleGetUserIdClick}>Get User ID</button>
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
          <select
            type="text"
            id="platforms"
            name="cod_platform"
            value={formData.cod_platform}
            onChange={handleChange}
          >
            <option>Choose Your Platform</option>
            <option value="all">All</option>
            <option value="battlenet">Battlenet</option>
            <option value="psn">Playstation</option>
            <option value="steam">Steam</option>
            <option value="uno">Uno</option>
            <option value="xbox">XBOX</option>
          </select>
        </label><br />
        <button className='metal' type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update User Info'}
        </button>
      </form>
      <div>
        <button className='metal' onClick={handleChangePasswordClick}>Change Password</button>
      </div>
      {showChangePassword && (
        <div>
          <div>
            <label>Old Password: </label>
            <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
          </div>
          <div>
            <label>New Password: </label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          </div>
          <button className='metal' onClick={handleConfirmPasswordChange}>Confirm Change</button>
        </div>
      )}
      <div>
        <button className='metal' onClick={handleDeleteClick}>Delete Profile</button>
      </div>
    </div>
  );
};

export default UserPage;
