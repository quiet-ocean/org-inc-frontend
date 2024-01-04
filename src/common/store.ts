import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

import rootReducer from './reducers'

export const makeStore = () => {
  return configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
