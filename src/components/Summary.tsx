import React from 'react';
import Row from './Row';
import data from '../../data.json';

const Summary = () => {
    return (
        <div className='summary__container'>
            <h2>Summary</h2>
            {
                data.map((x, i) => (
                    <Row key={i} icon={x.icon} category={x.category} score={x.score} />
                ))
            }
            <button className='summary__button'>Continue</button>
        </div>
    );

};

export default Summary;