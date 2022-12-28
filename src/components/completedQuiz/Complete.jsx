import React from 'react';
import img from '../../assets/back.png';
import styles from './Complete.module.css';
import { Link } from 'react-router-dom';
const Complete = (props) => {
    return (
        <div className={styles.completedScore}>
            <div>
                <img src={img} alt="" />
            </div>

            <div className={styles.result}>
                <h3>Your Score</h3>
                <div>
                    <span>{props.score}</span>
                </div>
                <div>
                    <p>Out of {'2'}</p>
                </div>
            </div>

            <button className={`ms-auto ${styles.customBtn}`}>
                <Link to="/">Play Again</Link>
            </button>
        </div>
    );
};

export default Complete;
