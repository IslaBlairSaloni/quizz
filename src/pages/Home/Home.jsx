import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-lg-6 d-flex justify-content-center  my-5">
                    <Link to="single">
                        <button className={styles.btnClass}>TIMED QUIZ</button>
                    </Link>
                </div>
                <div className="col-lg-6 d-flex justify-content-center  my-5">
                    <Link>
                        <button className={styles.btnClass}>
                            UNTIMED QUIZZ
                        </button>
                    </Link>
                </div>

                <div className="col-lg-6 d-flex justify-content-center my-5">
                    <Link>
                        <button className={styles.btnClass}>CREATE QUIZ</button>
                    </Link>
                </div>
                <div className="col-lg-6 d-flex justify-content-center my-5">
                    <Link>
                        <button className={styles.btnClass}>USE LINK</button>
                    </Link>
                </div>
            </div>
            <div />
        </div>
    );
};

export default Home;
