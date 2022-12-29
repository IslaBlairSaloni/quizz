import React from 'react';
import styles from './Question.module.css';
const Question = ({ currentQuestion }) => {
    return (
        <>
            <div className="container">
                <div className={`${styles.yellow} p-5 yellow `}>
                    <div className={`${styles.grey}`}>
                        <h2>{`Q${currentQuestion.id}`}</h2>
                    </div>

                    <div>
                        <p className="text-center h3">
                            {currentQuestion.question}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Question;
