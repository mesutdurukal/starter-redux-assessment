import userEvent from '@testing-library/user-event';

import { render, screen } from '../../test-utils';
import App from '../../App';

test('adds a dog to the list of dogs after clicking the submit button', async () => {
  render(<App />);

  expect(screen.queryByText(/australian shepherd/i)).not.toBeInTheDocument();

  await userEvent.type(
    screen.getByRole('textbox', { name: /Enter your image's url/i }),
    'https://images.dog.ceo/breeds/australian-shepherd/pepper.jpg'
  );

  await userEvent.type(
    screen.getByRole('textbox', { name: /Enter your image's caption:/i }),
    'Australian Shepherd'
  );

  await userEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(await screen.findByText(/australian shepherd/i)).toBeInTheDocument();
});

test('removes a dog from the list of dogs after clicking the Delete button', async () => {
  render(<App />);

  expect(screen.getByText(/basenji/i)).toBeInTheDocument();

  await userEvent.click(screen.getByTestId(/basenji-button/i));

  expect(screen.queryByText(/basenji/i)).not.toBeInTheDocument();
});
