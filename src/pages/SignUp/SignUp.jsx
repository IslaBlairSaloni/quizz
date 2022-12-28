import React from 'react';
import styles from './SignUp.module.css';

const SignUp = () => {
    return (
        <div className="container border my-5 p-5 d-flex justify-content-center align-items-center flex-column">
            <h2>SIGN UP</h2>
            <form>
                <div className="my-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className={`form-control ${styles.input}`}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className={`form-control ${styles.input}`}
                        id="exampleInputPassword1"
                    />
                </div>
                <button className={` ${styles.customBtn}`}>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
