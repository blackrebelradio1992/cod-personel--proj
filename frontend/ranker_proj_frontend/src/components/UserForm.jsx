import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        password: '', // Added password field
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
                <label>
                    Username:
                    <input type="text" name="user_name" onChange={handleChange} />
                </label><br />
                <label>
                    Password:
                    <input type="password" name="password" onChange={handleChange} />
                </label><br />
                <label>
                    SSO Token:
                    <input type="text" name="cod_sso_token" onChange={handleChange} />
                </label><br />
                <label>
                    Gamer Tag:
                    <input type="text" name="gamer_tag" onChange={handleChange} />
                </label><br />
                <label id="platforms">Choose a platform:</label>
                <select id="platforms" name="cod_platform" onChange={handleChange}>
                    <option>Choose Your Platform</option>
                    <option value="all">All</option>
                    <option value="battlenet">Battlenet</option>
                    <option value="psn">Playstation</option>
                    <option value="steam">Steam</option>
                    <option value="uno">Uno</option>
                    <option value="xbox">XBOX</option>
                </select><br />
                <button className='metal' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserForm;
