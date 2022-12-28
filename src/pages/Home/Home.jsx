import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className="container w-75 p-5">
            <div className="d-flex  justify-content-evenly">
                <Link to="single">
                    <button className={styles.btnClass}>TIMED QUIZ</button>
                </Link>
                <button className={styles.btnClass}>UNTIMED QUIZZ</button>
            </div>
            <div className="d-flex  justify-content-evenly mt-5">
                <button className={styles.btnClass}>CREATE QUIZ</button>
                <button className={styles.btnClass}>USE LINK</button>
            </div>
        </div>
    );
};

export default Home;
