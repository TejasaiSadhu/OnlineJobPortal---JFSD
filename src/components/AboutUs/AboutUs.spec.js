import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

test('renders About Us component', () => {
  render(<AboutUs />);

  const headingElement = screen.getByText(/About Us/i);
  expect(headingElement).toBeInTheDocument();

  const subheadingElement = screen.getByText(/We are a group of techies currently working on JFSD Project/i);
  expect(subheadingElement).toBeInTheDocument();

  const teamMemberNameElement = screen.getByText(/Sadhu Teja sai /i);
  expect(teamMemberNameElement).toBeInTheDocument();

  const phoneNumberElement = screen.getByText(/Mobile No. - 6305093493/i);
  expect(phoneNumberElement).toBeInTheDocument();

  const emailElement = screen.getByText(/Email Id - Sadhutejasai86@gmail.com/i);
  expect(emailElement).toBeInTheDocument();
});

test('renders all team member cards', () => {
  render(<AboutUs />);

  const cardElements = screen.getAllByRole('img');
  expect(cardElements.length).toBeGreaterThanOrEqual(7); // Adjust based on the number of team members
});
