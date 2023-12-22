import React, { useState } from "react";
import UserForm from "./components/UserForm";
import WelcomePage from "./components/userwelcom";
import CustomNavbar from "./components/Navbar";

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState('');

    // You may have a function to check authentication status and set the state

    return (
        <div>
          <div>
            <CustomNavbar />
          </div>
            {authenticated ? (
                <WelcomePage username={username} />
            ) : (
                <UserForm setAuthenticated={setAuthenticated} setUsername={setUsername} />
            )}
        </div>
    );
};

export default App;