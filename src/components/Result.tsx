import React, { FC } from 'react';

const Result: FC = () => {
    return (
        <div className='card__container'>
            <h3>Your Result</h3>
            <div className='card__score'>
                <div className='card__result'>
                    <h1>76</h1>
                    <span>of 100</span>
                </div>
            </div>
            <h2>Great</h2>
            <p> You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    );
};

export default Result;