import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

import { socketMiddleware } from './middleware/socket.middleware'
import rootReducer from './reducers'
import { SocketSingleton } from './services/socket.service'

const socket = SocketSingleton.getInstance()
// socket.connect('localhost:5000')

export const makeStore = () => {
  return configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    // middleware: applyMiddleware(thunk, socketMiddleware(socket)),
    // middleware: [socketMiddleware(socket)],
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([thunk, socketMiddleware(socket)]),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
