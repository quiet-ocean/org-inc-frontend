import type { AnyAction, Reducer } from 'redux'

import { NotificationActionTypes } from './notification-action'
import type { NotificationState } from './notification-state'
import { initialNotificationState } from './notification-state'

const notificationReducer: Reducer<NotificationState> = (
  state = initialNotificationState,
  action: AnyAction,
) => {
  switch (action.type) {
    case NotificationActionTypes.PUSH_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications
          ? [...state.notifications, action.payload]
          : [action.payload],
      }
    default:
      return state
  }
}

export default notificationReducer
