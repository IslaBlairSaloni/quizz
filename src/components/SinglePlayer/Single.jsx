import React, { useState } from 'react';
import styles from './Single.module.css';
import Complete from '../completedQuiz/Complete';
import data from '../../../records';
const Single = () => {
    const [questions] = useState(data);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);

    const handleAnswerClick = (answerId) => {
        if (answerId === currentQuestion.correctAnswerId) {
            console.log('Correct Ans Clicked!!');

            setScore(score + 1);
        }
        // setCurrentQuestionIndex(currentQuestionIndex + 1);\
        setAnswered(true);
    };

    // When the submit button is clicked
    const submitHandler = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswered(false);
    };

    // When the previous button is clicked
    const previousHandler = () => {
        setAnswered(false);
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <>
            <div className="my-5">
                {currentQuestion ? (
                    <div>
                        <div
                            className={`${styles.yellow} flex justify-center items-center p-5 yellow `}>
                            <p className="text-center h3">
                                {currentQuestion.question}
                            </p>
                        </div>
                        <div className="my-2 p-5 d-flex justify-content-start flex-column">
                            {currentQuestion.answers.map((answer) => (
                                <button
                                    className={styles.button}
                                    key={answer.id}
                                    onClick={() => {
                                        if (!answered) {
                                            handleAnswerClick(answer.id);
                                        }
                                    }}>
                                    {answer.text}
                                </button>
                            ))}
                        </div>
                        {/* Navigation Buttons */}

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
                    </div>
                ) : (
                    <div className="my-5 d-flex align-items-center justify-content-center">
                        <Complete score={score} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Single;

//              onClick={() => handleAnswerClick(answer.id)}
