import type { AnyAction, Dispatch, Middleware, MiddlewareAPI } from 'redux'
// import type { AnyAction, Dispatch, Middleware } from 'redux'

import { io } from 'socket.io-client'

import type { SocketSingleton } from '../services/socket.service'
import { WidgetActionTypes } from '../state/widget/widget-action'

export const socketMiddleware: (socket: SocketSingleton) => Middleware = (socket: SocketSingleton) => {

  let _socket: any = null

  return (params: MiddlewareAPI) => (next: Dispatch<any>) => (action: AnyAction) => {
      const { dispatch } = params
      const { type } = action
      switch (type) {
        case 'socket/connect':
          _socket = io('localhost:5000')
          _socket.on('connect', () => console.log('socket connect'))
          _socket.on('disconnect', () => console.log('socket disconnect'))
          _socket.on('notification', (event: any) =>
            console.log('socket notificatin', event),
          )

          _socket.on('message', (event: any) => {
            console.log('socket message event', event, dispatch)
            dispatch({ type: WidgetActionTypes.ADD_WIDGET, payload: event })
          })
          break
        case 'socket/get-data':
          console.log('socket/send notify')
          if (_socket) {
            _socket.emit('message')
          }
          break
        case 'socket/disconnect':
          socket.disconnect()
          break

        default:
          break
      }

      return next(action)
    }
}
