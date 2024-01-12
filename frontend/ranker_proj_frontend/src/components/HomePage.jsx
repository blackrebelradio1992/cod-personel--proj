import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='home-page centered-content'>
            <h1>Call of Duty Ranker</h1>
            <Link to="/signup">
                <button className='metal' style={{ marginTop: '20px', marginRight: '10px' }}>User Signup</button>
            </Link>
            <Link to="/login">
                <button className='metal' style={{ marginTop: '20px' }}>Login</button>
            </Link>
        </div>
    );
}

export default HomePage;
