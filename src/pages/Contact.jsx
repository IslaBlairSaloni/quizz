import React from 'react';
import aboutImg from '../assets/about.png';
const Contact = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="d-flex justify-content-center align-items-center">
                        <p className="h2 my-5">CONTACT FOR MORE DETAILS</p>
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

export default Contact;
