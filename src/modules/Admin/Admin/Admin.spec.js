import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Admin from './Admin';

describe('Admin Component', () => {
  test('renders Admin component', () => {
    render(
      <Router>
        <Admin />
      </Router>
    );

    expect(screen.getByText(/Manage Freelancers/i)).toBeInTheDocument();
    expect(screen.getByText(/Manage Recruiters/i)).toBeInTheDocument();
    expect(screen.getByText(/Manage Skills/i)).toBeInTheDocument();
  });

  test('handles Add Skill button click', () => {
    const { container } = render(
      <Router>
        <Admin />
      </Router>
    );
    const addSkillButton = screen.getByText(/Add new Skill/i);
    fireEvent.click(addSkillButton);

    // Check if the navigation happened, you might want to use a mock history to check
    // or check the URL change using a mock function or memory router
  });

  test('handles Log Out button click', () => {
    const { container } = render(
      <Router>
        <Admin />
      </Router>
    );
    const logOutButton = screen.getByText(/Log Out/i);
    fireEvent.click(logOutButton);

    // Check if localStorage was cleared, and window.location.reload was called
    expect(localStorage.clear).toHaveBeenCalled();
    expect(window.location.reload).toHaveBeenCalled();
  });
});
