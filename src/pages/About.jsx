import React from 'react';
import aboutImg from '../assets/about.png';
const About = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="d-flex justify-content-center align-items-center">
                        <p className="h2 my-5">
                            WE ARE A GREAT COMMUNITY FOR EXPLORING YOU KNOWLEDGE
                        </p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={aboutImg} alt="about" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
