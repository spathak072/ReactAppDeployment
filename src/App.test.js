import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the Marketing component
jest.mock('./Components/Marketing', () => () => <div data-testid="marketing-component" />);

describe('App component', () => {
    test('renders logo image', () => {
        render(<App />);
        const logoImg = screen.getByAltText(/logo/i);
        expect(logoImg).toBeInTheDocument();
    });

    test('renders edit instruction', () => {
        render(<App />);
        expect(screen.getByText(/and save to reload\./i)).toBeInTheDocument();
    });

    test('renders Hello World heading', () => {
        render(<App />);
        expect(screen.getByRole('heading', { name: /Hello World !!!!!!!!!!!/i })).toBeInTheDocument();
    });

    test('renders link to ReactJS.org', () => {
        render(<App />);
        const link = screen.getByRole('link', { name: /Hello World Test 123/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://reactjs.org');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('renders Marketing component', () => {
        render(<App />);
        expect(screen.getByTestId('marketing-component')).toBeInTheDocument();
    });
});