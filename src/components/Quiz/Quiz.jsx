import React, { useState } from 'react';
import { container, binsContainer, bin, button } from './Quiz.styles';

export const Quiz = () => {
    const [wasteData, setWasteData] = useState(undefined);

    const getWasteData = () => {
        fetch('./waste.json')
            .then(response => response.json())
            .then(response => setWasteData(response))
            .catch(err => console.warn(err))
    }

    return (
        <div className={container}>
            <h1>Quiz</h1>
            <h2>Sprawdź swoją wiedzę na temat segregacji śmieci</h2>
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
            <button className={button} onClick={getWasteData}>Start</button>
            {console.log(wasteData)}
        </div>
    )
}