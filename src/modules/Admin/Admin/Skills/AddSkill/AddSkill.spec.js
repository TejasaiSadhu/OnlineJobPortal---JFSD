import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AddSkill from './AddSkill';

// Mock fetch to avoid actual network requests
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

describe('AddSkill Component', () => {
  test('renders AddSkill component', () => {
    render(
      <Router>
        <AddSkill />
      </Router>
    );

    expect(screen.getByText(/Add a new Skill/i)).toBeInTheDocument();
  });

  test('handles form submission', () => {
    render(
      <Router>
        <AddSkill />
      </Router>
    );

    fireEvent.change(screen.getByPlaceholderText(/Skill Name/i), { target: { value: 'React' } });
    fireEvent.change(screen.getByPlaceholderText(/Skill Description/i), { target: { value: 'JavaScript library' } });
    fireEvent.click(screen.getByText(/Create Skill/i));

    expect(global.fetch).toHaveBeenCalled();
  });

  test('handles Go Back button click', () => {
    const { container } = render(
      <Router>
        <AddSkill />
      </Router>
    );
    const goBackButton = screen.getByText(/Go Back/i);
    fireEvent.click(goBackButton);

    // Check if navigation happened, you might want to use a mock history to check
  });
});
