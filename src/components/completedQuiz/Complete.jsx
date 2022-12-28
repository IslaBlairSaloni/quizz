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

            <p
                className={`${styles.result} d-flex flex-column align-items-center`}>
                Your Score
                <span>{props.score}</span>
            </p>

            <Link to="/">Play Again</Link>
        </div>
    );
};

export default Complete;
