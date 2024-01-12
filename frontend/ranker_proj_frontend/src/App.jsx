import React, { useState } from "react";
import UserForm from "./components/UserForm";
import WelcomePage from "./components/userwelcom";
import CustomNavbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import './App.css';

const App = () => {
    

    return (
        <div>
            <div>
                <CustomNavbar />
            </div>
            <div>
                <Outlet />
            </div>
            
        </div>
    );
};

export default App;
