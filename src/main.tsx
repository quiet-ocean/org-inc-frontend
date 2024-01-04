import { applyMiddleware, configureStore, Tuple } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import type { Store } from 'redux'
import thunk from 'redux-thunk'

import App from './App'

// import rootReducer from './common/reducers'

const root = ReactDOM.createRoot(document.getElementById('root')!)

// const store: Store<any> = configureStore({
//   devTools: process.env.NODE_ENV !== 'production',
//   // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk) as Tuple<any>,
//   reducer: rootReducer
// })
// Setup MSW mock server in development
if (process.env.NODE_ENV === 'development') {
  // Certify MSW's Service Worker is available before start React app.
  import('../mocks/browser')
    .then(({ worker }) => {
      worker.start()
    }) // Run <App /> when Service Worker is ready to intercept requests.
    .then(() => {
      root.render(<App />)
    })
  // Never setup MSW mock server in production
} else if (process.env.NODE_ENV === 'production') {
  root.render(<App />)
}
