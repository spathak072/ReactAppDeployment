import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock child components
jest.mock('./Components/Header', () => () => <div data-testid="header">Header</div>);
jest.mock('./Components/Marketing', () => () => <div data-testid="marketing">Marketing</div>);

describe('App', () => {
    test('renders Header and Marketing components', () => {
        render(<App />);
        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('marketing')).toBeInTheDocument();
    });


});