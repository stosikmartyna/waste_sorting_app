import React, { useState, useEffect } from 'react';
import { container, wasteContainer, binsContainer, bin, button } from './Quiz.styles';
import axios from 'axios';

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
            {!isQuizStarted 
                ? <h2>Sprawdź swoją wiedzę na temat segregacji śmieci</h2> 
                : <h2>Wybierz odpowiedni pojemnik dla tego rodzaju odpadu</h2> 
            }
            {isQuizStarted && randomWaste && (
                <div className={wasteContainer}>
                    <img src={randomWaste.img} alt={randomWaste.name}/> 
                    <div>
                        <h3>{randomWaste.name}</h3>
                        <p>{randomWaste.description}</p>
                    </div>
                </div>
            )}
            <div className={binsContainer}>
                <div className={bin(isQuizStarted)} onClick={() => handleBinClick('paper')}>
                    <img src="icons/recycle_bin_paper.png" alt="paper-bin"/>
                    <h3>Papier</h3>
                </div>
                <div className={bin(isQuizStarted)} onClick={() => handleBinClick('plastic')}>
                    <img src="icons/recycle_bin_plastic.png" alt="plastic-bin"/>
                    <h3>Plastik</h3>
                </div>
                <div className={bin(isQuizStarted)} onClick={() => handleBinClick('glass')}>
                    <img src="icons/recycle_bin_glass.png" alt="glass-bin"/>
                    <h3>Szkło</h3>
                </div>
                <div className={bin(isQuizStarted)} onClick={() => handleBinClick('bio')}>
                    <img src="icons/recycle_bin_bio.png" alt="bio-bin"/>
                    <h3>Bio</h3>
                </div>
                <div className={bin(isQuizStarted)} onClick={() => handleBinClick('mixed')}>
                    <img src="icons/recycle_bin_mix.png" alt="mixed-bin"/>
                    <h3>Zmieszane</h3>
                </div>
            </div>
            {!isQuizStarted && (
                <button className={button} onClick={handleQuizStart}>Start</button>
            )}
        </div>
    )
}