import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="container border my-5 p-5 d-flex justify-content-center align-items-center flex-column">
            <h2>LOGIN</h2>
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
                <div className="d-flex justify-content-between">
                    <button className={` ${styles.customBtn}`}>Submit</button>
                    <Link>forgot password?</Link>
                </div>
            </form>
            <Link>new user? Signup</Link>
        </div>
    );
};

export default Login;
