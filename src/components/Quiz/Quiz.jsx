import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { container, button } from './Quiz.styles';
import { QuizBins } from './QuizBins';
import { QuizWaste } from './QuizWaste';
import { QuizAnswerLabel } from './QuizAnswerLabel';

export const Quiz = () => {
    const [wasteData, setWasteData] = useState(undefined);
    const [randomWaste, setRandomWaste] = useState(undefined);
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(undefined);

    const getWasteData = async () => {
        try {
            const response = await axios.get('./waste.json')
            setWasteData(response.data)
        }
        catch (err) {
            console.warn(err)
        }
    }

    const handleQuizStart = () => {
        setIsQuizStarted(true);
        getRandomElement();
    }

    const getRandomElement = () => {
        const random = wasteData && wasteData[Math.floor(Math.random() * wasteData.length)]
        setRandomWaste(random);
    
        const updatedWasteData = wasteData.filter(element => element !== random);
        setWasteData(updatedWasteData);
    }

    const handleCorrectAnswer = () => {
        setIsAnswerCorrect(true);
    }

    const handleBinClick = (binType) => {
        if (isQuizStarted) {
            randomWaste.properBin === binType
                ? handleCorrectAnswer()
                : setIsAnswerCorrect(false)
        }
    }

    useEffect(() => {
        getWasteData();
    }, [])

    return (
        <div className={container}>
            <h1>Quiz</h1>
            {isQuizStarted && isAnswerCorrect === undefined
                ? <QuizWaste randomWaste={randomWaste} />
                : <h2>Sprawdź swoją wiedzę na temat segregacji śmieci</h2>
            }
            {isAnswerCorrect !== undefined && (
                <QuizAnswerLabel 
                    randomWaste={randomWaste} 
                    isAnswerCorrect={isAnswerCorrect} 
                    setIsAnswerCorrect={setIsAnswerCorrect} 
                    getRandomElement={getRandomElement} 
                />
            )}
            <QuizBins onBinClick={handleBinClick} isQuizStarted={isQuizStarted} />
            {!isQuizStarted && (
                <button className={button} onClick={handleQuizStart}>Start</button>
            )}
        </div>
    )
}