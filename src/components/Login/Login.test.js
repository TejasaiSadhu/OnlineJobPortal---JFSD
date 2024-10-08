// Login.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';

test('renders login form', () => {
  render(<Login />);
  expect(screen.getByLabelText(/UserName/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Select Role/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Reset/i })).toBeInTheDocument();
});

test('shows error message for empty fields', async () => {
  render(<Login />);
  fireEvent.click(screen.getByRole('button', { name: /Login/i }));
  expect(await screen.findByText(/Please enter a userName./i)).toBeInTheDocument();
  expect(await screen.findByText(/Please enter a password./i)).toBeInTheDocument();
  expect(await screen.findByText(/Please choose a valid role./i)).toBeInTheDocument();
});
