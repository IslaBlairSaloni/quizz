import React, { useState, useEffect, useMemo } from 'react';
import Complete from '../CompletedQuiz/Complete';
import data from '../../../records';
import Question from '../Question/Question';
import Answer from '../Answers/Answer';
import NavigationButtons from '../NavigationButtons/NavigationButtons';

const Single = () => {
    const [questions] = useState(data);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerClick = (answerId) => {
        setSelectedAnswer(answerId);
        if (
            answerId === currentQuestion.correctAnswerId &&
            answerId !== score
        ) {
            setScore(score + 1);
        }
        // setCurrentQuestionIndex(currentQuestionIndex + 1);\
        console.log(selectedAnswer);
        setAnswered(true);
    };

    // When the submit button is clicked
    const submitHandler = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    useEffect(() => {
        setAnswered(false);
    }, [currentQuestionIndex]);

    useEffect(() => {
        setTimeout(() => {
            setSelectedAnswer(null);
        }, 100);
    }, [currentQuestionIndex]);

    // When the previous button is clicked
    const previousHandler = () => {
        setAnswered(false);
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    // For the current question
    const currentQuestion = useMemo(
        () => questions[currentQuestionIndex],
        [currentQuestionIndex]
    );

    return (
        <>
            <div className="my-5">
                {currentQuestion ? (
                    <div>
                        {/* Question Component */}
                        <Question currentQuestion={currentQuestion} />
                        {/* Answers Component */}
                        <Answer
                            currentQuestion={currentQuestion}
                            handleAnswerClick={handleAnswerClick}
                            selectedAnswer={selectedAnswer}
                        />
                        {/* Navigation Buttons */}

                        <NavigationButtons
                            previousHandler={previousHandler}
                            submitHandler={submitHandler}
                            currentQuestionIndex={currentQuestionIndex}
                            questionsLength={questions.length}
                        />
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
