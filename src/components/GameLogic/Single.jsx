import React, { useState } from 'react';
import styles from './Single.module.css';
import Complete from '../completedQuiz/Complete';

const Single = () => {
    const [questions] = useState([
        {
            id: 1,
            question: 'What is my name?',
            answers: [
                { id: 1, text: 'Lokesh' },
                { id: 2, text: 'Figma' },
                { id: 3, text: 'Convert' },
                { id: 4, text: 'Hello' },
            ],
            correctAnswerId: 1,
        },
        {
            id: 2,
            question:
                'What is the correct syntax for a function in JavaScript?',
            answers: [
                { id: 1, text: 'function myFunction()' },
                { id: 2, text: 'function = myFunction()' },
                { id: 3, text: 'function: myFunction()' },
                { id: 4, text: 'function myFunction' },
            ],
            correctAnswerId: 1,
        },
        // Add more questions here...
    ]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswerClick = (answerId) => {
        const currentQuestion = questions[currentQuestionIndex];

        if (answerId === currentQuestion.correctAnswerId) {
            setScore(score + 1);
        }

        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className='my-5'>
            {currentQuestion ? (
                <div>
                    <div
                        className={`${styles.yellow} flex justify-center items-center p-5 yellow `}>
                        <p className="text-center h3">
                            {currentQuestion.question}
                        </p>
                    </div>
                    <div className="my-5 d-flex align-items-center justify-content-evenly">
                        {currentQuestion.answers.map((answer) => (
                            <button
                                className={styles.button}
                                key={answer.id}
                                onClick={() => handleAnswerClick(answer.id)}>
                                {answer.text}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="my-5 d-flex align-items-center justify-content-center">
                    <p>
                        <Complete score={score} />
                    </p>
                </div>
            )}
        </div>
    );
};

export default Single;
