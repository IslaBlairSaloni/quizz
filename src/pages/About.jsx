import React from 'react';
import aboutImg from '../assets/about.png';
import styles from './About.module.css';
const About = () => {
    return (
        <div className="row m-0">
            <div className="col-lg-6  d-flex justify-content-center align-items-center ">
                <div className={`${styles.left__heading}`}>
                    <p className={`h2 my-5`}>Made With Love N Support</p>
                </div>
            </div>
            <div className="col-lg-6  d-flex justify-content-center align-items-center">
                <div>
                    <img src={aboutImg} alt="about" />
                </div>
            </div>
        </div>
    );
};

export default About;
