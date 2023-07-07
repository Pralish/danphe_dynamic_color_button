import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

test('renders button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/CLICK ME!/i);
  expect(buttonElement).toBeInTheDocument();

});

test('changes button background color', () => {
  render(<App />);
  const buttonElement = screen.getByText(/CLICK ME!/i);
  expect(buttonElement).toHaveStyle(`background-color: blue`)
  
  fireEvent.click(buttonElement)
  // if previous color was blue, the next color should always be green
  expect(buttonElement).toHaveStyle(`background-color: green`)

  fireEvent.click(buttonElement)
  // should change to random color, except green
  expect(buttonElement).not.toHaveStyle(`background-color: green`)
});

test('adds to color history', () => {
  render(<App />);

  const buttonElement = screen.getByText(/CLICK ME!/i);
  const list = screen.getByRole("list")
  const { getAllByRole } = within(list)
  
  for(let i = 1; i < 5; i++) {
    fireEvent.click(buttonElement)
    expect(getAllByRole('listitem').length).toEqual(i);
  }
});