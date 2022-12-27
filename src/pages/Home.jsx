import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container w-75 p-5">
            <div className="d-flex align-items-center justify-content-between">
                <Link to="/single">
                    <button className="button">Single</button>
                </Link>
                <button className="button">Multi Player</button>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-5">
                <button className="button">Create Quiz</button>
                <button className="button">Use Link</button>
            </div>
        </div>
    );
};

export default Home;
