import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        cod_sso_token: '',
        gamer_tag: '',
        cod_platform: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/users/', formData);
            console.log('User created successfully:', response.data);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <div>
            <h1>
            User Registration
            </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="user_name" onChange={handleChange} />
                </label><br />
                <label>
                    SSO Token:
                    <input type="text" name="cod_sso_token" onChange={handleChange} />
                </label><br />
                <label>
                    Gamer Tag:
                    <input type="text" name="gamer_tag" onChange={handleChange} />
                </label><br />
                <label for="platforms">Choose a platform:</label>
                <select id="platforms" name="cod_platform" onChange={handleChange}>
                    <option value="all">All</option>
                    <option value="battlenet">Battlenet</option>
                    <option value="psn">PSN</option>
                    <option value="steam">Steam</option>
                    <option value="uno">Uno</option>
                    <option value="xbox">XBOX</option>
                </select><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>

      );
};

export default UserForm;