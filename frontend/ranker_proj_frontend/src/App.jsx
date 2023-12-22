import React, { useState } from "react";
import UserForm from "./components/UserForm";
import WelcomePage from "./components/userwelcom";

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState('');

    // You may have a function to check authentication status and set the state

    return (
        <div>
            {authenticated ? (
                <WelcomePage username={username} />
            ) : (
                <UserForm setAuthenticated={setAuthenticated} setUsername={setUsername} />
            )}
        </div>
    );
};

export default App;