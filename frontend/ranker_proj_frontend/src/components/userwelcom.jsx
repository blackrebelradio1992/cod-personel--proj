// WelcomePage.js
import React from "react";

const WelcomePage = ({ username }) => {
    return (
        <div>
            <h1>Welcome, {username}!</h1>
            <p>This is your personalized welcome page. Customize it based on your application's features.</p>
        </div>
    );
};

export default WelcomePage;
