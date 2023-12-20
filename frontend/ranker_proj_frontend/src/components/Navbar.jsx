import React, { useState } from 'react';
import { Link, useNavigation } from "react-router-dom";

function customNavbar(){
  return(
    <>
      <nav>
        <h1>
          Gamer Ranker
        </h1>
        <Link to="/">Home</Link>
        <Link to="/signup">User Signup</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </>
  );
}

export default customNavbar;