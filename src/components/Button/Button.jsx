import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, onClick, selectedAnswer, answerId }) => {
    return (
        <button
            className={`${styles.button} ${
                answerId === selectedAnswer ? styles.selected : ''
            }`}
            onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
