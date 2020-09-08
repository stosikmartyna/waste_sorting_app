import React from 'react';
import { render} from '@testing-library/react';
import { QuizAnswerLabel } from '../../components/Quiz/QuizAnswerLabel';
import '@testing-library/jest-dom/extend-expect'; 

describe('QuizAnswerLabel component', () => {
    it('renders QuizAnswerLabel component with correct style and content (correct answer)', () => {
        const mockRandomWaste = {
            name: "Waste Mock",
            description: "some description",
            img: "image.png",
            properBin: "bio"
        }

        const {getByRole, getByTestId} = render(
            <QuizAnswerLabel 
                randomWaste={mockRandomWaste} 
                isAnswerCorrect={true} 
                setIsAnswerCorrect={jest.fn()} 
                getRandomElement={jest.fn()} 
            />
        )

        expect(getByRole('button', { name: /dalej/i })).toBeInTheDocument();
        expect(getByTestId('correct-answer-label')).toBeInTheDocument();
        expect(getByTestId('correct-answer-label')).toHaveStyle('background-color: #CCFFA9');

    })

    it('renders QuizAnswerLabel component with correct style and content (wrong answer)', () => {
        const mockRandomWaste = {
            name: "Waste Mock",
            description: "some description",
            img: "image.png",
            properBin: "bio"
        }

        const {queryByRole, getByTestId} = render(
            <QuizAnswerLabel 
                randomWaste={mockRandomWaste} 
                isAnswerCorrect={false} 
                setIsAnswerCorrect={jest.fn()} 
                getRandomElement={jest.fn()} 
            />
        )

        expect(queryByRole('button', { name: /dalej/i })).not.toBeInTheDocument();
        expect(getByTestId('wrong-answer-label')).toBeInTheDocument();
        expect(getByTestId('wrong-answer-label')).toHaveStyle('background-color: #FF9191');
    })
})