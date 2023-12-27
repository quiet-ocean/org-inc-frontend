import { render, screen, waitFor } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import React from 'react'

import App from './App'

test('Work App Component without error', () => {
  render(<App />)

  expect(screen.getByText("Hello Erica, with a week until end of the month, the company is on a way to book sizable revenue")).toBeInTheDocument()
})

test('Working Counter', async () => {
  // const user = userEvent.setup()
  // const { getByText } = render(<App />)
  render(<App />)
  // expect(getByText('count is: 0')).toBeInTheDocument()

  // const button = getByText(/count is: \d/)

  // await user.click(button)
  // expect(getByText('count is: 1')).toBeInTheDocument()

  // await user.click(button)
  // expect(getByText('count is: 2')).toBeInTheDocument()

  // await user.click(button)
  // expect(getByText('count is: 3')).toBeInTheDocument()
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
