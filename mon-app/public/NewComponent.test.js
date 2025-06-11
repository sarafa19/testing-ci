import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyButton from './MyButton';

test('button renders and responds to click', () => {
  const handleClick = jest.fn();
  render(<MyButton onClick={handleClick}>Click me</MyButton>);
  const button = screen.getByText(/click me/i);
  userEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});