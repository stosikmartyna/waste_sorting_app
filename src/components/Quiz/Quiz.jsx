import React from 'react';
import { style } from './Quiz.styles'

export const Quiz = () => {
    return (
        <>
            <h1>Quiz</h1>
            <h2>Sprawdź swoją wiedzę na temat segregacji śmieci</h2> 
            <img src="icons/recycle_bin_paper.png" style={style} alt="paper-bin"/>
            <img src="icons/recycle_bin_plastic.png" style={style} alt="plastic-bin"/>
            <img src="icons/recycle_bin_glass.png" style={style} alt="glass-bin"/>
            <img src="icons/recycle_bin_bio.png" style={style} alt="bio-bin"/>
            <img src="icons/recycle_bin_mix.png" style={style} alt="mixed-bin"/>
        </>
    )
}