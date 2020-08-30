import React from 'react';
import { binsContainer, bin } from './Quiz.styles';

export const QuizBins = ({onBinClick, isQuizStarted}) => {
    return (
        <div className={binsContainer}>
            <div className={bin(isQuizStarted)} onClick={() => onBinClick('paper')}>
                <img src="icons/recycle_bin_paper.png" alt="paper-bin"/>
                <h3>Papier</h3>
            </div>
            <div className={bin(isQuizStarted)} onClick={() => onBinClick('plastic')}>
                <img src="icons/recycle_bin_plastic.png" alt="plastic-bin"/>
                <h3>Metale i tworzywa sztuczne</h3>
            </div>
            <div className={bin(isQuizStarted)} onClick={() => onBinClick('glass')}>
                <img src="icons/recycle_bin_glass.png" alt="glass-bin"/>
                <h3>Szkło</h3>
            </div>
            <div className={bin(isQuizStarted)} onClick={() => onBinClick('bio')}>
                <img src="icons/recycle_bin_bio.png" alt="bio-bin"/>
                <h3>Bio</h3>
            </div>
            <div className={bin(isQuizStarted)} onClick={() => onBinClick('mixed')}>
                <img src="icons/recycle_bin_mix.png" alt="mixed-bin"/>
                <h3>Zmieszane</h3>
            </div>
        </div>
    )
}