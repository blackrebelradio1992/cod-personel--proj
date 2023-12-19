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
        setFormData({ ...formData, [e.user_name]: string, [e.cod_sso_token]: String, [e.gamer_tag]: string, [e.cod_platform]: string})
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
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" />
            </label><br />
            <label>
                SSO Token:
                <input type="text" name="sso_token" />
            </label><br />
            <label>
                Gamer Tag:
                <input type="text" name="gamer_tag" />
            </label><br />
          <label for="cars">Choose a platform:</label>
                <select id="Platforms" name="platforms">
                <option value="all">All</option>
                <option value="battlenet">Battlenet</option>
                <option value="psn">PSN</option>
                <option value="steam">Steam</option>
                <option value="uno">Uno</option>
                <option value="xbox">XBOX</option>
                </select><br></br>
          <button type="submit">Submit</button>
        </form>
      );
};

export default UserForm;