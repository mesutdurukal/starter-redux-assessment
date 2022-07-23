import userEvent from '@testing-library/user-event';

import photos from '../photos/photos.data';
import { render, screen } from '../../test-utils';
import App from '../../App';

test('displays the dogs that match the user-provided search term', async () => {
  render(<App />);

  photos.forEach((photo) =>
    expect(screen.getByText(photo.caption)).toBeInTheDocument()
  );

  const searchTerm = 'terrier';
  const filtered = photos.filter((photo) =>
    photo.caption.toLowerCase().includes(searchTerm)
  );
  const excluded = photos.filter(
    (photo) => !photo.caption.toLowerCase().includes(searchTerm)
  );

  await userEvent.type(
    screen.getByRole('searchbox', { name: /Search by caption:/i }),
    'terrier'
  );

  filtered.forEach((photo) =>
    expect(screen.getByText(photo.caption)).toBeInTheDocument()
  );

  excluded.forEach((photo) =>
    expect(screen.queryByText(photo.caption)).not.toBeInTheDocument()
  );
});
