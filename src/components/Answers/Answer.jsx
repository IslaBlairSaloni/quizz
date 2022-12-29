import React from 'react';
import Button from '../Button/Button';

const Answer = ({ currentQuestion, handleAnswerClick, selectedAnswer }) => {
    return (
        <div className="my-2 p-5 d-flex justify-content-start flex-column">
            {currentQuestion.answers.map((answer) => (
                <Button
                    key={answer.id}
                    text={answer.text}
                    onClick={() => handleAnswerClick(answer.id)}
                    selectedAnswer={selectedAnswer}
                    answerId={answer.id}
                />
            ))}
        </div>
    );
};

export default Answer;
