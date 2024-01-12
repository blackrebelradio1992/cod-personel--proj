// ModernWarfare2Component.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserStats from './ModernWarfare2PlayerStats';

const ModernWarfare2Component = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    gamer_tag: '',
    // Add other form fields as needed
  });

  const [ssoToken, setSsoToken] = useState(null);

  const authenticateAndFetchData = async () => {
    try {
      // Step 1: Authenticate with your local backend to get the SSO token
      const authResponse = await axios.post('http://localhost:8000/api/authenticate', formData);
      const token = authResponse.data.ssoToken;

      // Step 2: Set the obtained SSO token in the component state
      setSsoToken(token);

      // Step 3: Fetch data from the Call of Duty API using the SSO token
      const apiResponse = await axios.get('http://localhost:8000/api/modernwarfare2/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Step 4: Update state with the fetched data
      setData(apiResponse.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (ssoToken) {
      // If SSO token is already available (e.g., user is logged in), fetch data
      fetchData();
    }
  }, [ssoToken]);

  const fetchData = async () => {
    try {
      // Fetch data from the Call of Duty API using the SSO token
      const response = await axios.get('http://localhost:8000/api/modernwarfare2/', {
        headers: {
          Authorization: `Bearer ${ssoToken}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the function to authenticate and fetch data
    authenticateAndFetchData();
  };

  return (
    <div className="mw2-page centered-content">
      <h1>Modern Warfare 2 Data</h1>
      {/* Display cards for each data item */}
      {data.map(item => (
        <div key={item.id} className="card">
          <p>ID: {item.id}</p>
          <p>Username: {item.username}</p>
          <p>K/D Ratio: {item.kdRatio}</p>
          <p>Total Kills: {item.totalKills}</p>
          {/* Add other fields as needed */}
        </div>
      ))}

      {/* Add a form for submitting data */}
      <form onSubmit={handleSubmit}>
        <label>
          Gamer Tag:
          <input type="text" value={formData.gamer_tag} onChange={(e) => setFormData({ ...formData, gamer_tag: e.target.value })} />
        </label>
        {/* Add other form fields as needed */}
        <button className='metal' type="submit">Submit</button>
      </form>
      <div>
        <UserStats />
      </div>
    </div>
  );
};

export default ModernWarfare2Component;

