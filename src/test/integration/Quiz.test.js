import React from 'react';
import axios from 'axios';
import { render, wait } from '@testing-library/react';
import { Quiz } from '../../components/Quiz/Quiz';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'; 

describe('Quiz component', () => {
    it('displays components correctly', () => {
        const {getByRole, getAllByRole, getByText} = render(<Quiz />)

        const mainHeader = getByRole('heading', { name: /quiz/i});
        const subHeader = getByRole('heading', { name: /sprawdź swoją wiedzę na temat segregacji śmieci/i });
        const bins = getAllByRole('img');

        expect(mainHeader).toBeInTheDocument();
        expect(subHeader).toBeInTheDocument();
        expect(bins).toHaveLength(5);

        expect(getByText(/papier/i)).toBeInTheDocument();
        expect(getByText(/metale i tworzywa sztuczne/i)).toBeInTheDocument();
        expect(getByText(/szkło/i)).toBeInTheDocument();
        expect(getByText(/bio/i)).toBeInTheDocument();
        expect(getByText(/zmieszane/i)).toBeInTheDocument();

        expect(getByRole('button', { name: /start/i })).toBeInTheDocument();
    });

    it('calls api request to get waste data', () => {
        jest.spyOn(axios, 'get').mockResolvedValue([]);

        render(<Quiz />)

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('./waste.json');
    });

    it('renders waste and replaced subheader while quiz started', async() => {
        jest.spyOn(axios, 'get').mockResolvedValue({ 
            data: [
                {
                    name: "Waste Mock",
                    description: "some description",
                    img: "image.png",
                    properBin: "bio"
                }
            ]
        });

        const {getByRole, queryByRole, getByText} = render(<Quiz />);

        await wait();
        userEvent.click(getByRole('button', { name: /start/i }));

        // Subheader should be changed
        const defaultSubheader = queryByRole('heading', { name: /sprawdź swoją wiedzę na temat segregacji śmieci/i });
        const expectedSubheader = getByRole('heading', { name: /wybierz odpowiedni pojemnik dla tego rodzaju odpadu/i });
        expect(defaultSubheader).not.toBeInTheDocument();
        expect(expectedSubheader).toBeInTheDocument();

        // mocked value rendered in QuizWaste label component
        const mockWasteImg = getByRole('img', { name: /waste mock/i });
        const mockWasteName = getByText(/waste mock/i);
        const mockWasteDescription = getByText(/some description/i);
        expect(mockWasteImg).toBeInTheDocument();
        expect(mockWasteName).toBeInTheDocument();
        expect(mockWasteDescription).toBeInTheDocument();
    });

    it('renders label with answer when click on waste bin', async() => {
        jest.spyOn(axios, 'get').mockResolvedValue({ 
            data: [
                {
                    name: "Waste Mock",
                    description: "some description",
                    img: "image.png",
                    properBin: "bio"
                }
            ]
        });

        const {getByRole, getByTestId} = render(<Quiz />);

        await wait();
        userEvent.click(getByRole('button', { name: /start/i }));

        userEvent.click(getByRole('img', { name: /plastic\-bin/i }))
        expect(getByTestId('wrong-answer-label')).toBeInTheDocument();

        userEvent.click(getByRole('img', { name: /bio\-bin/i }))
        expect(getByTestId('correct-answer-label')).toBeInTheDocument();
        expect(getByRole('button', { name: /dalej/i })).toBeInTheDocument();
    });
});