import React from 'react';
import img from '../../assets/back.png';
import './Complete.css';
const Complete = (props) => {
    return (
        <div className="completedScore">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p className="result">
                    <p>
                        You have completed the quizz! Your score is{' '}
                        {props.score} out of 2;
                    </p>
                </p>
            </div>
        </div>
    );
};

export default Complete;
