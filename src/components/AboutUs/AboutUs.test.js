import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

test('renders About Us component', () => {
  render(<AboutUs />);
  const headingElement = screen.getByText(/About Us/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders team members', () => {
  render(<AboutUs />);
  const teamMemberName = screen.getByText(/Sadhu Teja Sai/i);
  const teamMemberRole = screen.getByText(/Project Developer/i);
  
  expect(teamMemberName).toBeInTheDocument();
  expect(teamMemberRole).toBeInTheDocument();
});

test('renders default image for team member without an image URL', () => {
  render(<AboutUs />);
  const imgElement = screen.getByAltText(/Photo of Sadhu Teja Sai/i);
  
  // Verify that the image element is in the document
  expect(imgElement).toBeInTheDocument();

  // Optionally, check the src attribute if you set a default image in your component
  expect(imgElement.src).toContain('path/to/default-image.jpg'); // Ensure this matches your default image path
});
