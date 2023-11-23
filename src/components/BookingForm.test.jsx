import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ReservationPage from './ReservationPage';

test('renders ReservationPage', () => {
  render(
    <MemoryRouter>
      <ReservationPage />
    </MemoryRouter>
  );

  // Your test assertions
});
