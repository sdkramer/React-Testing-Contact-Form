import React from 'react';
import {render, screen} from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders ContactForm without errors', () => {
  render(<ContactForm />);
})

test('renders input labels without error', () => {
  render(<ContactForm />);
  const fName = screen.getByText(/first name*/i);
  const lName = screen.getByText(/last name*/i);
  const email = screen.getByText(/email*/i);
  const message = screen.getByText(/message/i);
})