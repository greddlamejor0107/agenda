import { render, screen } from '@testing-library/react';
import App from './App';

test('renders agenda title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Agenda Electrónica/i);
    expect(linkElement).toBeInTheDocument();
});
