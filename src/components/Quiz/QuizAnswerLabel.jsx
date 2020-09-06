import React from 'react';
import { answerLabel, randomWasteWrapper } from './Quiz.styles';

export const QuizAnswerLabel = ({randomWaste, isAnswerCorrect, setIsAnswerCorrect, getRandomElement}) => {
    const handleButtonClick = () => {
        getRandomElement()
        setIsAnswerCorrect(undefined)
    } 

    return (
        <div className={answerLabel(isAnswerCorrect)}>
            <img src={isAnswerCorrect ? 'icons/correct.png' : 'icons/error.png'} alt={randomWaste.name}/> 
            <div className={randomWasteWrapper(isAnswerCorrect)}>
                <h3>{randomWaste.name}</h3>
                <span>{randomWaste.description}</span>
            </div>
            {isAnswerCorrect && (
                <button onClick={handleButtonClick}>
                    Dalej
                </button>
            )}
        </div>
    )
}