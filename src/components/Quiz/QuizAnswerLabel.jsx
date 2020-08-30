import React from 'react';
import { answerLabel } from './Quiz.styles';

export const QuizAnswerLabel = ({randomWaste, isAnswerCorrect, setIsAnswerCorrect, getRandomElement}) => {
    const handleButtonClick = () => {
        getRandomElement()
        setIsAnswerCorrect(undefined)
    } 

    return (
        <div className={answerLabel(isAnswerCorrect)}>
            <img src={isAnswerCorrect ? 'icons/correct.png' : 'icons/error.png'} alt={randomWaste.name}/> 
            <div>
                <h3>{randomWaste.name}</h3>
                <p>{randomWaste.description}</p>
            </div>
            <button disabled={!isAnswerCorrect} onClick={handleButtonClick}>
                Dalej
            </button>
        </div>
    )
}