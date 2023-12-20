// ModernWarfare2Component.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ModernWarfare2Component = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    // Define form fields here
  });

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/modernwarfare2/');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/modernwarfare2/', formData);
      // Handle success, e.g., update state or show a notification
      console.log('Data posted successfully:', response.data);

      // Refetch data to display the updated list
      fetchData();
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h1>Modern Warfare 2 Data</h1>
      {/* Display cards for each data item */}
      {data.map(item => (
        <div key={item.id} className="card">
          {/* Display relevant data from the item */}
          <p>ID: {item.id}</p>
          {/* Add other fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default ModernWarfare2Component;
