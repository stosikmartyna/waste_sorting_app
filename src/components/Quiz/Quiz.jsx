import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { container, button } from './Quiz.styles';
import { QuizBins } from './QuizBins';
import { QuizWaste } from './QuizWaste';

export const Quiz = () => {
    const [wasteData, setWasteData] = useState(undefined);
    const [randomWaste, setRandomWaste] = useState(undefined);
    const [isQuizStarted, setIsQuizStarted] = useState(false);

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
        alert('Brawo!')
        getRandomElement();
    }

    const handleBinClick = (binType) => {
        if (isQuizStarted) {
            const isCorrect = randomWaste.properBin === binType
            isCorrect
                ? handleCorrectAnswer()
                : alert('Zła odpowiedź')
        }
    }

    useEffect(() => {
        getWasteData();
    }, [])

    return (
        <div className={container}>
            <h1>Quiz</h1>
            {isQuizStarted 
                ? <QuizWaste randomWaste={randomWaste} />
                : <h2>Sprawdź swoją wiedzę na temat segregacji śmieci</h2>
            }
            <QuizBins onBinClick={handleBinClick} isQuizStarted={isQuizStarted} />
            {!isQuizStarted && (
                <button className={button} onClick={handleQuizStart}>Start</button>
            )}
        </div>
    )
}