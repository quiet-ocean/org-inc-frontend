import { render, screen, waitFor } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import React from 'react'

import App from './App'

test('Work App Component without error', () => {
  render(<App />)

  expect(
    screen.getByText(
      'Hello Erica, with a week until end of the month, the company is on a way to book sizable revenue',
    ),
  ).toBeInTheDocument()
})

test('Working Counter', async () => {
  render(<App />)
})

test('working with msw', async () => {
  render(<App />)

  await waitFor(
    () => {
      expect(screen.getByText('Org, Inc.')).toBeInTheDocument()
      expect(screen.getByText('Summary')).toBeInTheDocument()
    },
    { timeout: 5000 },
  )
})
