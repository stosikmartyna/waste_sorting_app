import React from 'react';
import { answerLabel, randomWasteWrapper } from './Quiz.styles';

export const QuizAnswerLabel = ({randomWaste, isAnswerCorrect, setIsAnswerCorrect, getRandomElement}) => {
    const handleButtonClick = () => {
        getRandomElement()
        setIsAnswerCorrect(undefined)
    } 

    const dataTestId = `${isAnswerCorrect ? 'correct' : 'wrong'}-answer-label`

    return (
        <div className={answerLabel(isAnswerCorrect)} data-testid={dataTestId}>
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