import React from 'react';
import styles from './Navigation.module.css';

const NavigationButtons = ({
    previousHandler,
    submitHandler,
    currentQuestionIndex,
    questionsLength,
}) => {
    return (
        <>
            <div className=" d-flex justify-content-evenly">
                <button
                    className={` ${styles.customBtn}`}
                    onClick={previousHandler}>
                    Previous
                </button>
                <button
                    className={` ${styles.customBtn}`}
                    onClick={submitHandler}>
                    Submit
                </button>
                <button
                    className={` ${styles.customBtn}`}
                    onClick={previousHandler}>
                    Next
                </button>
            </div>
        </>
    );
};

export default NavigationButtons;
