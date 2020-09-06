import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { Quiz } from '../../components/Quiz/Quiz';
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
    })
});