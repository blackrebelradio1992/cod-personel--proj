// WelcomePage.js
import React from "react";

const WelcomePage = ({ username }) => {
    return (
        <div className="user-welcome centered-content">
            <h1>Welcome, {username}!</h1>
            <p> Please feel free to check out your stats.</p>
        </div>
    );
};

export default WelcomePage;
