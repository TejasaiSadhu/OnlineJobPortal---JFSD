import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Recruiters from './Recruiters';

// Mock fetch to avoid actual network requests
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, firstName: 'Jane', lastName: 'Doe', userName: 'janedoe' }]),
  })
);

describe('Recruiters Component', () => {
  test('renders Recruiters component', async () => {
    render(
      <Router>
        <Recruiters />
      </Router>
    );

    // Check if data is fetched and rendered
    await waitFor(() => expect(screen.getByText(/Recruiters List/i)).toBeInTheDocument());
    expect(screen.getByText('Jane')).toBeInTheDocument();
  });

  test('handles Go Back button click', () => {
    const { container } = render(
      <Router>
        <Recruiters />
      </Router>
    );
    const goBackButton = screen.getByText(/Go Back/i);
    fireEvent.click(goBackButton);

    // Check if navigation happened, you might want to use a mock history to check
  });
});
