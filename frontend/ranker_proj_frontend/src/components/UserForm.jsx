import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        password: '',
        cod_sso_token: '',
        gamer_tag: '',
        cod_platform: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Ensure this URL is correct according to your server's endpoint
            const response = await axios.post('http://localhost:8000/user/users/create/', formData);
            setSuccessMessage('User created successfully!');
            setErrorMessage('');
            console.log('User created successfully:', response.data);
        } catch (error) {
            setSuccessMessage('');
            setErrorMessage('Error creating user. Please check your input.');
            console.error('Error creating user:', error);
        }
    };

    return (
        <div className="user-form centered-content">
            <h1>User Registration</h1>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                {/* Form inputs */}
                <button className='metal' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserForm;
