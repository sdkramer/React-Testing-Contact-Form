import React from 'react';
import {render, screen} from '@testing-library/react';
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

test('renders ContactForm without errors', () => {
  render(<ContactForm />);
})

test('renders input labels without error', () => {
  render(<ContactForm />);
  const fName = screen.getByText(/first name*/i);
  const lName = screen.getByText(/last name*/i);
  const email = screen.getByText(/email*/i);
  const message = screen.getByText(/message/i);

  expect(fName).toBeInTheDocument();
  expect(lName).not.toBeNull();
  expect(email).not.toHaveTextContent(/name/i);
  expect(message).toHaveTextContent(/message/i)
})

test('input forms can be typed into and submitted', () => {
render(<ContactForm />);

  const fNameInput = screen.getByLabelText(/first name/i);
  const lNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const button = screen.getByRole("button", {name: /submit/i})

  userEvent.type(fNameInput, 'se');
  userEvent.type(lNameInput, 'kramer');
  userEvent.type(emailInput, 'asda@dasd.com');
  userEvent.type(messageInput, 'hi there');

 act(() => {
   userEvent.click(button);

    const kramer = screen.getByText(/kramer/i);
  
  
  })
  expect(kramer).toBeInTheDocument();
 
  
})