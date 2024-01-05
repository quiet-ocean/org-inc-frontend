// import type { AnyAction, Dispatch, MiddlewareAPI } from 'redux'
import type { AnyAction, Dispatch } from 'redux'

import type { Socket } from '../services/socket.service'

export const socketMiddleware =
  (socket: Socket) =>
  // (params: MiddlewareAPI) =>
  () =>
  (next: Dispatch<any>) =>
  (action: AnyAction) => {
    // const { dispatch, getState } = params
    const { type } = action

    switch (type) {
      case 'socket/connect':
        socket.connect('ws://localhost:5000')

        socket.on('open', () => {})
        socket.on('message', () => {})
        socket.on('close', () => {})
        break

      case 'socket/disconnect':
        socket.disconnect()
        break

      default:
        break
    }

    return next(action)
  }
