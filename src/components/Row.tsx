import React, { FC } from 'react';

type RowProps = {
    icon: string;
    category: string;
    score: number;
};

const Row: FC<RowProps> = (props) => {
    const { icon, category, score } = props;
    return (
        <div className='row__container'>
            <div className='row__flexgroup'>
                <img src={icon} alt='icon' />
                <h3>{category}</h3>
            </div>
            <div className='row__flexgroup'>

                <p className='category__color'>{score} /<span>100</span></p>
            </div>
        </div>
    );
};

export default Row;