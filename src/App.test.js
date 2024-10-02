import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Auto-Planner title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Auto-Planner/i); //check for title
  expect(titleElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  
  const homeLink = screen.getByText(/home/i); // Check for "Home" link
  expect(homeLink).toBeInTheDocument();

  const scheduleLink = screen.getByText(/schedule/i); // Check for "Schedule" link
  expect(scheduleLink).toBeInTheDocument();
});
