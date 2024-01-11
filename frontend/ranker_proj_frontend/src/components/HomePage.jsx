import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import codbackground1 from "../Photos/codbackground1.jpeg";
// https://www.gamereactor.cn/media/36/calldutyvil_3703693b.jpg


function HomePage(){
    // const backgroundStyle = {
    //     backgroundImage: `url(${frontend/ranker_proj_frontend/src/Photos/codbackground1.jpeg})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     height: '100vh', // Adjust the height based on your design
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     color: 'white', // Text color on top of the background
    //   };

    return(
        <div >
            <h1>
                Call of Duty Ranker
            </h1>
            <Link to="/signup">
                <button style={{ marginTop: '20px' }}>User Signp</button>
            </Link>
        </div>
    );
}

export default HomePage;