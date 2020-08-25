import React, { useState } from 'react';
import { container, binsContainer, bin, button } from './Quiz.styles';
import axios from 'axios';

export const Quiz = () => {
    const [wasteData, setWasteData] = useState(undefined);
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

    const handleButtonClick = () => {
        getWasteData();
        setIsQuizStarted(true);
    }

    return (
        <div className={container}>
            <h1>Quiz</h1>
            { !isQuizStarted 
                ? <h2>Sprawdź swoją wiedzę na temat segregacji śmieci</h2> 
                : <h2>Wybierz odpowiedni pojemnik dla tego rodzaju odpadu</h2> 
            }
            <div className={binsContainer}>
                <div className={bin}>
                    <img src="icons/recycle_bin_paper.png" alt="paper-bin"/>
                    <h3>Papier</h3>
                </div>
                <div className={bin}>
                    <img src="icons/recycle_bin_plastic.png" alt="plastic-bin"/>
                    <h3>Plastik</h3>
                </div>
                <div className={bin}>
                    <img src="icons/recycle_bin_glass.png" alt="glass-bin"/>
                    <h3>Szkło</h3>
                </div>
                <div className={bin}>
                    <img src="icons/recycle_bin_bio.png" alt="bio-bin"/>
                    <h3>Bio</h3>
                </div>
                <div className={bin}>
                    <img src="icons/recycle_bin_mix.png" alt="mixed-bin"/>
                    <h3>Zmieszane</h3>
                </div>
            </div>
            {!isQuizStarted && (
                <button className={button} onClick={handleButtonClick}>Start</button>
            )}
        </div>
    )
}