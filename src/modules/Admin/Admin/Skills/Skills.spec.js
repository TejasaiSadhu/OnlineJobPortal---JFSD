import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Skills from './Skills';

// Mock fetch to avoid actual network requests
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: 'JavaScript', description: 'Programming language' }]),
  })
);

describe('Skills Component', () => {
  test('renders Skills component', async () => {
    render(
      <Router>
        <Skills />
      </Router>
    );

    // Check if data is fetched and rendered
    await waitFor(() => expect(screen.getByText(/Skills List/i)).toBeInTheDocument());
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  test('handles Go Back button click', () => {
    const { container } = render(
      <Router>
        <Skills />
      </Router>
    );
    const goBackButton = screen.getByText(/Go Back/i);
    fireEvent.click(goBackButton);

    // Check if navigation happened, you might want to use a mock history to check
  });
});
