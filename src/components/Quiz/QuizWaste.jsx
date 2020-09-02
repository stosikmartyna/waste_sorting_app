import React from 'react';
import { wasteContainer } from './Quiz.styles';

export const QuizWaste = ({randomWaste}) => {
    return (
        <div className={wasteContainer}>
            <img src={randomWaste.img} alt={randomWaste.name}/> 
            <div>
                <h3>{randomWaste.name}</h3>
                <p>{randomWaste.description}</p>
            </div>
        </div>
    )
}