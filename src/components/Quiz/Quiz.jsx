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
        if (isQuizStarted && randomWaste) {
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
            {isQuizStarted 
                ? <h2>Wybierz odpowiedni pojemnik dla tego rodzaju odpadu</h2>
                : <h2>Sprawdź swoją wiedzę na temat segregacji śmieci</h2>
            }
            {isQuizStarted && isAnswerCorrect === undefined && randomWaste && (
               <QuizWaste randomWaste={randomWaste} />
            )}
            {isAnswerCorrect !== undefined && (
                <QuizAnswerLabel 
                    randomWaste={randomWaste} 
                    isAnswerCorrect={isAnswerCorrect} 
                    setIsAnswerCorrect={setIsAnswerCorrect} 
                    getRandomElement={getRandomElement} 
                />
            )}
            {isQuizStarted && !randomWaste && <h2>Koniec gry</h2>}
            <QuizBins onBinClick={handleBinClick} randomWaste={randomWaste} />
            {!isQuizStarted && (
                <button className={button} onClick={handleQuizStart}>Start</button>
            )}
        </div>
    )
}